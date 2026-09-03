// Module ID: 15515
// Function ID: 15516
// Name: MFAButton
// Dependencies: [19, 21, 4929, 2]
// Exports: default

// Module 15515 (MFAButton)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 4929 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(Button.Button, { size: "lg" });
};
