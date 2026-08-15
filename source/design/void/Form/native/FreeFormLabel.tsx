// Module ID: 8576
// Function ID: 8577
// Name: FreeFormLabel
// Dependencies: [19, 21, 4734, 2]
// Exports: default

// Module 8576 (FreeFormLabel)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  let children;
  let nativeID;
  let style;
  ({ children, style, nativeID } = arg0);
  return jsx(require(4734) /* Text */.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
