// Module ID: 5154
// Function ID: 44921
// Name: FormCheckboxRow
// Dependencies: []
// Exports: default

// Module 5154 (FormCheckboxRow)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = arg1(dependencyMap[2]).createStyles({ checkboxWrapperStyle: { flexShrink: 0 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/void/Form/native/FormCheckboxRow.tsx");

export default function FormCheckboxRow(selected) {
  let accessibilityRole;
  let accessibilityState;
  selected = selected.selected;
  let obj = Object.create(null);
  obj.selected = 0;
  const merged = Object.assign(selected, obj);
  obj = arg1(dependencyMap[3]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = {};
  const tmp3 = callback();
  const merged1 = Object.assign(merged);
  obj["accessibilityRole"] = accessibilityRole;
  obj["accessibilityState"] = accessibilityState;
  obj["trailing"] = jsx(importDefault(dependencyMap[5]), { selected });
  obj["trailingWrapperStyle"] = tmp3.checkboxWrapperStyle;
  return jsx(importDefault(dependencyMap[4]), obj);
};
