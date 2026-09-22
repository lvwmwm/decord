// Module ID: 5661
// Function ID: 5662
// Name: useKeyboardDuration
// Dependencies: [1480, 1363, 1481, 2]
// Exports: getKeyboardDuration

// Module 5661 (useKeyboardDuration)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1480 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1481 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export const getKeyboardDuration = function getKeyboardDuration() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  let num = 300;
  if (!obj.isAndroid()) {
    num = KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardDuration;
  }
  return num;
};
