// Module ID: 5603
// Function ID: 5604
// Name: useKeyboardDuration
// Dependencies: [1495, 1376, 1496, 2]
// Exports: getKeyboardDuration

// Module 5603 (useKeyboardDuration)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1495 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1496 */;
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
