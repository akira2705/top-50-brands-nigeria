import clsx from "clsx";

type CeremonialIntroProps = {
  isLeaving: boolean;
};

export function CeremonialIntro({ isLeaving }: CeremonialIntroProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "preloader fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(240,198,80,0.16),transparent_40%),linear-gradient(180deg,rgba(255,253,247,0.97),rgba(247,245,235,0.98))]",
        isLeaving && "is-leaving",
      )}
    >
      <div className="preloader-veil absolute inset-[-20%]" />
      <div className="preloader-crest relative grid justify-items-center gap-6 text-center">
        <span className="text-[0.74rem] uppercase tracking-[0.4em] text-brand-royal/75">
          A Ceremonial Digital Reveal
        </span>
        <div className="preloader-seal relative grid aspect-square w-[min(260px,56vw)] place-items-center rounded-full text-white shadow-glow">
          <span className="absolute inset-4 rounded-full border border-white/60" />
          <span className="absolute inset-[30px] rounded-full border border-white/30" />
          <span className="absolute left-1/2 top-[52px] -translate-x-1/2 text-[0.72rem] uppercase tracking-[0.4em]">TOP</span>
          <span className="font-display text-[clamp(4.6rem,10vw,6.6rem)] font-bold leading-none [text-shadow:0_10px_35px_rgba(18,40,26,0.28)]">50</span>
          <span className="absolute bottom-[52px] left-1/2 -translate-x-1/2 text-[0.72rem] uppercase tracking-[0.18em]">BRANDS NIGERIA®</span>
        </div>
      </div>
    </div>
  );
}
