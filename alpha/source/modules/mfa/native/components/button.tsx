// Module ID: 16035
// Function ID: 16036
// Name: button
// Dependencies: [19, 21, 5273, 2]
// Exports: default

// Module 16035 (button)
import components_Button_Button from "components/Button/Button" /* 5273 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default function MFAButton(arg0) {
  const merged = Object.assign(arg0);
  return jsx(components_Button_Button.Button, { size: "lg" });
};
