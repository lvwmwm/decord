// Module ID: 7042
// Function ID: 7043
// Name: FreeFormErrorLabel
// Dependencies: [19, 21, 4340, 4488, 4632, 2]
// Exports: default

// Module 7042 (FreeFormErrorLabel)
import shared from "shared" /* 4488 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormErrorLabel.tsx");

export default function Label(style) {
  const children = style.children;
  let nodeText;
  nodeText = nodeText(4340).getNodeText(children);
  const items = [nodeText];
  const effect = noop.useEffect(() => {
    let tmp2 = null != nodeText;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp);
    }
  }, items);
  return jsx(nodeText(4632).Text, { style: style.style, variant: "text-xs/medium", color: "text-feedback-critical", children });
};
