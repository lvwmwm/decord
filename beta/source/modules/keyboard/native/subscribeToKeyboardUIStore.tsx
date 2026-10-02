// Module ID: 1487
// Function ID: 1488
// Name: subscribeToKeyboardUIStore
// Dependencies: [1488, 1489, 2]
// Exports: default

// Module 1487 (subscribeToKeyboardUIStore)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1488 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/subscribeToKeyboardUIStore.tsx");

export default function subscribeToKeyboardUIStore(arg0, DEFAULT_APP_ENTRY_KEY) {
  let closure_0 = arg0;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  return obj.subscribe((arg0) => closure_0(arg0.byAppEntry[DEFAULT_APP_ENTRY_KEY]));
};
