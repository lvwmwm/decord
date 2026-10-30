// Module ID: 7098
// Function ID: 7099
// Name: FreeFormLabel
// Dependencies: [19, 21, 5619, 2]
// Exports: default

// Module 7098 (FreeFormLabel)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  let children;
  let nativeID;
  let style;
  ({ children, style, nativeID } = arg0);
  return jsx(Text_Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
