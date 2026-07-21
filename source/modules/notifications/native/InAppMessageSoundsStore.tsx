// Module ID: 10232
// Function ID: 79040
// Name: isInAppMessageSoundsEnabled
// Dependencies: []
// Exports: isInAppMessageSoundsEnabled, setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled

// Module 10232 (isInAppMessageSoundsEnabled)
const _module = require(dependencyMap[1]);
let closure_2 = _module.createWithEqualityFn(() => {
  const obj = {};
  const Storage = require(dependencyMap[0]).Storage;
  const value = Storage.get("InAppMessageSoundsEnabled");
  obj.isEnabled = null == value || value;
  return obj;
});
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/notifications/native/InAppMessageSoundsStore.tsx");

export const isInAppMessageSoundsEnabled = function isInAppMessageSoundsEnabled() {
  return store.getState().isEnabled;
};
export const setInAppMessageSoundsEnabled = function setInAppMessageSoundsEnabled(isEnabled) {
  const Storage = require(dependencyMap[0]).Storage;
  const result = Storage.set("InAppMessageSoundsEnabled", isEnabled);
  store.setState({ isEnabled });
};
export const useInAppMessageSoundsEnabled = function useInAppMessageSoundsEnabled() {
  return store((isEnabled) => isEnabled.isEnabled, require(dependencyMap[2]).shallow);
};
