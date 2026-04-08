import { Detail, ActionPanel, Action } from "@raycast/api";
import { useMemo } from "react";
import { drawRandom } from "./lib/deck";

export default function ThreeCardCommand() {
  const draws = useMemo(
    () =>
      ["Past", "Present", "Future"].map((p) => ({
        position: p,
        card: drawRandom(),
      })),
    [],
  );
  const markdown = `
# Three-Card Spread

${draws
  .map(
    (d) =>
      `## ${d.position}: ${d.card.name}\n${d.card.upright}\n[Full guide →](${d.card.guideUrl})\n`,
  )
  .join("\n")}

---
[Get a full Celtic Cross reading on Deckaura →](https://deckaura.com/pages/tarot-reading)
`;
  return (
    <Detail
      markdown={markdown}
      actions={
        <ActionPanel>
          <Action.OpenInBrowser url="https://deckaura.com/pages/tarot-reading" title="Full Reading on Deckaura" />
          <Action.CopyToClipboard content={markdown} title="Copy Reading" />
        </ActionPanel>
      }
    />
  );
}
