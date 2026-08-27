// Module ID: 7644
// Function ID: 7645
// Name: FreeFormLabel
// Dependencies: [19, 21, 4441, 2]
// Exports: default

// Module 7644 (FreeFormLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4441 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  ({ children, style, nativeID } = arg0);
  return jsx(Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
