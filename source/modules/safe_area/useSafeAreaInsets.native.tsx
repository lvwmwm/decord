// Module ID: 1557
// Function ID: 17601
// Name: useSafeAreaInsets
// Dependencies: [1453, 1558, 2]
// Exports: default, getSafeAreaInsets

// Module 1557 (useSafeAreaInsets)
const result = require("set").fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _require(1453).useAppEntryKey();
  return importDefault(1558)((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1453) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1558).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};
