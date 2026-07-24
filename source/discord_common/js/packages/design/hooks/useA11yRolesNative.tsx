// Module ID: 3848
// Function ID: 32051
// Name: useCheckboxA11yNative
// Dependencies: [27, 2]
// Exports: useCheckboxA11yNative, useRadioA11yNative

// Module 3848 (useCheckboxA11yNative)
import { Platform } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx");

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
