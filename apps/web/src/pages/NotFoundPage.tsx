import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="surface-card max-w-xl p-10 text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-5 font-display text-5xl font-semibold text-brand-royal">This route does not exist.</h1>
        <p className="mt-4 text-base leading-7 text-brand-muted">
          The Top 50 Brands Nigeria® redesign is currently focused on the homepage experience.
        </p>
        <Link
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-gold-band px-6 font-semibold text-brand-royal shadow-glow"
          to="/"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
