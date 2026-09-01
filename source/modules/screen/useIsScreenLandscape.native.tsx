// Module ID: 5071
// Function ID: 5072
// Name: getIsScreenLandscape
// Dependencies: [19, 1494, 1496, 2]
// Exports: getIsScreenLandscape, useIsScreenLandscape

// Module 5071 (getIsScreenLandscape)
import closure_2 from "noop" /* 19 */;
import closure_3 from "getDimensionsStoreStateForEntry" /* 1494 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export const getIsScreenLandscape = function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return state.getState().byAppEntry[str].screenIsLandscape;
};
export const useIsScreenLandscape = function useIsScreenLandscape() {
  appEntryKey = appEntryKey(1496).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
};
