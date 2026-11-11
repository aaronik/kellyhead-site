# Kelly Head

A responsive, photo-led static site for Kelly Head, restoration specialist. The copy is based on Kelly's September 2026 emails, including her nature photographs and the forwarded KKRN program description. This is a first draft; Kelly should approve the wording, photo selection, and public contact address before sharing widely.

## Development

```sh
npm install
npm start           # http://127.0.0.1:3000
npm test
npm run build       # outputs build/
```

## Deployment

This uses the same GitHub Pages scheme as `shastasong_remake` and `duanemillermusic.com`: the source lives on `main`, and `gh-pages --dotfiles -d build` publishes the built static site on the `gh-pages` branch.

```sh
npm run release     # build, deploy to gh-pages, remove local build/
```

This environment did not permit Git write operations, so the repository and Pages branch still need to be created. From this directory, run:

```sh
git init -b main
git add .
git commit -m "Build Kelly Head restoration site"
gh repo create aaronik/kellyhead-site --public --source=. --remote=origin --push
npm install
npm run release
```

Then enable Pages in repository settings with **Deploy from a branch → gh-pages → / (root)**. The custom domain `kellyhead.com` is configured in `public/CNAME` and included in each build. Point the domain's DNS at GitHub Pages, confirm `kellyhead.com` in the Pages settings, and enable **Enforce HTTPS** once the certificate is ready.

Original photos were supplied by Kelly by email; the site includes optimized WebP copies under `assets/photos/`. To add more, convert an original to WebP and add its relative path to `index.html`. `npm test` checks that local assets referenced by the page exist.
