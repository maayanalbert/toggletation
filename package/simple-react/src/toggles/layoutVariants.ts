import { CSSProperties } from "react";

export type LayoutVariant = {
  id: string;
  label: string;
  tradeoff: string;
  containerStyle: CSSProperties;
  contentWidth: string;
  sectionWidth: string;
  headerAlign: "left" | "center";
  heroStyle?: CSSProperties;
};

export const LAYOUT_VARIANTS: LayoutVariant[] = [
  {
    id: "balanced",
    label: "Balanced",
    tradeoff:
      "Safe default with familiar spacing and readable line-length, but it is less visually distinct than stronger branded treatments.",
    containerStyle: {
      minHeight: "100vh",
      background: "#f8fafc",
    },
    contentWidth: "72rem",
    sectionWidth: "62rem",
    headerAlign: "left",
  },
  {
    id: "carded",
    label: "Carded",
    tradeoff:
      "Adds structure and focus with a clear content shell, but uses more visual chrome and slightly reduces usable width.",
    containerStyle: {
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #f1f5f9 0%, #e2e8f0 45%, #f8fafc 100%)",
    },
    contentWidth: "68rem",
    sectionWidth: "56rem",
    headerAlign: "left",
  },
  {
    id: "split",
    label: "Split Hero",
    tradeoff:
      "Great for showing supporting context beside the core message, but side content can compete for attention on smaller screens.",
    containerStyle: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
    },
    contentWidth: "75rem",
    sectionWidth: "66rem",
    headerAlign: "left",
    heroStyle: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.4fr) minmax(220px, 1fr)",
      gap: "1rem",
      alignItems: "start",
    },
  },
  {
    id: "editorial",
    label: "Editorial",
    tradeoff:
      "Improves scannability with directional rhythm and typographic framing, but can feel too formal for product-heavy landing pages.",
    containerStyle: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, #ffffff, #f8fafc)",
    },
    contentWidth: "64rem",
    sectionWidth: "52rem",
    headerAlign: "left",
  },
  {
    id: "full-bleed",
    label: "Full Bleed",
    tradeoff:
      "Most dramatic and brand-forward option with high contrast depth, but can reduce legibility if content density grows.",
    containerStyle: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at 20% 0%, #1d4ed8 0%, #0f172a 42%, #020617 100%)",
    },
    contentWidth: "74rem",
    sectionWidth: "64rem",
    headerAlign: "center",
  },
];
