# first

A small Next.js app configured for Cloudflare Pages static deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

This generates the static site in `out/`.

## Cloudflare deployment

Use Cloudflare Pages with these settings:

- Framework preset: `Next.js`
- Build command: `npm run build`
- Build output directory: `out`

Or deploy from the command line:

```bash
npm run deploy:cloudflare
```

## Notes

- The project is configured for static export in [`next.config.ts`](/home/fernando/projects/first/next.config.ts).
- `wrangler.toml` is included for Cloudflare Pages output metadata.
