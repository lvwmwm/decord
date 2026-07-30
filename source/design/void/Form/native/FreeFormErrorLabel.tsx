// Module ID: 8995
// Function ID: 8996
// Name: Label
// Dependencies: [19, 21, 3895, 4035, 4185, 2]
// Exports: default

// Module 8995 (Label)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getNodeText").fileFinishedImporting("design/void/Form/native/FreeFormErrorLabel.tsx");

export default function Label(style) {
  const children = style.children;
  let nodeText;
  nodeText = nodeText(3895).getNodeText(children);
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
  return jsx(nodeText(4185).Text, { style: style.style, variant: "text-xs/medium", color: "text-feedback-critical", children });
};
