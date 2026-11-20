// Module ID: 7131
// Function ID: 7132
// Name: FreeFormErrorLabel
// Dependencies: [19, 21, 4959, 4801, 5385, 2]
// Exports: default

// Module 7131 (FreeFormErrorLabel)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4801 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormErrorLabel.tsx");

export default function Label(children) {
  children = children.children;
  let nodeText;
  const style = children.style;
  const obj = nodeText(4959);
  nodeText = obj.getNodeText(children);
  const items = [nodeText];
  const effect = react.useEffect(() => {
    const tmp2 = null != nodeText && "" !== tmp;
    if (tmp2) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(nodeText);
    }
  }, items);
  return jsx(nodeText(5385).Text, { style, variant: "body-xs/medium", color: "text-feedback-critical", children });
};
