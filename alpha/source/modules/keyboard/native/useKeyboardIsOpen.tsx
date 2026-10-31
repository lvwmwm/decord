// Module ID: 7101
// Function ID: 7102
// Name: useKeyboardIsOpen
// Dependencies: [1493, 1494, 1495, 1623, 2]
// Exports: default, getKeyboardIsOpen, subscribeToKeyboardIsOpen

// Module 7101 (useKeyboardIsOpen)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1494 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1495 */;
import KeyboardTypes from "KeyboardTypes" /* 1623 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1493 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4 = {};
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardIsOpen.tsx");

export default function useKeyboardIsOpen() {
  let closure_1;
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const obj = flag(1494);
  importDefault = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => {
    let tmp2;
    const systemKeyboardOpen = tmp.systemKeyboardOpen;
    if (flag) {
      tmp2 = systemKeyboardOpen || tmp.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
      const tmp3 = systemKeyboardOpen || tmp.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
    } else {
      tmp2 = systemKeyboardOpen;
    }
    return tmp2;
  });
};
export function subscribeToKeyboardIsOpen(arg0) {
  let closure_0;
  _require = arg0;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let DEFAULT_APP_ENTRY_KEY = tmp.appEntryKey;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = require("AppEntryKeyContext").DEFAULT_APP_ENTRY_KEY;
  }
  return subscribeToKeyboardUIStore(() => {
    let tmp6;
    const obj = { includeCustomKeyboard: flag, appEntryKey: DEFAULT_APP_ENTRY_KEY };
    flag = obj.includeCustomKeyboard;
    const tmp = closure_0;
    if (flag === undefined) {
      flag = false;
    }
    DEFAULT_APP_ENTRY_KEY = obj.appEntryKey;
    if (DEFAULT_APP_ENTRY_KEY === undefined) {
      DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
    }
    const obj2 = KeyboardUIStoreDefault;
    const tmp5 = obj2.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
    const systemKeyboardOpen = tmp5.systemKeyboardOpen;
    if (flag) {
      tmp6 = systemKeyboardOpen || tmp5.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
      const tmp7 = systemKeyboardOpen || tmp5.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
    } else {
      tmp6 = systemKeyboardOpen;
    }
    return tmp(tmp6);
  }, DEFAULT_APP_ENTRY_KEY);
}
export function getKeyboardIsOpen(arg0) {
  let tmp6;
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let DEFAULT_APP_ENTRY_KEY = tmp.appEntryKey;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  const tmp5 = obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  const systemKeyboardOpen = tmp5.systemKeyboardOpen;
  if (flag) {
    tmp6 = systemKeyboardOpen || tmp5.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
    const tmp7 = systemKeyboardOpen || tmp5.keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  } else {
    tmp6 = systemKeyboardOpen;
  }
  return tmp6;
}
