// Module ID: 4606
// Function ID: 4607
// Name: getFontScale
// Dependencies: [19, 1475, 1477, 2]
// Exports: getFontScale, useFontScale

// Module 4606 (getFontScale)
import noop from "noop";
import getDimensionsStoreStateForEntry from "getDimensionsStoreStateForEntry";

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
  appEntryKey = appEntryKey(1477).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
};
