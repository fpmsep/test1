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

## Railway deployment

This project can be deployed on Railway as a static site because it uses Next.js static export.

Important details:

- `next.config.ts` is configured with `output: "export"`, so the build produces static files instead of a running Next server.
- Railway can host the generated `out/` directory as a static site.
- This setup is not intended for SSR, API routes, server actions, or other features that require a live Next.js server process.

If you want a full server-based Railway deployment later, the app would need to be reconfigured for `next start` or another Node server runtime.

### Example Railway setup

If you deploy this as a static site on Railway, use settings like these:

```text
Build command: npm run build
Output directory: out
```

If you are using a Railway service that requires a start command, it should serve the generated static files from `out/` instead of running `next start`.
