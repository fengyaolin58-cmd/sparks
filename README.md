# Sparks — website

A simple static showcase site. No build step, no framework — just
`index.html`, `css/style.css`, and `js/main.js`.

## Structure

```
index.html              the whole page
css/style.css           all styling
js/main.js              the drifting-spark background effect (safe to delete)
assets/screenshots/     drop real screenshots here (see the README in that folder)
```

Everything marked `[ Placeholder — ... ]` in `index.html` is meant to be
replaced with real copy once it's ready.

## Previewing locally

Just open `index.html` directly in a browser — no server needed, nothing
here depends on one.

## Deploying (free, with your own domain)

Any of these work well for a static site like this one:

- **GitHub Pages** — push this folder to a GitHub repo, enable Pages in
  the repo's Settings, then add your domain under Settings → Pages →
  Custom domain. You'll add a `CNAME`/`A` record at your domain
  registrar pointing at GitHub's Pages servers (GitHub's docs walk
  through the exact DNS records).
- **Cloudflare Pages** — connect the repo (or drag-and-drop the folder
  directly), then attach your domain under the project's Custom domains
  tab. If your domain's DNS is already on Cloudflare this is usually the
  smoothest option.
- **Netlify** / **Vercel** — same idea: connect the repo or drag-and-drop
  the folder, then add your custom domain in the project's settings.

Whichever you pick, the actual DNS change (pointing your domain at
whichever service you choose) happens at your domain registrar, and it
can take anywhere from a few minutes to a few hours to propagate.
