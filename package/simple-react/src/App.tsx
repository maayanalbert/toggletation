import { Agentation } from "agentation";
import { useMemo } from "react";
import { ToggleProvider, useToggles } from "./toggles/ToggleContext";
import { ToggleSidebar } from "./toggles/ToggleSidebar";
import { LAYOUT_VARIANTS } from "./toggles/layoutVariants";
import { PARAGRAPH_VARIANTS } from "./toggles/paragraphVariants";

function AppInner() {
  const { layoutVariantId, paragraphVariantId } = useToggles();

  const layoutVariants = LAYOUT_VARIANTS;

  const headingVariants = useMemo(
    () => [
      {
        id: "clean",
        label: "Clean Sans",
        title: "Agentation in a minimal React app",
        style: {
          fontFamily: "system-ui, sans-serif",
          fontWeight: 700,
          letterSpacing: "0.01em",
          color: "#111827",
        },
      },
      {
        id: "gradient",
        label: "Gradient",
        title: "Agentation in a minimal React app",
        style: {
          fontFamily: "system-ui, sans-serif",
          fontWeight: 800,
          letterSpacing: "0.02em",
          background: "linear-gradient(90deg, #2563eb, #8b5cf6)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        },
      },
      {
        id: "retro",
        label: "Retro Mono",
        title: "Agentation in a minimal React app",
        style: {
          fontFamily: '"Courier New", ui-monospace, monospace',
          fontWeight: 700,
          textTransform: "uppercase" as const,
          letterSpacing: "0.08em",
          color: "#1f2937",
          textShadow: "2px 2px 0 #fbbf24",
        },
      },
    ],
    [],
  );
  const cardsVariants = useMemo(
    () => [
      {
        id: "onboarding",
        label: "Onboarding",
        cards: [
          {
            title: "Start with one note",
            body: "Highlight a specific area and leave one actionable comment to set the baseline for your feedback session.",
          },
          {
            title: "Tag by intent",
            body: "Use labels like bug, polish, or copy to make each annotation easier to triage with your team.",
          },
          {
            title: "Export when ready",
            body: "Copy everything as structured markdown and hand it off to your coding agent in one step.",
          },
        ],
      },
      {
        id: "workflow",
        label: "Workflow",
        cards: [
          {
            title: "Review",
            body: "Scan the page and flag anything unclear, inconsistent, or broken from a user experience perspective.",
          },
          {
            title: "Prioritize",
            body: "Group notes by impact so high-value fixes are obvious before implementation begins.",
          },
          {
            title: "Ship",
            body: "Turn annotations into scoped tasks and close the loop with quick visual verification.",
          },
        ],
      },
      {
        id: "use-cases",
        label: "Use cases",
        cards: [
          {
            title: "Design QA",
            body: "Catch spacing, typography, and color mismatches against your latest design system updates.",
          },
          {
            title: "Copy pass",
            body: "Collect clarity edits and tone improvements directly in the interface where the text appears.",
          },
          {
            title: "Bug sweep",
            body: "Document UI edge cases with location-aware notes that developers can action immediately.",
          },
        ],
      },
    ],
    [],
  );
  const currentVariant = headingVariants[0];
  const currentParagraphVariant =
    PARAGRAPH_VARIANTS.find((variant) => variant.id === paragraphVariantId) ??
    PARAGRAPH_VARIANTS[0];
  const currentCardsVariant = cardsVariants[0];

  const currentLayout =
    layoutVariants.find((v) => v.id === layoutVariantId) ?? layoutVariants[0];

  const isFullBleed = layoutVariantId === "full-bleed";
  const isCarded = layoutVariantId === "carded";
  const isEditorial = layoutVariantId === "editorial";
  const textColor = isFullBleed ? "#e2e8f0" : "#111827";
  const subTextColor = isFullBleed ? "rgba(226, 232, 240, 0.88)" : "#334155";
  const codeBg = isFullBleed ? "rgba(148, 163, 184, 0.14)" : "transparent";
  const codeColor = isFullBleed ? "#e2e8f0" : "inherit";

  return (
    <div
      style={{
        ...currentLayout.containerStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}
      >
        <main style={{ padding: "1.25rem 1.5rem 2.2rem", flex: "1 1 auto" }}>
          <div
            style={{
              maxWidth: currentLayout.contentWidth,
              margin: "0 auto",
              paddingLeft: isEditorial ? "1rem" : 0,
              borderLeft: isEditorial ? "3px solid rgba(148, 163, 184, 0.55)" : "none",
              borderRadius: isEditorial ? "0.25rem" : 0,
            }}
          >
            <div
              style={
                isCarded
                  ? {
                      border: "1px solid rgba(148, 163, 184, 0.38)",
                      borderRadius: "1.2rem",
                      background: "rgba(255, 255, 255, 0.95)",
                      boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
                      padding: "1rem",
                    }
                  : undefined
              }
            >
            <div
              style={
                currentLayout.heroStyle
                  ? currentLayout.heroStyle
                  : {
                      textAlign: currentLayout.headerAlign,
                    }
              }
            >
              <div>
                <h1
                  style={{
                    ...currentVariant.style,
                    maxWidth: "44rem",
                    margin: 0,
                    color: textColor,
                  }}
                >
                  {currentVariant.title}
                </h1>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    paddingTop: "0.75rem",
                    margin: 0,
                    color: subTextColor,
                    maxWidth: "48rem",
                    lineHeight: 1.5,
                  }}
                >
                  {currentParagraphVariant.text} The library is linked from the
                  workspace package{" "}
                  <code
                    style={{
                      padding: "0.1rem 0.25rem",
                      borderRadius: "0.35rem",
                      background: codeBg,
                      color: codeColor,
                    }}
                  >
                    agentation
                  </code>
                  .
                </p>
              </div>

              {layoutVariantId === "split" ? (
                <aside
                  style={{
                    border: "1px solid rgba(148, 163, 184, 0.45)",
                    borderRadius: "1rem",
                    padding: "0.9rem",
                    background: "linear-gradient(180deg, #ffffff, #f8fafc)",
                    boxShadow: "0 10px 26px rgba(15, 23, 42, 0.08)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontWeight: 800,
                      letterSpacing: "0.02em",
                      color: "#0f172a",
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                    }}
                  >
                    Demo panel
                  </div>
                  <p
                    style={{
                      margin: "0.45rem 0 0",
                      fontFamily: "system-ui, sans-serif",
                      color: "#334155",
                      fontSize: "0.9rem",
                      lineHeight: 1.45,
                    }}
                  >
                    This split layout reserves space for secondary content such as
                    docs, a changelog, or a live embed.
                  </p>
                </aside>
              ) : null}
            </div>

            <section
              style={{
                marginTop: layoutVariantId === "carded" ? "1rem" : "1.2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.8rem",
                maxWidth: currentLayout.sectionWidth,
                marginLeft: currentLayout.headerAlign === "center" ? "auto" : 0,
                marginRight: currentLayout.headerAlign === "center" ? "auto" : 0,
              }}
            >
              {currentCardsVariant.cards.map((card) => (
                <article
                  key={card.title}
                  style={{
                    border: isFullBleed
                      ? "1px solid rgba(148, 163, 184, 0.22)"
                      : "1px solid #dbe3ef",
                    borderRadius: "0.9rem",
                    padding: "0.9rem",
                    background: isFullBleed
                      ? "linear-gradient(180deg, rgba(2, 6, 23, 0.65), rgba(2, 6, 23, 0.35))"
                      : "linear-gradient(180deg, #ffffff, #f8fafc)",
                    boxShadow: isFullBleed
                      ? "0 14px 30px rgba(0, 0, 0, 0.35)"
                      : "0 8px 24px rgba(15, 23, 42, 0.06)",
                  }}
                >
                  <h2
                    style={{
                      margin: "0 0 0.45rem",
                      fontSize: "1rem",
                      fontFamily: "system-ui, sans-serif",
                      color: isFullBleed ? "#e2e8f0" : "#0f172a",
                    }}
                  >
                    {card.title}
                  </h2>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      lineHeight: 1.45,
                      color: isFullBleed
                        ? "rgba(226, 232, 240, 0.85)"
                        : "#334155",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {card.body}
                  </p>
                </article>
              ))}
            </section>
            </div>
          </div>
        </main>

        <ToggleSidebar />
      </div>
      <Agentation enableMockMode mockModeSelector="main" />
    </div>
  );
}

export default function App() {
  return (
    <ToggleProvider>
      <AppInner />
    </ToggleProvider>
  );
}
