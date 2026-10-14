// Module ID: 1486
// Function ID: 1487
// Name: subscribeToKeyboardUIStore
// Dependencies: [1487, 1488, 2]
// Exports: default

// Module 1486 (subscribeToKeyboardUIStore)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1487 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1488 */;
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
