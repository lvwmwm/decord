// Module ID: 5610
// Function ID: 5611
// Name: useCustomKeyboardHeight
// Dependencies: [1494, 1495, 2]
// Exports: default, getCustomKeyboardHeight

// Module 5610 (useCustomKeyboardHeight)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1494 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1495 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  const obj = AppEntryKeyContext;
  let closure_0 = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export function getCustomKeyboardHeight(appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  return obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
}
