// Module ID: 7720
// Function ID: 7721
// Name: FreeFormLabel
// Dependencies: [19, 21, 4474, 2]
// Exports: default

// Module 7720 (FreeFormLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4474 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  ({ children, style, nativeID } = arg0);
  return jsx(Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
