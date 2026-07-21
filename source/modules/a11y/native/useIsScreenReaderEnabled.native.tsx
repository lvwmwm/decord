// Module ID: 4524
// Function ID: 39741
// Name: SCREEN_READER_ENABLED_GETTER
// Dependencies: []
// Exports: addScreenReaderEnabledListener, getIsScreenReaderEnabled, useIsScreenReaderEnabled

// Module 4524 (SCREEN_READER_ENABLED_GETTER)
const AccessibilityInfo = require(dependencyMap[0]).AccessibilityInfo;
function SCREEN_READER_ENABLED_GETTER(screenReaderEnabled) {
  return screenReaderEnabled.screenReaderEnabled;
}
const _module = require(dependencyMap[2]);
let closure_4 = _module.create((arg0) => {
  const require = arg0;
  function updateScreenReaderEnabled(arg0) {
    arg0(updateScreenReaderEnabled[3]).batchUpdates(() => arg0((screenReaderEnabled) => {
      let tmp = screenReaderEnabled;
      if (screenReaderEnabled.screenReaderEnabled !== callback) {
        const Storage = callback(closure_1[1]).Storage;
        const result = Storage.set("screenReaderEnabled", callback);
        const obj = { screenReaderEnabled: callback };
        tmp = obj;
      }
      return tmp;
    }));
  }
  const dependencyMap = updateScreenReaderEnabled;
  const result = AccessibilityInfo.isScreenReaderEnabled();
  result.then(updateScreenReaderEnabled).catch(() => {
    updateScreenReaderEnabled(false);
  });
  const listener = AccessibilityInfo.addEventListener("screenReaderChanged", updateScreenReaderEnabled);
  const obj = {};
  const Storage = require(dependencyMap[1]).Storage;
  const value = Storage.get("screenReaderEnabled");
  obj.screenReaderEnabled = null != value && value;
  return obj;
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/a11y/native/useIsScreenReaderEnabled.native.tsx");

export const addScreenReaderEnabledListener = function addScreenReaderEnabledListener(arg0) {
  const require = arg0;
  return lib.subscribe((screenReaderEnabled) => {
    screenReaderEnabled(screenReaderEnabled.screenReaderEnabled);
  });
};
export const getIsScreenReaderEnabled = function getIsScreenReaderEnabled() {
  return lib.getState().screenReaderEnabled;
};
export const useIsScreenReaderEnabled = function useIsScreenReaderEnabled() {
  return lib(SCREEN_READER_ENABLED_GETTER);
};
