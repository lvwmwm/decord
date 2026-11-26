// Module ID: 5619
// Function ID: 5620
// Name: useCustomKeyboardHeight
// Dependencies: [1498, 1499, 2]
// Exports: default, getCustomKeyboardHeight

// Module 5619 (useCustomKeyboardHeight)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1498 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1499 */;
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
