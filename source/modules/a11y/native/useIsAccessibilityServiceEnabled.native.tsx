// Module ID: 8217
// Function ID: 8218
// Name: ACCESSIBILITY_SERVICE_ENABLED_GETTER
// Dependencies: [644, 4665, 4727, 2]
// Exports: getIsAccessibilityServiceEnabled, useIsAccessibilityServiceEnabled

// Module 8217 (ACCESSIBILITY_SERVICE_ENABLED_GETTER)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4665 */;
import SCREEN_READER_ENABLED_GETTER from "SCREEN_READER_ENABLED_GETTER" /* 4727 */;
import keys from "keys" /* 644 */;

function ACCESSIBILITY_SERVICE_ENABLED_GETTER(accessibilityServiceEnabled) {
  return accessibilityServiceEnabled.accessibilityServiceEnabled;
}
let closure_4 = keys.create((arg0) => {
  closure_0 = arg0;
  let obj = enforcingDefault;
  const result = obj.onAccessibilityServiceEnabledChanged((accessibilityServiceEnabled) => {
    callback({ accessibilityServiceEnabled });
  });
  obj = { accessibilityServiceEnabled: enforcingDefault.isAccessibilityServiceEnabled() };
  return obj;
});
let result = set.fileFinishedImporting("modules/a11y/native/useIsAccessibilityServiceEnabled.native.tsx");

export const getIsAccessibilityServiceEnabled = function getIsAccessibilityServiceEnabled() {
  let accessibilityServiceEnabled = SCREEN_READER_ENABLED_GETTER.getIsScreenReaderEnabled();
  if (!accessibilityServiceEnabled) {
    accessibilityServiceEnabled = state.getState().accessibilityServiceEnabled;
  }
  return accessibilityServiceEnabled;
};
export const useIsAccessibilityServiceEnabled = function useIsAccessibilityServiceEnabled() {
  let isScreenReaderEnabled = SCREEN_READER_ENABLED_GETTER.useIsScreenReaderEnabled();
  if (!isScreenReaderEnabled) {
    isScreenReaderEnabled = state(ACCESSIBILITY_SERVICE_ENABLED_GETTER);
  }
  return isScreenReaderEnabled;
};
