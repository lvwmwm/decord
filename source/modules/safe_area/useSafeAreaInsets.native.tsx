// Module ID: 1557
// Function ID: 17600
// Name: useSafeAreaInsets
// Dependencies: []
// Exports: default, getSafeAreaInsets

// Module 1557 (useSafeAreaInsets)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  const callback = callback(dependencyMap[0]).useAppEntryKey();
  return importDefault(dependencyMap[1])((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(dependencyMap[0]).DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(dependencyMap[1]).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};
