// Module ID: 6726
// Function ID: 6727
// Name: ErrorText
// Dependencies: [19, 21, 3895, 4035, 4598, 6727, 4185, 2]
// Exports: ErrorText

// Module 6726 (ErrorText)
import noop from "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("getNodeText").fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = function ErrorText(children) {
  children = children.children;
  let nodeText;
  let obj = nodeText(3895);
  nodeText = obj.getNodeText(children);
  const items = [nodeText];
  const effect = React.useEffect(() => {
    let tmp2 = null != nodeText;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = nodeText(outer1_1[3]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp);
    }
  }, items);
  obj = { direction: "horizontal", spacing: 4, align: "flex-start", style: children.style, children: null };
  const items1 = [callback(nodeText(6727).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), callback(nodeText(4185).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children })];
  obj[4] = items1;
  return callback2(nodeText(4598).Stack, obj);
};
