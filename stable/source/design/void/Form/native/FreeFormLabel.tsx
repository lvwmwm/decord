// Module ID: 7208
// Function ID: 7209
// Name: FreeFormLabel
// Dependencies: [19, 21, 5783, 2]
// Exports: default

// Module 7208 (FreeFormLabel)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5783 */;
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
