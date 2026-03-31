import { ArrowUpRight, Award, BarChart3, Crown, Gem, ShieldCheck, Sparkles, Stars } from "lucide-react";

export const rankingHighlights = [
  { position: "01", name: "Dangote Group", summary: "Industrial might and national influence", signal: "Legacy" },
  { position: "02", name: "MTN Nigeria", summary: "Connectivity, scale, and digital trust", signal: "Momentum" },
  { position: "03", name: "Access Bank", summary: "Financial reach with continental ambition", signal: "Reach" },
  { position: "04", name: "BUA Group", summary: "Modern manufacturing and economic weight", signal: "Rise" },
];

export const proofPoints = [
  { value: "50", label: "Brands elevated with prestige-first storytelling", icon: Crown },
  { value: "20+", label: "Sectors framed in a cleaner editorial system", icon: BarChart3 },
  { value: "01", label: "Ceremonial intro reveal before the website appears", icon: Sparkles },
];

export const paletteCards = [
  { name: "Ivory White", hex: "#FFFDF7", description: "The clean canvas that keeps the experience premium, breathable, and publication-ready.", className: "bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(250,245,233,0.92))]", icon: Gem },
  { name: "Shining Gold", hex: "#F0C650", description: "A polished award-tone for medals, highlights, buttons, and ceremonial moments.", className: "bg-[linear-gradient(180deg,rgba(255,245,212,0.96),rgba(240,198,80,0.64))]", icon: Award },
  { name: "Emerald Crest", hex: "#0F6D48", description: "The identity colour that roots the interface in confidence, heritage, and growth.", className: "bg-[linear-gradient(180deg,rgba(223,245,233,0.98),rgba(15,109,72,0.82))] text-white", icon: ShieldCheck },
  { name: "Royal Palm", hex: "#0A3B29", description: "A darker green for headers, depth layers, and contrast-rich editorial framing.", className: "bg-[linear-gradient(180deg,rgba(19,68,47,0.96),rgba(10,59,41,1))] text-white", icon: Stars },
];

export const featureCards = [
  { index: "01", title: "Ceremonial Opening Sequence", description: "Before the page appears, the logo fades in with a soft glow and exits upward, giving the brand a signature arrival moment every time the site opens." },
  { index: "02", title: "Handwritten Title Reveal", description: "The main title is drawn in script using an SVG stroke animation, then settles into a luxurious gold-and-emerald finish that feels bespoke and memorable." },
  { index: "03", title: "Smooth Motion Everywhere", description: "Cards lift gently, sections reveal with polish, and gradients shimmer subtly instead of over-animating. The result feels modern and expensive, not noisy." },
];

export const methodologyPillars = [
  { title: "Market Relevance", body: "How deeply the brand shapes daily Nigerian life and decision-making." },
  { title: "Brand Strength", body: "Recognition, trust, and memorability across consumer touchpoints." },
  { title: "Business Momentum", body: "Scale, innovation, and directional growth that signal leadership." },
  { title: "Cultural Weight", body: "Visibility, aspiration, and national resonance beyond raw market size." },
];

export const marqueeBrands = ["Dangote", "MTN Nigeria", "Access Bank", "BUA Group", "Glo", "Zenith Bank", "GTCO", "Nestle Nigeria", "Flour Mills", "Moniepoint"];

export const premiumTraits = [
  { title: "Smooth", body: "Intro-led motion system with refined scroll reveals and floating depth." },
  { title: "Premium", body: "Luxury typography and glossy gold accents on a crisp white foundation." },
  { title: "National", body: "Emerald and royal greens bring a grounded Nigerian identity to the interface." },
  { title: "Editorial", body: "Cards, rankings, and long-form storytelling feel structured and authoritative." },
];

export const editorialButtons = [
  { label: "View The 2025 Honors Board", href: "#rankings", icon: ArrowUpRight },
  { label: "Explore Methodology", href: "#methodology", icon: ArrowUpRight },
];
