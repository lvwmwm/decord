// Module ID: 15597
// Function ID: 15598
// Name: MFAButton
// Dependencies: [19, 21, 4936, 2]
// Exports: default

// Module 15597 (MFAButton)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 4936 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(Button.Button, { size: "lg" });
};
