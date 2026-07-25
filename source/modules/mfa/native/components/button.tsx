// Module ID: 14703
// Function ID: 112020
// Name: MFAButton
// Dependencies: [31, 33, 4544, 2]
// Exports: default

// Module 14703 (MFAButton)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(require(4544) /* Button */.Button, { size: "lg" });
};
