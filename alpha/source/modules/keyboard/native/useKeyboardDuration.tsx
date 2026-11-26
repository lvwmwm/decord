// Module ID: 7050
// Function ID: 7051
// Name: useKeyboardDuration
// Dependencies: [1498, 1379, 1499, 2]
// Exports: getKeyboardDuration

// Module 7050 (useKeyboardDuration)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1498 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1499 */;
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
