// Module ID: 9001
// Function ID: 70875
// Name: FreeFormLabel
// Dependencies: [31, 33, 4126, 2]
// Exports: default

// Module 9001 (FreeFormLabel)
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
  return jsx(require(4126) /* Text */.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
