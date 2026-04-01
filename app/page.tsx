import { NavButton } from "./components/nav-button";

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Next.js demo</p>
        <h1>Button Preview App</h1>
        <p className="lede">
          A compact React app with a single action button that opens a preview
          page.
        </p>
        <NavButton href="/preview">
          Open preview
        </NavButton>
      </section>
    </main>
  );
}
