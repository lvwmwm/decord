// Module ID: 6878
// Function ID: 6879
// Name: FreeFormLabel
// Dependencies: [19, 21, 4477, 2]
// Exports: default

// Module 6878 (FreeFormLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4477 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  ({ children, style, nativeID } = arg0);
  return jsx(Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
