import Link from "next/link";

export default function PreviewPage() {
  return (
    <main className="shell">
      <section className="preview">
        <div className="preview-card">
          <p className="eyebrow">Preview</p>
          <h1>Static mockup</h1>
          <div className="mockup">
            <div className="mockup-header" />
            <div className="mockup-body">
              <div className="mockup-line short" />
              <div className="mockup-line" />
              <div className="mockup-line" />
            </div>
          </div>
          <p className="lede">
            This page acts as a simple stand-in for a product or component
            preview.
          </p>
          <Link className="button secondary" href="/">
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
