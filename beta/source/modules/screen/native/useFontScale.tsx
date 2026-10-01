// Module ID: 5288
// Function ID: 5289
// Name: useFontScale
// Dependencies: [19, 1480, 1482, 2]
// Exports: getFontScale, useFontScale

// Module 5288 (useFontScale)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1482 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1480 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].fontScale;
};
export const useFontScale = function useFontScale() {
  const obj = AppEntryKeyContext;
  const appEntryKey = obj.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(react.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
};
