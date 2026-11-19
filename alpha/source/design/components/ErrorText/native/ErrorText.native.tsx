// Module ID: 7105
// Function ID: 7106
// Name: ErrorText
// Dependencies: [19, 21, 4957, 4799, 5808, 7106, 5383, 2]
// Exports: ErrorText

// Module 7105 (ErrorText)
import shared from "shared" /* 4799 */;
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
  const obj = nodeText(4957);
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
  const Stack = nodeText(5808).Stack;
  items1 = [closure_3(nodeText(7106).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), closure_3(nodeText(5383).Text, { variant: "body-xs/medium", color: "text-feedback-critical", children })];
  return closure_4(Stack, obj2);
}
