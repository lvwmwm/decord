// Module ID: 1823
// Function ID: 20004
// Name: useSystemKeyboardHeight
// Dependencies: [1453, 1454, 2]
// Exports: default, getSystemKeyboardHeight

// Module 1823 (useSystemKeyboardHeight)
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
  importDefault = flag(1453).useAppEntryKey();
  return importDefault(1454)((arg0) => flag ? arg0.byAppEntry[closure_1].keyboardHeightExcludingSafeAreaInsets : arg0.byAppEntry[closure_1].keyboardHeight);
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
    DEFAULT_APP_ENTRY_KEY = require(1453) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  const tmp4 = importDefault(1454).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  return flag ? tmp4.keyboardHeightExcludingSafeAreaInsets : tmp4.keyboardHeight;
};
