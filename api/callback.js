export default async function handler(req, res) {
  const { code, state, error, error_description } = req.query || {}
  const baseUrl = process.env.PUBLIC_BASE_URL || 'https://amerta-mc4w.vercel.app'
  if (error) return html(res, false, error_description || error)
  if (!code || !state) return html(res, false, 'Kode OAuth atau state tidak tersedia.')

  const cookie = req.headers.cookie || ''
  const match = cookie.match(/(?:^|;\s*)decap_oauth_state=([^;]+)/)
  if (!match || decodeURIComponent(match[1]) !== state) return html(res, false, 'Validasi OAuth state gagal. Silakan coba login lagi.')

  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET
  if (!clientId || !clientSecret) return html(res, false, 'Credential GitHub OAuth belum dikonfigurasi di Vercel.')

  const redirectUri = `${baseUrl.replace(/\/$/, '')}/api/callback`
  const tokenResp = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, redirect_uri: redirectUri, state })
  })
  const data = await tokenResp.json()
  if (!tokenResp.ok || !data.access_token) return html(res, false, data.error_description || data.error || 'GitHub tidak mengembalikan access token.')
  return html(res, true, data.access_token)
}

function html(res, success, value) {
  const safe = JSON.stringify(value || '').replace(/</g, '\\u003c')
  const payload = success
    ? `{ token: ${safe}, provider: 'github' }`
    : `{ error: ${safe} }`
  const message = success
    ? `authorization:github:success`
    : `authorization:github:error`
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Set-Cookie', 'decap_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0')
  res.status(200).send(`<!doctype html><html><body><script>
    (function(){
      var message = '${message}';
      var payload = ${payload};
      if (window.opener) window.opener.postMessage(message, '*');
      if (window.opener) window.opener.postMessage(JSON.stringify(payload), '*');
      document.body.innerHTML = '<p style="font-family:Arial,sans-serif;padding:24px">' + (${success ? "'Login berhasil. Jendela ini dapat ditutup.'" : "'Login gagal: ' + payload.error"}) + '</p>';
      setTimeout(function(){ window.close(); }, 1200);
    })();
  </script></body></html>`)
}
