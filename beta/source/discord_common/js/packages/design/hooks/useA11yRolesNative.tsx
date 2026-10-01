// Module ID: 4548
// Function ID: 4549
// Name: react-native
// Dependencies: [17, 2]
// Exports: useCheckboxA11yNative, useRadioA11yNative

// Module 4548 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const Platform = react_native.Platform;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx");

export const useCheckboxA11yNative = function useCheckboxA11yNative(checked) {
  let obj2;
  checked = checked.checked;
  const obj = { accessibilityRole: "checkbox", accessibilityState: obj2 };
  obj2 = { checked, selected: checked };
  const merged = Object.assign(Object.assign(checked, Object.assign({ checked: 0 })));
  return obj;
};
export const useRadioA11yNative = function useRadioA11yNative(selected) {
  let obj2;
  selected = selected.selected;
  const obj = { accessibilityRole: "radio", accessibilityState: obj2 };
  obj2 = { checked: selected, selected };
  const merged = Object.assign(Object.assign(selected, Object.assign({ selected: 0 })));
  return obj;
};
