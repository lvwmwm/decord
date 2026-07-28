// Module ID: 8975
// Function ID: 70732
// Name: Label
// Dependencies: [31, 33, 3871, 4011, 4161, 2]
// Exports: default

// Module 8975 (Label)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getNodeText").fileFinishedImporting("design/void/Form/native/FreeFormErrorLabel.tsx");

export default function Label(children) {
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
  obj = { style: children.style, variant: "text-xs/medium", color: "text-feedback-critical", children };
  return jsx(nodeText(4161).Text, { style: children.style, variant: "text-xs/medium", color: "text-feedback-critical", children });
};
