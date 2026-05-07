import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { LAYOUT_VARIANTS } from "./layoutVariants";
import { PARAGRAPH_VARIANTS } from "./paragraphVariants";

type ToggleContextType = {
  layoutVariantId: string;
  setLayoutVariantId: (variantId: string) => void;
  paragraphVariantId: string;
  setParagraphVariantId: (variantId: string) => void;
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
  showLayoutTradeoff: boolean;
  setShowLayoutTradeoff: (expanded: boolean) => void;
  showParagraphTradeoff: boolean;
  setShowParagraphTradeoff: (expanded: boolean) => void;
};

const defaultLayoutId = LAYOUT_VARIANTS[0]?.id ?? "balanced";
const defaultParagraphId = PARAGRAPH_VARIANTS[0]?.id ?? "guided";

const ToggleContext = createContext<ToggleContextType | null>(null);

export function ToggleProvider({ children }: { children: ReactNode }) {
  const [layoutVariantId, setLayoutVariantId] = useState(defaultLayoutId);
  const [paragraphVariantId, setParagraphVariantId] = useState(defaultParagraphId);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [showLayoutTradeoff, setShowLayoutTradeoff] = useState(false);
  const [showParagraphTradeoff, setShowParagraphTradeoff] = useState(false);

  const value = useMemo(
    () => ({
      layoutVariantId,
      setLayoutVariantId,
      paragraphVariantId,
      setParagraphVariantId,
      sidebarExpanded,
      setSidebarExpanded,
      showLayoutTradeoff,
      setShowLayoutTradeoff,
      showParagraphTradeoff,
      setShowParagraphTradeoff,
    }),
    [
      layoutVariantId,
      paragraphVariantId,
      sidebarExpanded,
      showLayoutTradeoff,
      showParagraphTradeoff,
    ],
  );

  return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>;
}

export function useToggles() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggles must be used inside ToggleProvider");
  }
  return context;
}
