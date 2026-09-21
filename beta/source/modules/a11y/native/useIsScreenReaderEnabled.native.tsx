// Module ID: 5173
// Function ID: 5174
// Name: useIsScreenReaderEnabled
// Dependencies: [17, 510, 562, 1252, 558, 2]
// Exports: addScreenReaderEnabledListener, getIsScreenReaderEnabled, useIsScreenReaderEnabled

// Module 5173 (useIsScreenReaderEnabled)
import _mod17 from "module_17" /* 17 */;
import module_562 from "module_562" /* 562 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const AccessibilityInfo = _mod17.AccessibilityInfo;
function SCREEN_READER_ENABLED_GETTER(screenReaderEnabled) {
  return screenReaderEnabled.screenReaderEnabled;
}
let screenReaderEnabled = "screenReaderEnabled";
let closure_5 = module_562.create((arg0) => {
  _require = arg0;
  function updateScreenReaderEnabled(event) {
    closure_0 = event;
    closure_0(1252).batchUpdates(() => closure_0((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== closure_1_0) {
        const Storage = closure_0(510).Storage;
        const result = Storage.set(screenReaderEnabled, tmp2);
        const obj = { screenReaderEnabled: tmp2 };
        tmp = obj;
      }
      return tmp;
    }));
  }
  let result = AccessibilityInfo.isScreenReaderEnabled();
  result.then(updateScreenReaderEnabled).catch(() => {
    c0 = false;
    closure_0(1252).batchUpdates(() => closure_0((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== closure_1_0) {
        const Storage = closure_0(510).Storage;
        const result = Storage.set(screenReaderEnabled, tmp2);
        const obj = { screenReaderEnabled: tmp2 };
        tmp = obj;
      }
      return tmp;
    }));
  });
  const listener = AccessibilityInfo.addEventListener("screenReaderChanged", updateScreenReaderEnabled);
  let Storage = require("Storage").Storage;
  screenReaderEnabled = Storage.get(screenReaderEnabled);
  if (screenReaderEnabled == null) {
    screenReaderEnabled = false;
  }
  return { screenReaderEnabled };
});
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/a11y/native/useIsScreenReaderEnabled.native.tsx");

export const addScreenReaderEnabledListener = function addScreenReaderEnabledListener(arg0) {
  closure_0 = arg0;
  return closure_5.subscribe((screenReaderEnabled) => {
    closure_0(screenReaderEnabled.screenReaderEnabled);
  });
};
export const getIsScreenReaderEnabled = function getIsScreenReaderEnabled() {
  return closure_5.getState().screenReaderEnabled;
};
export const useIsScreenReaderEnabled = () => closure_5(SCREEN_READER_ENABLED_GETTER);
