// Module ID: 1616
// Function ID: 1617
// Name: useSafeAreaInsets
// Dependencies: [1485, 1617, 558, 568, 2]
// Exports: getSafeAreaInsets

// Module 1616 (useSafeAreaInsets)
import c from "c" /* 568 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1485 */;
import SafeAreaStoreDefault from "SafeAreaStore" /* 1617 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaInsets.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function t(arg0) {
      return arg0.byAppEntry[appEntryKey].safeAreaInsets;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  return SafeAreaStoreDefault(tmp4);
}) : (() => {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return SafeAreaStoreDefault((arg0) => arg0.byAppEntry[closure_0].safeAreaInsets);
});
export const getSafeAreaInsets = function getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return SafeAreaStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].safeAreaInsets;
};
