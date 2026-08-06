// Module ID: 1609
// Function ID: 1610
// Name: useSafeAreaInsets
// Dependencies: [1477, 1610, 2]
// Exports: default, getSafeAreaInsets

// Module 1609 (useSafeAreaInsets)
const result = require("set").fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _require(1477).useAppEntryKey();
  return importDefault(1610)((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1477) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1610).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};
