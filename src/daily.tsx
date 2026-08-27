import { Detail, ActionPanel, Action } from "@raycast/api";
import { useMemo } from "react";
import { dailyCard } from "./lib/deck";

export default function DailyTarotCommand() {
  const card = useMemo(() => dailyCard(), []);
  const markdown = `
# ${card.name}

**Arcana:** ${card.arcana}
**Element:** ${card.element}

## Upright
${card.upright}

## Reversed
${card.reversed}

## Love
${card.love}

## Career
${card.career}

---
Full guide: [${card.name} on Deckaura](${card.guideUrl})

Data by [Deckaura](https://deckaura.com) — free tarot tools at deckaura.com
`;
  return (
    <Detail
      markdown={markdown}
      actions={
        <ActionPanel>
          <Action.OpenInBrowser url={card.guideUrl} title="Read Full Guide" />
          <Action.OpenInBrowser
            url="https://deckaura.com"
            title="Visit Deckaura"
          />
          <Action.CopyToClipboard content={markdown} title="Copy Reading" />
        </ActionPanel>
      }
    />
  );
}
