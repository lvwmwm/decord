// Module ID: 5365
// Function ID: 5366
// Name: FormCheckboxRow
// Dependencies: [19, 21, 4302, 4019, 5366, 5392, 2]
// Exports: default

// Module 5365 (FormCheckboxRow)
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
  let obj = require(4019) /* useCheckboxA11yNative */;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = {};
  const tmp2 = callback();
  const merged1 = Object.assign(merged);
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.trailing = jsx(importDefault(5392), { selected });
  obj.trailingWrapperStyle = tmp2.checkboxWrapperStyle;
  return jsx(importDefault(5366), {});
};
