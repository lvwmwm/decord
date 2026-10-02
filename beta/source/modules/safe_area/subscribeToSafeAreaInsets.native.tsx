// Module ID: 8921
// Function ID: 8922
// Name: subscribeToSafeAreaInsets
// Dependencies: [1488, 1620, 2]
// Exports: default

// Module 8921 (subscribeToSafeAreaInsets)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1488 */;
import SafeAreaStoreDefault from "SafeAreaStore" /* 1620 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safe_area/subscribeToSafeAreaInsets.native.tsx");

export default function subscribeToSafeAreaInsets(arg0) {
  let closure_0 = arg0;
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = SafeAreaStoreDefault;
  return obj.subscribe((arg0, arg1) => {
    const safeAreaInsets = arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
    if (safeAreaInsets !== arg1.byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets) {
      closure_0(safeAreaInsets);
    }
  });
};
