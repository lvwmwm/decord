// Module ID: 7253
// Function ID: 7254
// Name: FreeFormLabel
// Dependencies: [19, 21, 5763, 2]
// Exports: default

// Module 7253 (FreeFormLabel)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5763 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  let children;
  let nativeID;
  let style;
  ({ children, style, nativeID } = arg0);
  return jsx(Text_Text.Text, { style, variant: "body-sm/semibold", color: "text-muted", nativeID, children });
};
