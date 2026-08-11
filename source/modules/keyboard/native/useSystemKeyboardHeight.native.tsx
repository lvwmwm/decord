// Module ID: 1894
// Function ID: 1895
// Name: useSystemKeyboardHeight
// Dependencies: [1496, 1497, 2]
// Exports: default, getSystemKeyboardHeight

// Module 1894 (useSystemKeyboardHeight)
let closure_3 = { excludeSafeAreaInsets: false };
const result = require("set").fileFinishedImporting("modules/keyboard/native/useSystemKeyboardHeight.native.tsx");

export default function useSystemKeyboardHeight() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  let flag = tmp.excludeSafeAreaInsets;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  importDefault = flag(1496).useAppEntryKey();
  return importDefault(1497)((arg0) => flag ? arg0.byAppEntry[closure_1].keyboardHeightExcludingSafeAreaInsets : arg0.byAppEntry[closure_1].keyboardHeight);
};
export const getSystemKeyboardHeight = function getSystemKeyboardHeight(arg0) {
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
    DEFAULT_APP_ENTRY_KEY = require(1496) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  const tmp4 = importDefault(1497).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  return flag ? tmp4.keyboardHeightExcludingSafeAreaInsets : tmp4.keyboardHeight;
};
