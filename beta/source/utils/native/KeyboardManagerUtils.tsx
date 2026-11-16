// Module ID: 2020
// Function ID: 2021
// Name: KeyboardManagerUtils
// Dependencies: [2021, 2]
// Exports: clearCurrentFocusAndDismissKeyboard, dismissGlobalKeyboard, onKeyboardChanged

// Module 2020 (KeyboardManagerUtils)
import react_nativeDefault from "react-native" /* 2021 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("utils/native/KeyboardManagerUtils.tsx");

export function dismissGlobalKeyboard() {
  const obj = react_nativeDefault;
  const result = obj.dismissGlobalKeyboard();
}
export function clearCurrentFocusAndDismissKeyboard() {
  const obj = react_nativeDefault;
  const result = obj.clearCurrentFocusAndDismissKeyboard();
}
export function onKeyboardChanged(arg0) {
  const obj = react_nativeDefault;
  obj.onKeyboardChanged(arg0);
}
