// Module ID: 1450
// Function ID: 16931
// Name: useWindowDimensions
// Dependencies: []
// Exports: default, getWindowDimensions

// Module 1450 (useWindowDimensions)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = { ignoreKeyboard: false };
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/screen/useWindowDimensions.native.tsx");

export default function useWindowDimensions() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.ignoreKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let appEntryKey = tmp.appEntryKey;
  let dependencyMap;
  appEntryKey = arg1(dependencyMap[2]).useAppEntryKey();
  dependencyMap = appEntryKey;
  const items = [flag, appEntryKey];
  return state(React.useMemo(() => {
    if (flag) {
      let tmp2 = (appEntryKey) => (arg0) => arg0.byAppEntry[closure_0].windowDimensionsIgnoringKeyboard(appEntryKey);
    } else {
      tmp2 = (appEntryKey) => (arg0) => arg0.byAppEntry[closure_0].windowDimensions(appEntryKey);
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
