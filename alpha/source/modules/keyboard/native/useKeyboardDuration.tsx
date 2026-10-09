// Module ID: 6664
// Function ID: 6665
// Name: useKeyboardDuration
// Dependencies: [1500, 1382, 1501, 2]
// Exports: getKeyboardDuration

// Module 6664 (useKeyboardDuration)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1500 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1501 */;
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
