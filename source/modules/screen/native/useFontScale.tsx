// Module ID: 4936
// Function ID: 4937
// Name: getFontScale
// Dependencies: [19, 1493, 1495, 2]
// Exports: getFontScale, useFontScale

// Module 4936 (getFontScale)
import closure_2 from "noop" /* 19 */;
import closure_3 from "getDimensionsStoreStateForEntry" /* 1493 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return state.getState().byAppEntry[str].fontScale;
};
export const useFontScale = function useFontScale() {
  appEntryKey = appEntryKey(1495).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
};
