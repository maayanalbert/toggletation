export type ParagraphVariant = {
  id: string;
  label: string;
  text: string;
  tradeoff: string;
};

export const PARAGRAPH_VARIANTS: ParagraphVariant[] = [
  {
    id: "guided",
    label: "Guided",
    text: "Use the floating toolbar to annotate this page and leave precise feedback exactly where you see it.",
    tradeoff:
      "Clear and instructional for first-time users, but it is less focused on collaboration outcomes.",
  },
  {
    id: "team",
    label: "Team",
    text: "Capture UI notes with the floating toolbar so your team can review comments in context and move faster.",
    tradeoff:
      "Strong collaboration framing for teams, but feels less personal for solo developer workflows.",
  },
  {
    id: "agent",
    label: "Agent-ready",
    text: "Mark up this screen with the floating toolbar and generate structured notes ready for your coding agent.",
    tradeoff:
      "Best for AI-assisted implementation framing, but may be less relatable to non-agent workflows.",
  },
  {
    id: "qa",
    label: "QA pass",
    text: "Run a lightweight QA pass with anchored annotations that capture visual bugs, copy fixes, and interaction issues.",
    tradeoff:
      "Great for quality-focused reviews, but sounds process-heavy for quick exploratory feedback.",
  },
  {
    id: "handoff",
    label: "Handoff",
    text: "Collect feedback in-place, then copy a structured handoff your developers can implement without re-triaging.",
    tradeoff:
      "Emphasizes implementation efficiency, but less explicit about the annotation workflow itself.",
  },
];
