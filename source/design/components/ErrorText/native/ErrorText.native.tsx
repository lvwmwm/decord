// Module ID: 8112
// Function ID: 8113
// Name: ErrorText
// Dependencies: [19, 21, 4102, 1363, 4738, 8113, 4739, 2]
// Exports: ErrorText

// Module 8112 (ErrorText)
import closure_2 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = function ErrorText(children) {
  children = children.children;
  let nodeText;
  let obj = nodeText(4102);
  nodeText = obj.getNodeText(children);
  const items = [nodeText];
  const effect = React.useEffect(() => {
    let tmp2 = null != nodeText;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = nodeText(closure_1_1[3]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp);
    }
  }, items);
  obj = { direction: "horizontal", spacing: 4, align: "flex-start", style: children.style, children: null };
  const items1 = [callback(nodeText(8113).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), callback(nodeText(4739).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children })];
  obj[4] = items1;
  return callback2(nodeText(4738).Stack, obj);
};
