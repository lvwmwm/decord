// Module ID: 8030
// Function ID: 8031
// Name: useIsScreenLandscape
// Dependencies: [19, 1495, 1497, 2]
// Exports: getIsScreenLandscape, useIsScreenLandscape

// Module 8030 (useIsScreenLandscape)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1497 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1495 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].screenIsLandscape;
}
export function useIsScreenLandscape() {
  const obj = AppEntryKeyContext;
  const appEntryKey = obj.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(react.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
}
