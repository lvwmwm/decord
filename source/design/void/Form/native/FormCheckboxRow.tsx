// Module ID: 5366
// Function ID: 5367
// Name: FormCheckboxRow
// Dependencies: [19, 21, 4303, 4032, 5367, 5393, 2]
// Exports: default

// Module 5366 (FormCheckboxRow)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ checkboxWrapperStyle: { flexShrink: 0 } });
const result = require("createCacheKey").fileFinishedImporting("design/void/Form/native/FormCheckboxRow.tsx");

export default function FormCheckboxRow(selected) {
  let accessibilityRole;
  let accessibilityState;
  selected = selected.selected;
  const merged = Object.assign(selected, Object.create(null));
  let obj = require(4032) /* useCheckboxA11yNative */;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = {};
  const tmp2 = callback();
  const merged1 = Object.assign(merged);
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.trailing = jsx(importDefault(5393), { selected });
  obj.trailingWrapperStyle = tmp2.checkboxWrapperStyle;
  return jsx(importDefault(5367), {});
};
