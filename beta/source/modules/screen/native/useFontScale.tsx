// Module ID: 5195
// Function ID: 5196
// Name: useFontScale
// Dependencies: [19, 1483, 558, 568, 1485, 2]
// Exports: getFontScale

// Module 5195 (useFontScale)
import c from "c" /* 568 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1485 */;
import noop from "module_19" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1483 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return DimensionsStore.getState().byAppEntry[str].fontScale;
};
export const useFontScale = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function t(arg0) {
      return arg0.byAppEntry[appEntryKey].fontScale;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return DimensionsStore(tmp3);
}) : (() => {
  const appEntryKey = AppEntryKeyContext.useAppEntryKey();
  const items = [appEntryKey];
  return DimensionsStore(noop.useCallback((arg0) => arg0.byAppEntry[appEntryKey].fontScale, items));
});
