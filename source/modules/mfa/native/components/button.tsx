// Module ID: 14870
// Function ID: 14871
// Name: MFAButton
// Dependencies: [19, 21, 4665, 2]
// Exports: default

// Module 14870 (MFAButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(require(4665) /* Button */.Button, { size: "lg" });
};
