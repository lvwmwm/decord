// Module ID: 7076
// Function ID: 7077
// Name: FormCheckboxRow
// Dependencies: [19, 21, 4481, 4206, 7077, 7086, 2]
// Exports: default

// Module 7076 (FormCheckboxRow)
import noopAll from "noop" /* 19 */;
import useCheckboxA11yNative from "useCheckboxA11yNative" /* 4206 */;
import _modDef7077 from "module_7077" /* 7077 */;
import FormCheckboxDefault from "FormCheckbox" /* 7086 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ checkboxWrapperStyle: { flexShrink: 0 } });
const result = require("set").fileFinishedImporting("design/void/Form/native/FormCheckboxRow.tsx");

export default function FormCheckboxRow(selected) {
  selected = selected.selected;
  const merged = Object.assign(selected, Object.create(null));
  let obj = useCheckboxA11yNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = {};
  const tmp2 = callback();
  const merged1 = Object.assign(merged);
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.trailing = jsx(FormCheckboxDefault, { selected });
  obj.trailingWrapperStyle = tmp2.checkboxWrapperStyle;
  return jsx(_modDef7077, {});
};
