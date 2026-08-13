// Module ID: 4761
// Function ID: 4762
// Name: getFontScale
// Dependencies: [19, 1494, 1496, 2]
// Exports: getFontScale, useFontScale

// Module 4761 (getFontScale)
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
  appEntryKey = appEntryKey(1496).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
};
