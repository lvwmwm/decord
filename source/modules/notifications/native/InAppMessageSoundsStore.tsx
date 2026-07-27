// Module ID: 10209
// Function ID: 78985
// Name: isInAppMessageSoundsEnabled
// Dependencies: [587, 677, 3744, 2]
// Exports: isInAppMessageSoundsEnabled, setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled

// Module 10209 (isInAppMessageSoundsEnabled)
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

let closure_2 = useStoreWithEqualityFn.createWithEqualityFn(() => {
  const obj = {};
  const Storage = require(587) /* Storage */.Storage;
  const value = Storage.get("InAppMessageSoundsEnabled");
  obj.isEnabled = null == value || value;
  return obj;
});
let result = require("isIterable").fileFinishedImporting("modules/notifications/native/InAppMessageSoundsStore.tsx");

export const isInAppMessageSoundsEnabled = function isInAppMessageSoundsEnabled() {
  return store.getState().isEnabled;
};
export const setInAppMessageSoundsEnabled = function setInAppMessageSoundsEnabled(isEnabled) {
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set("InAppMessageSoundsEnabled", isEnabled);
  store.setState({ isEnabled });
};
export const useInAppMessageSoundsEnabled = function useInAppMessageSoundsEnabled() {
  return store((isEnabled) => isEnabled.isEnabled, require(3744) /* isIterable */.shallow);
};
