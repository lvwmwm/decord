// Module ID: 6087
// Function ID: 6088
// Name: useCustomKeyboardHeight
// Dependencies: [1482, 1483, 2]
// Exports: default, getCustomKeyboardHeight

// Module 6087 (useCustomKeyboardHeight)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1482 */;
import KeyboardUIStoreDefault from "KeyboardUIStore" /* 1483 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  closure_0 = AppEntryKeyContext.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  return KeyboardUIStoreDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};
