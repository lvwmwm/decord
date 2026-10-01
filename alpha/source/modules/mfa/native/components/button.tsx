// Module ID: 15445
// Function ID: 15446
// Name: button
// Dependencies: [19, 21, 5465, 2]
// Exports: default

// Module 15445 (button)
import components_Button_Button from "components/Button/Button" /* 5465 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(components_Button_Button.Button, { size: "lg" });
};
