// Module ID: 3846
// Function ID: 32043
// Name: useCheckboxA11yNative
// Dependencies: []
// Exports: useCheckboxA11yNative, useRadioA11yNative

// Module 3846 (useCheckboxA11yNative)
const Platform = require(dependencyMap[0]).Platform;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx");

export const useCheckboxA11yNative = function useCheckboxA11yNative(checked) {
  checked = checked.checked;
  let obj = Object.create(null);
  obj.checked = 0;
  obj = { accessibilityRole: "checkbox" };
  obj = { checked, selected: checked };
  const merged = Object.assign(Object.assign(checked, obj));
  obj.accessibilityState = obj;
  return obj;
};
export const useRadioA11yNative = function useRadioA11yNative(selected) {
  selected = selected.selected;
  let obj = Object.create(null);
  obj.selected = 0;
  obj = { accessibilityRole: "radio" };
  obj = { checked: selected, selected };
  const merged = Object.assign(Object.assign(selected, obj));
  obj.accessibilityState = obj;
  return obj;
};
