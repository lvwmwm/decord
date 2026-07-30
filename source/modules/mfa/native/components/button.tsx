// Module ID: 14767
// Function ID: 14768
// Name: MFAButton
// Dependencies: [19, 21, 4600, 2]
// Exports: default

// Module 14767 (MFAButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(require(4600) /* Button */.Button, { size: "lg" });
};
