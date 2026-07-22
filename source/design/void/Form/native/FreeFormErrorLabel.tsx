// Module ID: 8997
// Function ID: 70845
// Name: Label
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: default

// Module 8997 (Label)
import __exportStarResult1 from "__exportStarResult1";
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("design/void/Form/native/FreeFormErrorLabel.tsx");

export default function Label(style) {
  const children = style.children;
  const nodeText = arg1(dependencyMap[2]).getNodeText(children);
  const arg1 = nodeText;
  const items = [nodeText];
  const effect = React.useEffect(() => {
    let tmp = null != nodeText;
    if (tmp) {
      tmp = "" !== nodeText;
    }
    if (tmp) {
      const AccessibilityAnnouncer = nodeText(closure_1[3]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(nodeText);
    }
  }, items);
  return jsx(arg1(dependencyMap[4]).Text, { style: style.style, children });
};
