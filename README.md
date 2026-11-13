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

The repository is [`aaronik/kellyhead-site`](https://github.com/aaronik/kellyhead-site). Pages deploys from **gh-pages → / (root)**. The custom domain `kellyhead.com` is configured in `public/CNAME` and included in each build.

All 29 original photo attachments from Kelly's emails are represented by optimized WebP copies in `assets/photos/` and each is included in the gallery. To add more, convert an original to WebP and add its relative path to `index.html`. `npm test` checks asset references and verifies that the complete 29-photo collection appears exactly once in the gallery.
