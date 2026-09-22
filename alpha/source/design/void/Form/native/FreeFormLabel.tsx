// Module ID: 7183
// Function ID: 7184
// Name: FreeFormLabel
// Dependencies: [19, 21, 4753, 2]
// Exports: default

// Module 7183 (FreeFormLabel)
import Text_Text from "Text/Text" /* 4753 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  ({ children, style, nativeID } = arg0);
  return jsx(Text_Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
