// Module ID: 8928
// Function ID: 70570
// Name: FreeFormLabel
// Dependencies: [31, 33, 4127, 2]
// Exports: default

// Module 8928 (FreeFormLabel)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  let children;
  let nativeID;
  let style;
  ({ children, style, nativeID } = arg0);
  const obj = { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children };
  return jsx(require(4127) /* Text */.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
