// Module ID: 5883
// Function ID: 5884
// Name: useKeyboardDuration
// Dependencies: [1481, 1364, 1482, 2]
// Exports: getKeyboardDuration

// Module 5883 (useKeyboardDuration)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1481 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1482 */;
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
