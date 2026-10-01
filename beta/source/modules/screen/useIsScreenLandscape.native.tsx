// Module ID: 5438
// Function ID: 5439
// Name: useIsScreenLandscape
// Dependencies: [19, 1480, 1482, 2]
// Exports: getIsScreenLandscape, useIsScreenLandscape

// Module 5438 (useIsScreenLandscape)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1482 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1480 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export const getIsScreenLandscape = function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].screenIsLandscape;
};
export const useIsScreenLandscape = function useIsScreenLandscape() {
  const obj = AppEntryKeyContext;
  const appEntryKey = obj.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(react.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
};
