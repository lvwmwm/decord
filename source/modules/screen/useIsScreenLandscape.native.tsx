// Module ID: 4847
// Function ID: 4848
// Name: getIsScreenLandscape
// Dependencies: [19, 1475, 1477, 2]
// Exports: getIsScreenLandscape, useIsScreenLandscape

// Module 4847 (getIsScreenLandscape)
import noop from "noop";
import getDimensionsStoreStateForEntry from "getDimensionsStoreStateForEntry";

const require = arg1;
const result = require("context").fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export const getIsScreenLandscape = function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return state.getState().byAppEntry[str].screenIsLandscape;
};
export const useIsScreenLandscape = function useIsScreenLandscape() {
  appEntryKey = appEntryKey(1477).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
};
