// Module ID: 8992
// Function ID: 8993
// Name: FreeFormLabel
// Dependencies: [19, 21, 4185, 2]
// Exports: default

// Module 8992 (FreeFormLabel)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  let children;
  let nativeID;
  let style;
  ({ children, style, nativeID } = arg0);
  return jsx(require(4185) /* Text */.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
