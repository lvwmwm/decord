// Module ID: 11120
// Function ID: 11121
// Name: InAppMessageSoundsStore
// Dependencies: [510, 1257, 4828, 2]
// Exports: isInAppMessageSoundsEnabled, setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled

// Module 11120 (InAppMessageSoundsStore)
import Storage2 from "Storage" /* 510 */;
import _slicedToArray from "_slicedToArray" /* 4828 */;
import module_1257 from "module_1257" /* 1257 */;
import size from "module_2" /* 2 */;

const InAppMessageSoundsEnabled = "InAppMessageSoundsEnabled";
let closure_3 = module_1257.createWithEqualityFn(() => {
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
