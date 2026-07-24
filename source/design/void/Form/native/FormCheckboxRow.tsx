// Module ID: 5157
// Function ID: 44945
// Name: FormCheckboxRow
// Dependencies: [31, 33, 4130, 3848, 5158, 5183, 2]
// Exports: default

// Module 5157 (FormCheckboxRow)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ checkboxWrapperStyle: { flexShrink: 0 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/void/Form/native/FormCheckboxRow.tsx");

export default function FormCheckboxRow(selected) {
  let accessibilityRole;
  let accessibilityState;
  selected = selected.selected;
  let obj = Object.create(null);
  obj.selected = 0;
  const merged = Object.assign(selected, obj);
  obj = require(3848) /* useCheckboxA11yNative */;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = {};
  const tmp3 = callback();
  const merged1 = Object.assign(merged);
  obj["accessibilityRole"] = accessibilityRole;
  obj["accessibilityState"] = accessibilityState;
  obj["trailing"] = jsx(importDefault(5183), { selected });
  obj["trailingWrapperStyle"] = tmp3.checkboxWrapperStyle;
  return jsx(importDefault(5158), {});
};
