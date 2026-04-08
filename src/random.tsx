import { Detail, ActionPanel, Action } from "@raycast/api";
import { useMemo } from "react";
import { drawRandom } from "./lib/deck";

export default function RandomTarotCommand() {
  const card = useMemo(() => drawRandom(), []);
  const reversed = Math.random() < 0.5;
  const meaning = reversed ? card.reversed : card.upright;
  const markdown = `
# ${card.name}${reversed ? " (Reversed)" : ""}

${meaning}

---
Full guide: [${card.name} on Deckaura](${card.guideUrl})

Powered by [Deckaura](https://deckaura.com)
`;
  return (
    <Detail
      markdown={markdown}
      actions={
        <ActionPanel>
          <Action.OpenInBrowser url={card.guideUrl} title="Read Full Guide" />
          <Action.OpenInBrowser url="https://deckaura.com/pages/random-tarot-card" title="More Random Draws on Deckaura" />
        </ActionPanel>
      }
    />
  );
}
