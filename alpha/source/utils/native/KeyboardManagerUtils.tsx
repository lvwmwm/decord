// Module ID: 1894
// Function ID: 1895
// Name: KeyboardManagerUtils
// Dependencies: [1895, 2]
// Exports: clearCurrentFocusAndDismissKeyboard, dismissGlobalKeyboard, onKeyboardChanged

// Module 1894 (KeyboardManagerUtils)
import react_nativeDefault from "react-native" /* 1895 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("utils/native/KeyboardManagerUtils.tsx");

export const dismissGlobalKeyboard = function dismissGlobalKeyboard() {
  const obj = react_nativeDefault;
  const result = obj.dismissGlobalKeyboard();
};
export const clearCurrentFocusAndDismissKeyboard = function clearCurrentFocusAndDismissKeyboard() {
  const obj = react_nativeDefault;
  const result = obj.clearCurrentFocusAndDismissKeyboard();
};
export const onKeyboardChanged = function onKeyboardChanged(arg0) {
  const obj = react_nativeDefault;
  obj.onKeyboardChanged(arg0);
};
