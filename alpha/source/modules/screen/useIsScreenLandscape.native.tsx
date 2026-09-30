// Module ID: 5635
// Function ID: 5636
// Name: useIsScreenLandscape
// Dependencies: [19, 1480, 1482, 2]
// Exports: getIsScreenLandscape, useIsScreenLandscape

// Module 5635 (useIsScreenLandscape)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1482 */;
import noop from "module_19" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1480 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export const getIsScreenLandscape = function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].screenIsLandscape;
};
export const useIsScreenLandscape = function useIsScreenLandscape() {
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(noop.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
};
