// Module ID: 1626
// Function ID: 1627
// Name: useSafeAreaInsets
// Dependencies: [1495, 1627, 2]
// Exports: default, getSafeAreaInsets

// Module 1626 (useSafeAreaInsets)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1495 */;
import SafeAreaStoreDefault from "SafeAreaStore" /* 1627 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default function useSafeAreaInsets() {
  const obj = AppEntryKeyContext;
  let closure_0 = obj.useAppEntryKey();
  return SafeAreaStoreDefault((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
};
export function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = SafeAreaStoreDefault;
  return obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
}
