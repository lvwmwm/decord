// Module ID: 5779
// Function ID: 49439
// Name: getKeyboardIsOpen
// Dependencies: [0, 0, 0, 0, 0]
// Exports: default, subscribeToKeyboardIsOpen

// Module 5779 (getKeyboardIsOpen)
import __exportStarResult1 from "__exportStarResult1";

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
    DEFAULT_APP_ENTRY_KEY = arg1(dependencyMap[1]).DEFAULT_APP_ENTRY_KEY;
  }
  const tmp4 = importDefault(dependencyMap[2]).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY];
  const systemKeyboardOpen = tmp4.systemKeyboardOpen;
  if (flag) {
    let tmp6 = systemKeyboardOpen;
    if (!systemKeyboardOpen) {
      tmp6 = tmp4.keyboardType !== arg1(dependencyMap[3]).KeyboardTypes.SYSTEM;
    }
    let tmp5 = tmp6;
  } else {
    tmp5 = systemKeyboardOpen;
  }
  return tmp5;
}
let closure_4 = {};
const result = require("__exportStarResult1").fileFinishedImporting("modules/keyboard/native/useKeyboardIsOpen.tsx");

export default function useKeyboardIsOpen() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let importDefault;
  importDefault = arg1(dependencyMap[1]).useAppEntryKey();
  return importDefault(dependencyMap[2])((arg0) => {
    const systemKeyboardOpen = tmp.systemKeyboardOpen;
    if (flag) {
      let tmp3 = systemKeyboardOpen;
      if (!systemKeyboardOpen) {
        tmp3 = tmp.keyboardType !== flag(closure_2[3]).KeyboardTypes.SYSTEM;
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
  const arg1 = arg0;
  if (arg1 === undefined) {
    tmp = closure_4;
  }
  let flag = tmp.includeCustomKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let DEFAULT_APP_ENTRY_KEY = tmp.appEntryKey;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = arg1(dependencyMap[1]).DEFAULT_APP_ENTRY_KEY;
  }
  const dependencyMap = DEFAULT_APP_ENTRY_KEY;
  return callback(() => arg0(callback({ includeCustomKeyboard: flag, appEntryKey: DEFAULT_APP_ENTRY_KEY })), DEFAULT_APP_ENTRY_KEY);
};
export { getKeyboardIsOpen };
