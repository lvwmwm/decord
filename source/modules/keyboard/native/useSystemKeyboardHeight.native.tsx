// Module ID: 1823
// Function ID: 19998
// Name: useSystemKeyboardHeight
// Dependencies: []
// Exports: default, getSystemKeyboardHeight

// Module 1823 (useSystemKeyboardHeight)
let closure_3 = { excludeSafeAreaInsets: false };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/keyboard/native/useSystemKeyboardHeight.native.tsx");

export default function useSystemKeyboardHeight() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  let flag = tmp.excludeSafeAreaInsets;
  if (flag === undefined) {
    flag = false;
  }
  const require = flag;
  let importDefault;
  importDefault = require(dependencyMap[0]).useAppEntryKey();
  return importDefault(dependencyMap[1])((arg0) => flag ? arg0.byAppEntry[closure_1].keyboardHeightExcludingSafeAreaInsets : arg0.byAppEntry[closure_1].keyboardHeight);
};
export const getSystemKeyboardHeight = function getSystemKeyboardHeight() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  let flag = tmp.excludeSafeAreaInsets;
  if (flag === undefined) {
    flag = false;
  }
  let DEFAULT_APP_ENTRY_KEY = tmp.appEntryKey;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(dependencyMap[0]).DEFAULT_APP_ENTRY_KEY;
  }
  const tmp4 = importDefault(dependencyMap[1]).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  return flag ? tmp4.keyboardHeightExcludingSafeAreaInsets : tmp4.keyboardHeight;
};
