// Module ID: 8992
// Function ID: 70809
// Name: Label
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: default

// Module 8992 (Label)
import closure_2 from "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("design/void/Form/native/FreeFormErrorLabel.tsx");

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
