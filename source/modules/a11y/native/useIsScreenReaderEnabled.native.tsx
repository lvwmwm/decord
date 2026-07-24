// Module ID: 4528
// Function ID: 39790
// Name: SCREEN_READER_ENABLED_GETTER
// Dependencies: [27, 587, 621, 682, 2]
// Exports: addScreenReaderEnabledListener, getIsScreenReaderEnabled, useIsScreenReaderEnabled

// Module 4528 (SCREEN_READER_ENABLED_GETTER)
import { AccessibilityInfo } from "get ActivityIndicator";
import keys from "keys";

function SCREEN_READER_ENABLED_GETTER(screenReaderEnabled) {
  return screenReaderEnabled.screenReaderEnabled;
}
let closure_4 = keys.create((arg0) => {
  const _require = arg0;
  function updateScreenReaderEnabled(arg0) {
    const callback = arg0;
    callback(updateScreenReaderEnabled[3]).batchUpdates(() => callback((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== outer1_0) {
        const Storage = callback(updateScreenReaderEnabled[1]).Storage;
        const result = Storage.set("screenReaderEnabled", outer1_0);
        const obj = { screenReaderEnabled: outer1_0 };
        tmp = obj;
      }
      return tmp;
    }));
  }
  let result = AccessibilityInfo.isScreenReaderEnabled();
  result.then(updateScreenReaderEnabled).catch(() => {
    updateScreenReaderEnabled(false);
  });
  const listener = AccessibilityInfo.addEventListener("screenReaderChanged", updateScreenReaderEnabled);
  let obj = {};
  let Storage = _require(updateScreenReaderEnabled[1]).Storage;
  const value = Storage.get("screenReaderEnabled");
  obj.screenReaderEnabled = null != value && value;
  return obj;
});
let result = require("keys").fileFinishedImporting("modules/a11y/native/useIsScreenReaderEnabled.native.tsx");

export const addScreenReaderEnabledListener = function addScreenReaderEnabledListener(arg0) {
  let closure_0 = arg0;
  return lib.subscribe((screenReaderEnabled) => {
    callback(screenReaderEnabled.screenReaderEnabled);
  });
};
export const getIsScreenReaderEnabled = function getIsScreenReaderEnabled() {
  return lib.getState().screenReaderEnabled;
};
export const useIsScreenReaderEnabled = function useIsScreenReaderEnabled() {
  return lib(SCREEN_READER_ENABLED_GETTER);
};
