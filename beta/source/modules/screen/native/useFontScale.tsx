// Module ID: 5288
// Function ID: 5289
// Name: useFontScale
// Dependencies: [19, 1480, 1482, 2]
// Exports: getFontScale, useFontScale

// Module 5288 (useFontScale)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1482 */;
import noop from "module_19" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1480 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].fontScale;
};
export const useFontScale = function useFontScale() {
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(noop.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
};
