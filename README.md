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

## AWS deployment

This project is a static export, so the simplest AWS setup is **Amazon S3 + CloudFront**.

### 1. Build the site

```bash
npm run build
```

This generates the static output in `out/`.

### 2. Create an S3 bucket

- Create a new S3 bucket for the site files.
- Upload the contents of `out/` to the bucket.
- If you want the bucket to serve files directly, enable static website hosting.

### 3. Put CloudFront in front of the bucket

- Create a CloudFront distribution with the S3 bucket as the origin.
- Set `index.html` as the default root object.
- If you are using the bucket as a private origin, configure an Origin Access Control or Origin Access Identity.

### 4. Deploy updates

Whenever you change the app, rebuild and upload again:

```bash
npm run build
```

Then sync the new `out/` files to S3 and let CloudFront serve the updated site.

### Optional: AWS Amplify

You can also deploy this app with AWS Amplify as a static site.

- Build command: `npm run build`
- Output directory: `out`

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
