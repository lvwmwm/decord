// Module ID: 5642
// Function ID: 5643
// Name: useFontScale
// Dependencies: [19, 1492, 1494, 2]
// Exports: getFontScale, useFontScale

// Module 5642 (useFontScale)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1494 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1492 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].fontScale;
}
export function useFontScale() {
  const obj = AppEntryKeyContext;
  const appEntryKey = obj.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(react.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
}
