// Module ID: 11162
// Function ID: 11163
// Name: InAppMessageSoundsStore
// Dependencies: [510, 1254, 5056, 2]
// Exports: isInAppMessageSoundsEnabled, setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled

// Module 11162 (InAppMessageSoundsStore)
import Storage2 from "Storage" /* 510 */;
import _slicedToArray from "_slicedToArray" /* 5056 */;
import module_1254 from "module_1254" /* 1254 */;
import size from "module_2" /* 2 */;

const InAppMessageSoundsEnabled = "InAppMessageSoundsEnabled";
let closure_3 = module_1254.createWithEqualityFn(() => {
  const Storage = Storage2.Storage;
  let isEnabled = Storage.get(InAppMessageSoundsEnabled);
  if (isEnabled == null) {
    isEnabled = true;
  }
  return { isEnabled };
});
let result = size.fileFinishedImporting("modules/notifications/native/InAppMessageSoundsStore.tsx");

export function isInAppMessageSoundsEnabled() {
  return closure_3.getState().isEnabled;
}
export function setInAppMessageSoundsEnabled(isEnabled) {
  const Storage = Storage2.Storage;
  const result = Storage.set(InAppMessageSoundsEnabled, isEnabled);
  const obj = { isEnabled };
  closure_3.setState(obj);
}
export function useInAppMessageSoundsEnabled() {
  return closure_3((isEnabled) => isEnabled.isEnabled, _slicedToArray.shallow);
}
