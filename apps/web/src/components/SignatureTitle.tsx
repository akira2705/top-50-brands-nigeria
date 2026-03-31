import clsx from "clsx";

type SignatureTitleProps = {
  isReady: boolean;
};

export function SignatureTitle({ isReady }: SignatureTitleProps) {
  return (
    <div aria-label="Top 50 Brands Nigeria registered" className="max-w-[900px] drop-shadow-[0_22px_40px_rgba(240,198,80,0.18)]">
      <svg className="overflow-visible" viewBox="0 0 1300 240" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="signature-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F6D48" />
            <stop offset="50%" stopColor="#F0C650" />
            <stop offset="100%" stopColor="#1E8A5C" />
          </linearGradient>
          <linearGradient id="signature-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F6D48" />
            <stop offset="35%" stopColor="#F0C650" />
            <stop offset="100%" stopColor="#0A3B29" />
          </linearGradient>
        </defs>
        <text x="50%" y="58%" textAnchor="middle" fill="none" stroke="url(#signature-stroke)" strokeWidth="2.2" className={clsx("signature-stroke", isReady && "is-ready")}>
          TOP 50 BRANDS NIGERIA®
        </text>
        <text x="50%" y="58%" textAnchor="middle" fill="url(#signature-fill)" className={clsx("signature-fill", isReady && "is-ready")}>
          TOP 50 BRANDS NIGERIA®
        </text>
      </svg>
    </div>
  );
}
