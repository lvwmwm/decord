// Module ID: 5784
// Function ID: 49487
// Name: getKeyboardIsOpen
// Dependencies: [1452, 1453, 1454, 1555, 2]
// Exports: default, subscribeToKeyboardIsOpen

// Module 5784 (getKeyboardIsOpen)
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";

const require = arg1;
function getKeyboardIsOpen(arg0) {
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
    DEFAULT_APP_ENTRY_KEY = require(1453) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  const tmp4 = importDefault(1454).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  const systemKeyboardOpen = tmp4.systemKeyboardOpen;
  if (flag) {
    let tmp6 = systemKeyboardOpen;
    if (!systemKeyboardOpen) {
      tmp6 = tmp4.keyboardType !== require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM;
    }
    let tmp5 = tmp6;
  } else {
    tmp5 = systemKeyboardOpen;
  }
  return tmp5;
}
let closure_4 = {};
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/keyboard/native/useKeyboardIsOpen.tsx");

export default function useKeyboardIsOpen() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  importDefault = flag(1453).useAppEntryKey();
  return importDefault(1454)((arg0) => {
    const systemKeyboardOpen = tmp.systemKeyboardOpen;
    if (flag) {
      let tmp3 = systemKeyboardOpen;
      if (!systemKeyboardOpen) {
        tmp3 = tmp.keyboardType !== flag(outer1_2[3]).KeyboardTypes.SYSTEM;
      }
      let tmp2 = tmp3;
    } else {
      tmp2 = systemKeyboardOpen;
    }
    return tmp2;
  });
};
export const subscribeToKeyboardIsOpen = function subscribeToKeyboardIsOpen(arg0) {
  let tmp = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let DEFAULT_APP_ENTRY_KEY = tmp.appEntryKey;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = _require(DEFAULT_APP_ENTRY_KEY[1]).DEFAULT_APP_ENTRY_KEY;
  }
  return callback(() => callback(outer1_5({ includeCustomKeyboard: flag, appEntryKey: DEFAULT_APP_ENTRY_KEY })), DEFAULT_APP_ENTRY_KEY);
};
export { getKeyboardIsOpen };
