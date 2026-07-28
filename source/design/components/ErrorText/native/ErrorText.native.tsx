// Module ID: 6708
// Function ID: 59057
// Name: ErrorText
// Dependencies: [31, 33, 3871, 4011, 4576, 6709, 4161, 2]
// Exports: ErrorText

// Module 6708 (ErrorText)
import result from "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("getNodeText").fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = function ErrorText(children) {
  children = children.children;
  let obj = nodeText(3871);
  nodeText = obj.getNodeText(children);
  const items = [nodeText];
  const effect = React.useEffect(() => {
    let tmp = null != nodeText;
    if (tmp) {
      tmp = "" !== nodeText;
    }
    if (tmp) {
      const AccessibilityAnnouncer = nodeText(outer1_1[3]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(nodeText);
    }
  }, items);
  obj = { direction: "horizontal", spacing: 4, align: "flex-start", style: children.style };
  const items1 = [callback(nodeText(6709).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), ];
  obj = { variant: "text-xs/medium", color: "text-feedback-critical", children };
  items1[1] = callback(nodeText(4161).Text, obj);
  obj.children = items1;
  return callback2(nodeText(4576).Stack, obj);
};
