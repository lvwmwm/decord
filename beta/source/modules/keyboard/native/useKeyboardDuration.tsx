// Module ID: 5892
// Function ID: 5893
// Name: useKeyboardDuration
// Dependencies: [1482, 1364, 1483, 2]
// Exports: getKeyboardDuration

// Module 5892 (useKeyboardDuration)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1482 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1483 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export const getKeyboardDuration = function getKeyboardDuration() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  let num = 300;
  const obj = PlatformUtils;
  if (!obj.isAndroid()) {
    const obj2 = KeyboardUIStoreDefault;
    num = obj2.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardDuration;
  }
  return num;
};
