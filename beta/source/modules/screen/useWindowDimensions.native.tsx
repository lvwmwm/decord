// Module ID: 1479
// Function ID: 1480
// Name: useWindowDimensions
// Dependencies: [19, 1480, 1482, 2]
// Exports: default, getWindowDimensions

// Module 1479 (useWindowDimensions)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1482 */;
import react from "react" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1480 */;
import size from "module_2" /* 2 */;

let closure_4 = { ignoreKeyboard: false };
const result = size.fileFinishedImporting("modules/screen/useWindowDimensions.native.tsx");

export default function useWindowDimensions() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.ignoreKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let appEntryKey;
  const obj = AppEntryKeyContext;
  if (appEntryKey == null) {
    appEntryKey = obj.useAppEntryKey();
  }
  const items = [flag, appEntryKey];
  return DimensionsStore(react.useMemo(() => {
    let fn;
    if (flag) {
      let closure_0 = tmp;
      fn = (arg0) => arg0.byAppEntry[closure_0].windowDimensionsIgnoringKeyboard;
    } else {
      closure_0 = tmp;
      fn = (arg0) => arg0.byAppEntry[closure_0].windowDimensions;
    }
    return fn;
  }, items));
};
export const getWindowDimensions = function getWindowDimensions(arg0) {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.ignoreKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let str = tmp.appEntryKey;
  if (str === undefined) {
    str = "main";
  }
  const tmp2 = DimensionsStore.getState().byAppEntry[str];
  return flag ? tmp2.windowDimensionsIgnoringKeyboard : tmp2.windowDimensions;
};
