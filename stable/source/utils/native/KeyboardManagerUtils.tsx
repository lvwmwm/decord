// Module ID: 1896
// Function ID: 1897
// Name: KeyboardManagerUtils
// Dependencies: [1897, 2]
// Exports: clearCurrentFocusAndDismissKeyboard, dismissGlobalKeyboard, onKeyboardChanged

// Module 1896 (KeyboardManagerUtils)
import react_nativeDefault from "react-native" /* 1897 */;
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
