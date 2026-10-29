// Module ID: 5631
// Function ID: 5632
// Name: useKeyboardDuration
// Dependencies: [1500, 1381, 1501, 2]
// Exports: getKeyboardDuration

// Module 5631 (useKeyboardDuration)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1500 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1501 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export function getKeyboardDuration() {
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
}
