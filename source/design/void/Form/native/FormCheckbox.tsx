// Module ID: 5499
// Function ID: 5500
// Name: FormCheckbox
// Dependencies: [19, 21, 4380, 1297, 2]
// Exports: default

// Module 5499 (FormCheckbox)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
let closure_3 = createCacheKey.createStyles({ checkbox: { width: 22, height: 22 } });
const result = require("set").fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  const tmp = callback();
  return jsx(Button.Checkbox, { style: callback().checkbox, selected: selected.selected });
};
