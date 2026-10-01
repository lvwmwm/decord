// Module ID: 7394
// Function ID: 7395
// Name: useIsAccessibilityServiceEnabled
// Dependencies: [560, 5207, 5266, 2]
// Exports: getIsAccessibilityServiceEnabled, useIsAccessibilityServiceEnabled

// Module 7394 (useIsAccessibilityServiceEnabled)
import react_nativeDefault from "react-native" /* 5207 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5266 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

function ACCESSIBILITY_SERVICE_ENABLED_GETTER(accessibilityServiceEnabled) {
  return accessibilityServiceEnabled.accessibilityServiceEnabled;
}
const state = module_560.create((arg0) => {
  let obj3;
  let closure_0 = arg0;
  let obj = react_nativeDefault;
  const result = obj.onAccessibilityServiceEnabledChanged((accessibilityServiceEnabled) => {
    const obj = { accessibilityServiceEnabled };
    closure_0(obj);
  });
  const obj2 = { accessibilityServiceEnabled: obj3.isAccessibilityServiceEnabled() };
  obj3 = react_nativeDefault;
  return obj2;
});
let result = size.fileFinishedImporting("modules/a11y/native/useIsAccessibilityServiceEnabled.native.tsx");

export const getIsAccessibilityServiceEnabled = function getIsAccessibilityServiceEnabled() {
  const obj = useIsScreenReaderEnabled;
  const accessibilityServiceEnabled = obj.getIsScreenReaderEnabled() || state.getState().accessibilityServiceEnabled;
  return accessibilityServiceEnabled;
};
export const useIsAccessibilityServiceEnabled = function useIsAccessibilityServiceEnabled() {
  const obj = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled() || state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  return isScreenReaderEnabled;
};
