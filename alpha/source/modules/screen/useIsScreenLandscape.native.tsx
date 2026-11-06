// Module ID: 8865
// Function ID: 8866
// Name: useIsScreenLandscape
// Dependencies: [19, 1494, 1496, 2]
// Exports: getIsScreenLandscape, useIsScreenLandscape

// Module 8865 (useIsScreenLandscape)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1496 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1494 */;
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
