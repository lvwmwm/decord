// Module ID: 1629
// Function ID: 1630
// Name: useSafeAreaInsets
// Dependencies: [1497, 1630, 2]
// Exports: default, getSafeAreaInsets

// Module 1629 (useSafeAreaInsets)
const result = require("set").fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  _require = _require(1497).useAppEntryKey();
  return importDefault(1630)((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1497) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1630).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};
