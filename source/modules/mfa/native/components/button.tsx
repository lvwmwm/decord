// Module ID: 14692
// Function ID: 111893
// Name: MFAButton
// Dependencies: [31, 33, 4543, 2]
// Exports: default

// Module 14692 (MFAButton)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(require(4543) /* Button */.Button, { size: "lg" });
};
