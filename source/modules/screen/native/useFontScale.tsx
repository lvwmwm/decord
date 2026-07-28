// Module ID: 4584
// Function ID: 40023
// Name: getFontScale
// Dependencies: [31, 1451, 1453, 2]
// Exports: getFontScale, useFontScale

// Module 4584 (getFontScale)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("context").fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return state.getState().byAppEntry[str].fontScale;
};
export const useFontScale = function useFontScale() {
  appEntryKey = appEntryKey(1453).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
};
