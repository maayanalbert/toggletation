export default function MainAreaMockPage() {
  const cards = [
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
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
      <main style={{ padding: "1.5rem 1.5rem 2rem" }}>
        <h1
          style={{
            fontFamily: "system-ui, sans-serif",
            fontWeight: 700,
            letterSpacing: "0.01em",
            color: "#111827",
            maxWidth: "44rem",
            margin: 0,
          }}
        >
          Agentation in a minimal React app
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            paddingTop: "0.75rem",
            margin: 0,
            color: "#334155",
            maxWidth: "48rem",
            lineHeight: 1.5,
          }}
        >
          Use the floating toolbar to annotate this page and leave precise feedback
          exactly where you see it. The library is linked from the workspace package{" "}
          <code>agentation</code>.
        </p>
        <section
          style={{
            marginTop: "1.2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0.8rem",
            maxWidth: "62rem",
          }}
        >
          {cards.map((card) => (
            <article
              key={card.title}
              style={{
                border: "1px solid #dbe3ef",
                borderRadius: "0.9rem",
                padding: "0.9rem",
                background: "linear-gradient(180deg, #ffffff, #f8fafc)",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 0.45rem",
                  fontSize: "1rem",
                  fontFamily: "system-ui, sans-serif",
                  color: "#0f172a",
                }}
              >
                {card.title}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: 1.45,
                  color: "#334155",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {card.body}
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
