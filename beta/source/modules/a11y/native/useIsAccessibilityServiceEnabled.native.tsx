// Module ID: 8215
// Function ID: 8216
// Name: useIsAccessibilityServiceEnabled
// Dependencies: [562, 5114, 5173, 558, 2]
// Exports: getIsAccessibilityServiceEnabled

// Module 8215 (useIsAccessibilityServiceEnabled)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 5114 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5173 */;
import module_562 from "module_562" /* 562 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function ACCESSIBILITY_SERVICE_ENABLED_GETTER(accessibilityServiceEnabled) {
  return accessibilityServiceEnabled.accessibilityServiceEnabled;
}
const state = module_562.create((arg0) => {
  closure_0 = arg0;
  const result = NativeDeviceAccessibilityModuleDefault.onAccessibilityServiceEnabledChanged((accessibilityServiceEnabled) => {
    closure_0({ accessibilityServiceEnabled });
  });
  const obj2 = { accessibilityServiceEnabled: null };
  obj2.accessibilityServiceEnabled = NativeDeviceAccessibilityModuleDefault.isAccessibilityServiceEnabled();
  return obj2;
});
let result = size.fileFinishedImporting("modules/a11y/native/useIsAccessibilityServiceEnabled.native.tsx");

export const getIsAccessibilityServiceEnabled = function getIsAccessibilityServiceEnabled() {
  let accessibilityServiceEnabled = useIsScreenReaderEnabled.getIsScreenReaderEnabled();
  if (!accessibilityServiceEnabled) {
    accessibilityServiceEnabled = state.getState().accessibilityServiceEnabled;
  }
  return accessibilityServiceEnabled;
};
export const useIsAccessibilityServiceEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  }
  return isScreenReaderEnabled;
}) : (() => {
  let isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  }
  return isScreenReaderEnabled;
});
