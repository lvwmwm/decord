// Module ID: 6400
// Function ID: 6401
// Name: useKeyboardDuration
// Dependencies: [1488, 1370, 1489, 2]
// Exports: getKeyboardDuration

// Module 6400 (useKeyboardDuration)
import PlatformUtils from "PlatformUtils" /* 1370 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1488 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1489 */;
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
