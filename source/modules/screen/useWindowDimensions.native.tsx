// Module ID: 1450
// Function ID: 16933
// Name: useWindowDimensions
// Dependencies: [31, 1451, 1453, 2]
// Exports: default, getWindowDimensions

// Module 1450 (useWindowDimensions)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = { ignoreKeyboard: false };
const result = require("context").fileFinishedImporting("modules/screen/useWindowDimensions.native.tsx");

export default function useWindowDimensions() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.ignoreKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let appEntryKey = tmp.appEntryKey;
  appEntryKey = undefined;
  appEntryKey = flag(appEntryKey[2]).useAppEntryKey();
  const items = [flag, appEntryKey];
  return state(React.useMemo(() => {
    if (flag) {
      let tmp2 = ((appEntryKey) => {
        let closure_0 = appEntryKey;
        return (arg0) => arg0.byAppEntry[closure_0].windowDimensionsIgnoringKeyboard;
      })(appEntryKey);
    } else {
      tmp2 = ((appEntryKey) => {
        let closure_0 = appEntryKey;
        return (arg0) => arg0.byAppEntry[closure_0].windowDimensions;
      })(appEntryKey);
    }
    return tmp2;
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
  const tmp2 = state.getState().byAppEntry[str];
  return flag ? tmp2.windowDimensionsIgnoringKeyboard : tmp2.windowDimensions;
};
