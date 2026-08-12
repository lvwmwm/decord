// Module ID: 7833
// Function ID: 7834
// Name: ErrorText
// Dependencies: [19, 21, 4067, 1363, 4752, 7834, 4340, 2]
// Exports: ErrorText

// Module 7833 (ErrorText)
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
  let obj = nodeText(4067);
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
  const items1 = [callback(nodeText(7834).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), callback(nodeText(4340).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children })];
  obj[4] = items1;
  return callback2(nodeText(4752).Stack, obj);
};
