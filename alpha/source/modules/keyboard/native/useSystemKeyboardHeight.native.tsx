// Module ID: 2023
// Function ID: 2024
// Name: useSystemKeyboardHeight
// Dependencies: [1499, 1500, 2]
// Exports: default, getSystemKeyboardHeight

// Module 2023 (useSystemKeyboardHeight)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1499 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1500 */;
import size from "module_2" /* 2 */;

let closure_3 = { excludeSafeAreaInsets: false };
const result = size.fileFinishedImporting("modules/keyboard/native/useSystemKeyboardHeight.native.tsx");

export default function useSystemKeyboardHeight() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  let flag = tmp.excludeSafeAreaInsets;
  if (flag === undefined) {
    flag = false;
  }
  const obj = AppEntryKeyContext;
  let closure_1 = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => flag ? arg0.byAppEntry[closure_1].keyboardHeightExcludingSafeAreaInsets : arg0.byAppEntry[closure_1].keyboardHeight);
};
export function getSystemKeyboardHeight(arg0) {
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
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  const tmp4 = obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  return flag ? tmp4.keyboardHeightExcludingSafeAreaInsets : tmp4.keyboardHeight;
}
