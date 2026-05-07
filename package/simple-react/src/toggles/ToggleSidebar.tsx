import { LAYOUT_VARIANTS } from "./layoutVariants";
import { PARAGRAPH_VARIANTS } from "./paragraphVariants";
import { useToggles } from "./ToggleContext";

export function ToggleSidebar() {
  const {
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
  } = useToggles();

  const activeVariant =
    LAYOUT_VARIANTS.find((variant) => variant.id === layoutVariantId) ??
    LAYOUT_VARIANTS[0];
  const activeParagraphVariant =
    PARAGRAPH_VARIANTS.find((variant) => variant.id === paragraphVariantId) ??
    PARAGRAPH_VARIANTS[0];

  return (
    <aside
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        width: sidebarExpanded ? "290px" : "56px",
        transition: "width 220ms ease",
        borderLeft: "1px solid #e2e8f0",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: sidebarExpanded ? "space-between" : "center",
          alignItems: "center",
          padding: "0.8rem 0.7rem",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            opacity: sidebarExpanded ? 1 : 0,
            transition: "opacity 140ms ease",
            pointerEvents: sidebarExpanded ? "auto" : "none",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 700,
            color: "#0f172a",
            fontSize: "0.9rem",
            whiteSpace: "nowrap",
          }}
        >
          Variants
        </div>
        <button
          type="button"
          aria-label={sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          style={{
            border: "1px solid #cbd5e1",
            borderRadius: "0.45rem",
            background: "#f8fafc",
            color: "#0f172a",
            height: "2rem",
            width: "2rem",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          {sidebarExpanded ? "\u2192" : "\u2190"}
        </button>
      </div>

      <div
        style={{
          opacity: sidebarExpanded ? 1 : 0,
          transition: "opacity 140ms ease",
          pointerEvents: sidebarExpanded ? "auto" : "none",
          padding: "0.8rem 0.7rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.83rem",
              color: "#334155",
            }}
          >
            Page Container Layout
          </div>
          <button
            type="button"
            onClick={() => setShowLayoutTradeoff(!showLayoutTradeoff)}
            aria-label={
              showLayoutTradeoff
                ? "Hide layout tradeoffs"
                : "Show layout tradeoffs"
            }
            style={{
              border: "1px solid #cbd5e1",
              borderRadius: "0.35rem",
              background: "#fff",
              color: "#0f172a",
              width: "1.7rem",
              height: "1.7rem",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            {showLayoutTradeoff ? "\u2304" : "\u2303"}
          </button>
        </div>

        <select
          aria-label="Select page container layout variant"
          value={layoutVariantId}
          onChange={(event) => setLayoutVariantId(event.target.value)}
          style={{
            width: "100%",
            border: "1px solid #cbd5e1",
            borderRadius: "0.5rem",
            padding: "0.5rem 0.55rem",
            fontFamily: "system-ui, sans-serif",
            color: "#0f172a",
            background: "#ffffff",
          }}
        >
          {LAYOUT_VARIANTS.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.label}
            </option>
          ))}
        </select>

        {showLayoutTradeoff ? (
          <p
            style={{
              margin: 0,
              border: "1px solid #dbe3ef",
              borderRadius: "0.55rem",
              background: "#f8fafc",
              padding: "0.55rem",
              fontFamily: "system-ui, sans-serif",
              color: "#334155",
              fontSize: "0.83rem",
              lineHeight: 1.45,
            }}
          >
            {activeVariant.tradeoff}
          </p>
        ) : null}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            marginTop: "0.35rem",
          }}
        >
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.83rem",
              color: "#334155",
            }}
          >
            Intro Paragraph Copy
          </div>
          <button
            type="button"
            onClick={() => setShowParagraphTradeoff(!showParagraphTradeoff)}
            aria-label={
              showParagraphTradeoff
                ? "Hide copy tradeoffs"
                : "Show copy tradeoffs"
            }
            style={{
              border: "1px solid #cbd5e1",
              borderRadius: "0.35rem",
              background: "#fff",
              color: "#0f172a",
              width: "1.7rem",
              height: "1.7rem",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            {showParagraphTradeoff ? "\u2304" : "\u2303"}
          </button>
        </div>

        <select
          aria-label="Select intro paragraph copy variant"
          value={paragraphVariantId}
          onChange={(event) => setParagraphVariantId(event.target.value)}
          style={{
            width: "100%",
            border: "1px solid #cbd5e1",
            borderRadius: "0.5rem",
            padding: "0.5rem 0.55rem",
            fontFamily: "system-ui, sans-serif",
            color: "#0f172a",
            background: "#ffffff",
          }}
        >
          {PARAGRAPH_VARIANTS.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.label}
            </option>
          ))}
        </select>

        {showParagraphTradeoff ? (
          <p
            style={{
              margin: 0,
              border: "1px solid #dbe3ef",
              borderRadius: "0.55rem",
              background: "#f8fafc",
              padding: "0.55rem",
              fontFamily: "system-ui, sans-serif",
              color: "#334155",
              fontSize: "0.83rem",
              lineHeight: 1.45,
            }}
          >
            {activeParagraphVariant.tradeoff}
          </p>
        ) : null}
      </div>
    </aside>
  );
}
