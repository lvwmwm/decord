// Module ID: 5183
// Function ID: 45016
// Name: FormCheckbox
// Dependencies: [31, 33, 4130, 1273, 2]
// Exports: default

// Module 5183 (FormCheckbox)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_3 = _createForOfIteratorHelperLoose.createStyles({ checkbox: { width: 22, height: 22 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default function FormCheckbox(selected) {
  const tmp = callback();
  return jsx(require(1273) /* Button */.Checkbox, { style: callback().checkbox, selected: selected.selected });
};
