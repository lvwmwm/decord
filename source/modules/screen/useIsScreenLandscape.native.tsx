// Module ID: 4663
// Function ID: 40405
// Name: getIsScreenLandscape
// Dependencies: [31, 1451, 1453, 2]
// Exports: getIsScreenLandscape, useIsScreenLandscape

// Module 4663 (getIsScreenLandscape)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

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
  appEntryKey = appEntryKey(1453).useAppEntryKey();
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
};
