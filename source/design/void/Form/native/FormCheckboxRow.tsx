// Module ID: 6936
// Function ID: 6937
// Name: FormCheckboxRow
// Dependencies: [19, 21, 4661, 4105, 6937, 6946, 2]
// Exports: default

// Module 6936 (FormCheckboxRow)
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
  let obj = require(4105) /* useCheckboxA11yNative */;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = {};
  const tmp2 = callback();
  const merged1 = Object.assign(merged);
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.trailing = jsx(importDefault(6946), { selected });
  obj.trailingWrapperStyle = tmp2.checkboxWrapperStyle;
  return jsx(importDefault(6937), {});
};
