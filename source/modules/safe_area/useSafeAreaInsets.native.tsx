// Module ID: 1628
// Function ID: 1629
// Name: useSafeAreaInsets
// Dependencies: [1496, 1629, 2]
// Exports: default, getSafeAreaInsets

// Module 1628 (useSafeAreaInsets)
const result = require("set").fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _require(1496).useAppEntryKey();
  return importDefault(1629)((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1496) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1629).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};
