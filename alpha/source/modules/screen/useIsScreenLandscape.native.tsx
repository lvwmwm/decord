// Module ID: 8326
// Function ID: 8327
// Name: useIsScreenLandscape
// Dependencies: [19, 1498, 558, 576, 1500, 2]
// Exports: getIsScreenLandscape

// Module 8326 (useIsScreenLandscape)
import react2 from "react" /* 576 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1500 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1498 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsScreenLandscape() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = AppEntryKeyContext;
  const appEntryKey = obj2.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function n(arg0) {
      return arg0.byAppEntry[appEntryKey].screenIsLandscape;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return DimensionsStore(tmp3);
}) : (function useIsScreenLandscape() {
  const obj = AppEntryKeyContext;
  const appEntryKey = obj.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(react.useCallback((arg0) => arg0.byAppEntry[appEntryKey].screenIsLandscape, items));
});
const result = size.fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export const getIsScreenLandscape = function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].screenIsLandscape;
};
export const useIsScreenLandscape = tmp2;
