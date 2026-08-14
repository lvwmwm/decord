// Module ID: 15078
// Function ID: 15079
// Name: MFAButton
// Dependencies: [19, 21, 4777, 2]
// Exports: default

// Module 15078 (MFAButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(require(4777) /* Button */.Button, { size: "lg" });
};
