// Module ID: 14857
// Function ID: 14858
// Name: MFAButton
// Dependencies: [19, 21, 4666, 2]
// Exports: default

// Module 14857 (MFAButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(require(4666) /* Button */.Button, { size: "lg" });
};
