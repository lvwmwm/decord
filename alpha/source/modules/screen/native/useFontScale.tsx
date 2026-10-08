// Module ID: 5382
// Function ID: 5383
// Name: useFontScale
// Dependencies: [19, 1497, 558, 576, 1499, 2]
// Exports: getFontScale

// Module 5382 (useFontScale)
import react2 from "react" /* 576 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1499 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1497 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFontScale() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = AppEntryKeyContext;
  const appEntryKey = obj2.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function t(arg0) {
      return arg0.byAppEntry[appEntryKey].fontScale;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return DimensionsStore(tmp3);
}) : (function useFontScale() {
  const obj = AppEntryKeyContext;
  const appEntryKey = obj.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(react.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
});
const result = size.fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].fontScale;
};
export const useFontScale = tmp2;
