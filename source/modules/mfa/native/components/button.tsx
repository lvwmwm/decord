// Module ID: 14924
// Function ID: 14925
// Name: MFAButton
// Dependencies: [19, 21, 4712, 2]
// Exports: default

// Module 14924 (MFAButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(require(4712) /* Button */.Button, { size: "lg" });
};
