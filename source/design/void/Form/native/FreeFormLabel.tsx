// Module ID: 8389
// Function ID: 8390
// Name: FreeFormLabel
// Dependencies: [19, 21, 4281, 2]
// Exports: default

// Module 8389 (FreeFormLabel)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  let children;
  let nativeID;
  let style;
  ({ children, style, nativeID } = arg0);
  return jsx(require(4281) /* Text */.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
