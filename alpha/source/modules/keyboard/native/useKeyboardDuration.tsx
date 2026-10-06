// Module ID: 6479
// Function ID: 6480
// Name: useKeyboardDuration
// Dependencies: [1487, 1369, 1488, 2]
// Exports: getKeyboardDuration

// Module 6479 (useKeyboardDuration)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1488 */;
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
