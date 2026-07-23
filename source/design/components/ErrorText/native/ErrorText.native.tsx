// Module ID: 7506
// Function ID: 60181
// Name: ErrorText
// Dependencies: [31, 33, 3836, 3976, 4541, 7507, 4126, 2]
// Exports: ErrorText

// Module 7506 (ErrorText)
import result from "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("getNodeText").fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = function ErrorText(children) {
  children = children.children;
  let obj = nodeText(3836);
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
  const items1 = [callback(nodeText(7507).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), ];
  obj = { variant: "text-xs/medium", color: "text-feedback-critical", children };
  items1[1] = callback(nodeText(4126).Text, obj);
  obj.children = items1;
  return callback2(nodeText(4541).Stack, obj);
};
