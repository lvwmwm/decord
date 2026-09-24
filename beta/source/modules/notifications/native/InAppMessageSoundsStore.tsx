// Module ID: 13003
// Function ID: 13004
// Name: InAppMessageSoundsStore
// Dependencies: [510, 1247, 558, 568, 4415, 2]
// Exports: isInAppMessageSoundsEnabled, setInAppMessageSoundsEnabled

// Module 13003 (InAppMessageSoundsStore)
import Storage2 from "Storage" /* 510 */;
import c from "c" /* 568 */;
import _mod4415 from "module_4415" /* 4415 */;
import identity from "module_1247" /* 1247 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const InAppMessageSoundsEnabled = "InAppMessageSoundsEnabled";
let closure_3 = identity.createWithEqualityFn(() => {
  const Storage = Storage2.Storage;
  let isEnabled = Storage.get(InAppMessageSoundsEnabled);
  if (isEnabled == null) {
    isEnabled = true;
  }
  return { isEnabled };
});
let result = size.fileFinishedImporting("modules/notifications/native/InAppMessageSoundsStore.tsx");

export const isInAppMessageSoundsEnabled = function isInAppMessageSoundsEnabled() {
  return closure_3.getState().isEnabled;
};
export const setInAppMessageSoundsEnabled = function setInAppMessageSoundsEnabled(isEnabled) {
  const Storage = Storage2.Storage;
  const result = Storage.set(InAppMessageSoundsEnabled, isEnabled);
  closure_3.setState({ isEnabled });
};
export const useInAppMessageSoundsEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isEnabled) {
      return isEnabled.isEnabled;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _mod4415.shallow);
}) : (() => closure_3((isEnabled) => isEnabled.isEnabled, _mod4415.shallow));
