# AMERTA CMS + GitHub + Vercel

Repository: `tiktokindonesia550/amerta`
Production URL: `https://amerta-mc4w.vercel.app`
CMS URL: `https://amerta-mc4w.vercel.app/admin/`

## 1. Deploy repository
Push this project ke branch `main` repository `tiktokindonesia550/amerta`.

## 2. GitHub OAuth App
GitHub > Settings > Developer settings > OAuth Apps > New OAuth App.

Homepage URL:
`https://amerta-mc4w.vercel.app`

Authorization callback URL:
`https://amerta-mc4w.vercel.app/api/callback`

Generate Client Secret. Jangan masukkan secret ke GitHub atau source code.

## 3. Vercel Environment Variables
Tambahkan:

`OAUTH_GITHUB_CLIENT_ID` = Client ID dari GitHub OAuth App
`OAUTH_GITHUB_CLIENT_SECRET` = Client Secret dari GitHub OAuth App
`PUBLIC_BASE_URL` = `https://amerta-mc4w.vercel.app`

Set untuk Production, Preview, dan Development bila diperlukan.

## 4. GitHub permissions
Akun yang login ke CMS harus mempunyai akses write/push ke repository `tiktokindonesia550/amerta`, sesuai kebutuhan GitHub backend Decap.

## 5. Buka CMS
`https://amerta-mc4w.vercel.app/admin/`

CMS mengelola:
- Bukti Publikasi melalui `content/case-studies.json`
- SEO / Insight melalui `content/articles.json`
- Upload media ke `assets/uploads`

## 6. Jika masih muncul error
Pastikan file ini sudah benar-benar ada di production deployment:
- `/admin/config.yml`
- `/admin/index.html`
- `/api/auth`
- `/api/callback`

Lalu lakukan Redeploy di Vercel.
