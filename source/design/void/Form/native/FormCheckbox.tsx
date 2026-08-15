// Module ID: 6946
// Function ID: 6947
// Name: FormCheckbox
// Dependencies: [19, 21, 4661, 1297, 2]
// Exports: default

// Module 6946 (FormCheckbox)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ checkbox: { width: 22, height: 22 } });
const result = require("createCacheKey").fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  const tmp = callback();
  return jsx(require(1297) /* Button */.Checkbox, { style: callback().checkbox, selected: selected.selected });
};
