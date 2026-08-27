import { Form, ActionPanel, Action, useNavigation, Detail } from "@raycast/api";
import { useMemo, useState } from "react";
import { drawRandom } from "./lib/deck";

function Result({ question }: { question: string }) {
  const card = useMemo(() => drawRandom(), []);
  const markdown = `
# ${question}

**${card.yesNo}** — ${card.name}

${card.upright}

---
[Full guide →](${card.guideUrl})

Data by [Deckaura](https://deckaura.com)
`;
  return (
    <Detail
      markdown={markdown}
      actions={
        <ActionPanel>
          <Action.OpenInBrowser url={card.guideUrl} title="Read Card Guide" />
          <Action.OpenInBrowser
            url="https://deckaura.com/collections/yes-or-no-oracle"
            title="Yes/No Oracle on Deckaura"
          />
        </ActionPanel>
      }
    />
  );
}

export default function YesNoCommand() {
  const { push } = useNavigation();
  const [question, setQuestion] = useState("");
  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm
            title="Draw Card"
            onSubmit={() => push(<Result question={question} />)}
          />
        </ActionPanel>
      }
    >
      <Form.TextField
        id="question"
        title="Your question"
        placeholder="Should I take the job?"
        value={question}
        onChange={setQuestion}
      />
    </Form>
  );
}
