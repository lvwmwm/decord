// Module ID: 5778
// Function ID: 5779
// Name: useFontScale
// Dependencies: [19, 1494, 1496, 2]
// Exports: getFontScale, useFontScale

// Module 5778 (useFontScale)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1496 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1494 */;
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
