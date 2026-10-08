// Module ID: 12594
// Function ID: 12595
// Name: InAppMessageSoundsStore
// Dependencies: [510, 1266, 558, 576, 4690, 2]
// Exports: isInAppMessageSoundsEnabled, setInAppMessageSoundsEnabled

// Module 12594 (InAppMessageSoundsStore)
import Storage2 from "Storage" /* 510 */;
import react from "react" /* 576 */;
import module_1266 from "module_1266" /* 1266 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const _slicedToArray = tmp(4690);
const InAppMessageSoundsEnabled = "InAppMessageSoundsEnabled";
let closure_3 = module_1266.createWithEqualityFn(() => {
  const Storage = Storage2.Storage;
  let isEnabled = Storage.get(InAppMessageSoundsEnabled);
  if (isEnabled == null) {
    isEnabled = true;
  }
  return { isEnabled };
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInAppMessageSoundsEnabled() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isEnabled) {
      return isEnabled.isEnabled;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _slicedToArray.shallow);
}) : (function useInAppMessageSoundsEnabled() {
  return closure_3((isEnabled) => isEnabled.isEnabled, _slicedToArray.shallow);
});
let result = size.fileFinishedImporting("modules/notifications/native/InAppMessageSoundsStore.tsx");

export const isInAppMessageSoundsEnabled = function isInAppMessageSoundsEnabled() {
  return closure_3.getState().isEnabled;
};
export const setInAppMessageSoundsEnabled = function setInAppMessageSoundsEnabled(isEnabled) {
  const Storage = Storage2.Storage;
  const result = Storage.set(InAppMessageSoundsEnabled, isEnabled);
  const obj = { isEnabled };
  closure_3.setState(obj);
};
export const useInAppMessageSoundsEnabled = tmp2;
