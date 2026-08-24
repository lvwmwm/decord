// Module ID: 1629
// Function ID: 1630
// Name: useSafeAreaInsets
// Dependencies: [1497, 1630, 2]
// Exports: default, getSafeAreaInsets

// Module 1629 (useSafeAreaInsets)
import set from "set" /* 2 */;
import context from "context" /* 1497 */;
import _modDef1630 from "module_1630" /* 1630 */;

const result = set.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _require(1497).useAppEntryKey();
  return _modDef1630((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  return _modDef1630.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};
