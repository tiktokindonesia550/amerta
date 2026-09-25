import crypto from 'node:crypto'
export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID
  const baseUrl = process.env.PUBLIC_BASE_URL || 'https://amerta-mc4w.vercel.app'
  if (!clientId) {
    return res.status(500).send('OAUTH_GITHUB_CLIENT_ID belum dikonfigurasi di Vercel.')
  }
  const state = Buffer.from(JSON.stringify({
    nonce: crypto.randomUUID(),
    ts: Date.now()
  })).toString('base64url')
  const redirectUri = `${baseUrl.replace(/\/$/, '')}/api/callback`
  res.setHeader('Set-Cookie', `decap_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`)
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user:email',
    state
  })
  res.redirect(302, `https://github.com/login/oauth/authorize?${params.toString()}`)
}
