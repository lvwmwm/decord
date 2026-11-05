// Module ID: 7229
// Function ID: 7230
// Name: ErrorText
// Dependencies: [19, 21, 5313, 5150, 6165, 7230, 5763, 2]
// Exports: ErrorText

// Module 7229 (ErrorText)
import shared from "shared" /* 5150 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export function ErrorText(children) {
  let items1;
  children = children.children;
  let nodeText;
  const style = children.style;
  const obj = nodeText(5313);
  nodeText = obj.getNodeText(children);
  const items = [nodeText];
  const effect = react.useEffect(() => {
    const tmp2 = null != nodeText && "" !== tmp;
    if (tmp2) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(nodeText);
    }
  }, items);
  const obj2 = { direction: "horizontal", spacing: 4, align: "flex-start", style, children: items1 };
  const Stack = nodeText(6165).Stack;
  items1 = [closure_3(nodeText(7230).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), closure_3(nodeText(5763).Text, { variant: "body-xs/medium", color: "text-feedback-critical", children })];
  return closure_4(Stack, obj2);
}
