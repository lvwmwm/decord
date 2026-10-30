// Module ID: 1889
// Function ID: 1890
// Name: KeyboardManagerUtils
// Dependencies: [1890, 2]
// Exports: clearCurrentFocusAndDismissKeyboard, dismissGlobalKeyboard, onKeyboardChanged

// Module 1889 (KeyboardManagerUtils)
import react_nativeDefault from "react-native" /* 1890 */;
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
