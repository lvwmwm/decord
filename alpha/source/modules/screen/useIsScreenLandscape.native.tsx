// Module ID: 8560
// Function ID: 8561
// Name: useIsScreenLandscape
// Dependencies: [19, 1497, 1499, 2]
// Exports: getIsScreenLandscape, useIsScreenLandscape

// Module 8560 (useIsScreenLandscape)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1499 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1497 */;
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
