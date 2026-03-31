import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { href: "#rankings", label: "Rankings" },
  { href: "#palette", label: "Palette" },
  { href: "#experience", label: "Experience" },
  { href: "#methodology", label: "Methodology" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-3 z-50 px-3 pt-3 sm:top-4 sm:px-4">
      <div
        className={clsx(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-full border border-brand-royal/10 px-5 py-4 backdrop-blur-xl transition-all duration-500 sm:px-7",
          isScrolled ? "bg-brand-ivory/90 shadow-soft" : "bg-brand-ivory/75 shadow-[0_18px_42px_rgba(18,32,20,0.07)]",
        )}
      >
        <a className="inline-flex items-center gap-3" href="#top">
          <span className="grid size-11 place-items-center rounded-full bg-[linear-gradient(145deg,#0F6D48,#F0C650)] font-display text-2xl font-bold text-white shadow-glow">
            50
          </span>
          <span className="font-display text-xl font-bold tracking-[0.01em] text-brand-royal">
            Top 50 Brands Nigeria<sup className="text-[0.55em]">®</sup>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-brand-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="relative transition-colors duration-300 hover:text-brand-royal"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
