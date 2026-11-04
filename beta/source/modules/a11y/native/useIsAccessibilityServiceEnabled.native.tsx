// Module ID: 8402
// Function ID: 8403
// Name: useIsAccessibilityServiceEnabled
// Dependencies: [560, 5962, 5274, 2]
// Exports: getIsAccessibilityServiceEnabled, useIsAccessibilityServiceEnabled

// Module 8402 (useIsAccessibilityServiceEnabled)
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5274 */;
import react_nativeDefault from "react-native" /* 5962 */;
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

export function getIsAccessibilityServiceEnabled() {
  const obj = useIsScreenReaderEnabled;
  const accessibilityServiceEnabled = obj.getIsScreenReaderEnabled() || state.getState().accessibilityServiceEnabled;
  return accessibilityServiceEnabled;
}
export function useIsAccessibilityServiceEnabled() {
  const obj = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled() || state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  return isScreenReaderEnabled;
}
