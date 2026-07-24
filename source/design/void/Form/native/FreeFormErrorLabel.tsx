// Module ID: 9043
// Function ID: 71101
// Name: Label
// Dependencies: [31, 33, 3836, 3976, 4126, 2]
// Exports: default

// Module 9043 (Label)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getNodeText").fileFinishedImporting("design/void/Form/native/FreeFormErrorLabel.tsx");

export default function Label(children) {
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
  obj = { style: children.style, variant: "text-xs/medium", color: "text-feedback-critical", children };
  return jsx(nodeText(4126).Text, { style: children.style, variant: "text-xs/medium", color: "text-feedback-critical", children });
};
