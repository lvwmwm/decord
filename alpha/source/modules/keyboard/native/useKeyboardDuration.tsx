// Module ID: 6657
// Function ID: 6658
// Name: useKeyboardDuration
// Dependencies: [1499, 1381, 1500, 2]
// Exports: getKeyboardDuration

// Module 6657 (useKeyboardDuration)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1499 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1500 */;
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
