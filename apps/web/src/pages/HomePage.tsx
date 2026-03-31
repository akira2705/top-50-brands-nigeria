import { useEffect, useState } from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { CeremonialIntro } from "@/components/CeremonialIntro";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SignatureTitle } from "@/components/SignatureTitle";
import {
  editorialButtons,
  featureCards,
  marqueeBrands,
  methodologyPillars,
  paletteCards,
  premiumTraits,
  proofPoints,
  rankingHighlights,
} from "@/content/siteContent";

export function HomePage() {
  const [isReady, setIsReady] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setIsReady(true);
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }

    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 2300);
    const readyTimer = window.setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      setIsReady(true);
    }, 2950);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(readyTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {!isReady && <CeremonialIntro isLeaving={isLeaving} />}

      <div className="scroll-progress-wrap">
        <div className="scroll-progress-bar" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      </div>

      <div
        id="top"
        className={clsx(
          "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          isReady ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <section className="mx-auto grid min-h-[calc(100vh-140px)] w-full max-w-7xl gap-8 px-4 pb-12 pt-14 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.86fr)] lg:px-8 lg:pt-20">
          <RevealOnScroll className="relative">
            <p className="eyebrow">Nigeria&apos;s definitive annual brand honour roll, reborn with ceremony.</p>
            <div className="mt-4">
              <SignatureTitle isReady={isReady} />
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,5vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-brand-royal">
              An editorial stage for Nigeria&apos;s most influential brands, designed to feel prestigious the moment it loads.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
              This reimagined interface blends ivory-white space, luminous gold highlights, and royal emerald depth to deliver a cleaner, richer, and more memorable Top 50 experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {editorialButtons.map((button, index) => {
                const Icon = button.icon;
                return (
                  <a
                    key={button.href}
                    href={button.href}
                    className={clsx(
                      "inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-6 font-semibold transition-transform duration-300 hover:-translate-y-0.5",
                      index === 0
                        ? "bg-gold-band text-brand-royal shadow-glow"
                        : "border border-brand-royal/10 bg-white/75 text-brand-royal shadow-soft backdrop-blur",
                    )}
                  >
                    <span>{button.label}</span>
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {proofPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <RevealOnScroll key={point.value} delay={index * 120}>
                    <article className="surface-card relative min-h-[170px] overflow-hidden p-6">
                      <div className="absolute inset-0 left-0 top-0 h-44 w-44 bg-[radial-gradient(circle,rgba(240,198,80,0.18),transparent_65%)]" />
                      <Icon className="relative z-[1] size-5 text-brand-emerald" />
                      <strong className="relative z-[1] mt-4 block font-display text-4xl font-bold text-brand-royal">
                        {point.value}
                      </strong>
                      <p className="relative z-[1] mt-2 text-sm leading-7 text-brand-muted">{point.label}</p>
                    </article>
                  </RevealOnScroll>
                );
              })}
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="grid gap-5 lg:pt-10" delay={140}>
            <article className="surface-card relative overflow-hidden rounded-[2rem] p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-royal/70">2025 Honors Board</p>
                <span className="rounded-full bg-brand-gold/20 px-3 py-2 text-sm font-bold text-brand-royal">Premium Reveal</span>
              </div>
              <ol id="rankings" className="mt-5 grid gap-3">
                {rankingHighlights.map((brand) => (
                  <li key={brand.position} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[1.25rem] border border-brand-royal/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(247,248,241,0.78))] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <span className="font-display text-4xl font-bold text-brand-royal">{brand.position}</span>
                    <div>
                      <strong className="block text-base text-brand-ink">{brand.name}</strong>
                      <span className="text-sm leading-7 text-brand-muted">{brand.summary}</span>
                    </div>
                    <span className="rounded-full bg-brand-emerald/10 px-3 py-2 text-sm font-bold text-brand-emerald">{brand.signal}</span>
                  </li>
                ))}
              </ol>
            </article>

            <article className="surface-card relative overflow-hidden rounded-[2rem] p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-royal/70">Why This Upgrade Lands Better</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {premiumTraits.map((trait) => (
                  <div key={trait.title} className="rounded-[1.25rem] border border-brand-royal/10 bg-brand-cream/70 p-5">
                    <span className="font-display text-3xl font-bold text-brand-royal">{trait.title}</span>
                    <p className="mt-2 text-sm leading-7 text-brand-muted">{trait.body}</p>
                  </div>
                ))}
              </div>
            </article>
          </RevealOnScroll>
        </section>

        <section className="ticker-shell">
          <div className="ticker-track">
            {[...marqueeBrands, ...marqueeBrands].map((brand, index) => (
              <span key={`${brand}-${index}`}>{brand}</span>
            ))}
          </div>
        </section>

        <section id="palette" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <RevealOnScroll className="max-w-3xl">
            <p className="eyebrow">Major Colour Templates</p>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,4.2vw,4.7rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-brand-royal">
              White space for trust. Gold for distinction. Emerald for identity.
            </h2>
            <p className="mt-5 text-lg leading-8 text-brand-muted">
              The redesign leans into a ceremonial palette that feels proudly Nigerian without becoming loud or busy. The base stays luminous and editorial; the accents carry the emotion.
            </p>
          </RevealOnScroll>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {paletteCards.map((palette, index) => {
              const Icon = palette.icon;
              return (
                <RevealOnScroll key={palette.name} delay={index * 120}>
                  <article className={clsx("surface-card relative min-h-[290px] overflow-hidden p-6", palette.className)}>
                    <div className="absolute inset-0 left-0 top-0 h-44 w-44 bg-[radial-gradient(circle,rgba(255,255,255,0.22),transparent_65%)]" />
                    <span className="relative z-[1] inline-flex min-h-9 items-center rounded-full bg-white/55 px-3 text-xs font-extrabold tracking-[0.08em]">
                      {palette.hex}
                    </span>
                    <Icon className="relative z-[1] mt-5 size-6" />
                    <h3 className="relative z-[1] mt-5 font-display text-3xl font-semibold">{palette.name}</h3>
                    <p className="relative z-[1] mt-3 text-sm leading-7 opacity-90">{palette.description}</p>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </section>

        <section id="experience" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <RevealOnScroll className="max-w-3xl">
            <p className="eyebrow">UI Upgrade Direction</p>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,4.2vw,4.7rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-brand-royal">
              A digital experience that feels like an awards reveal, not a basic directory.
            </h2>
          </RevealOnScroll>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featureCards.map((feature, index) => (
              <RevealOnScroll key={feature.index} delay={index * 120}>
                <article className="surface-card relative min-h-[260px] overflow-hidden p-6">
                  <span className="font-display text-4xl font-bold text-brand-royal">{feature.index}</span>
                  <h3 className="mt-5 font-display text-3xl font-semibold text-brand-royal">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{feature.description}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section id="methodology" className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:px-8">
          <RevealOnScroll>
            <article className="surface-card relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(240,198,80,0.2),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(247,248,241,0.92))] p-7">
              <div>
                <p className="eyebrow">Editorial Front Door</p>
                <h2 className="mt-5 font-display text-[clamp(2.6rem,4.2vw,4.7rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-brand-royal">
                  Turn the ranking into a living magazine, not just a list of pages.
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-muted">
                  The homepage should welcome visitors with a flagship story, spotlight the year&apos;s biggest ranking shifts, and make it instantly obvious why the report matters to executives, marketers, and the public.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gold-band px-6 font-semibold text-brand-royal shadow-glow" href="#top">
                  Replay The Experience
                  <ArrowRight className="size-4" />
                </a>
                <a className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-brand-royal/10 bg-white/75 px-6 font-semibold text-brand-royal shadow-soft backdrop-blur" href="#palette">
                  See The Palette System
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <article className="surface-card relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(15,109,72,0.14),transparent_30%),linear-gradient(180deg,rgba(250,251,246,0.95),rgba(239,245,241,0.95))] p-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-royal/70">Methodology Snapshot</p>
              <div className="mt-5 grid gap-4">
                {methodologyPillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[1.25rem] border border-brand-royal/10 bg-white/80 p-5">
                    <strong className="block text-base text-brand-ink">{pillar.title}</strong>
                    <p className="mt-2 text-sm leading-7 text-brand-muted">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </article>
          </RevealOnScroll>
        </section>
      </div>
    </>
  );
}
