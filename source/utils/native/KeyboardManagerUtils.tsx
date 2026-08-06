// Module ID: 1872
// Function ID: 1873
// Name: dismissGlobalKeyboard
// Dependencies: [17, 500, 1873, 2]
// Exports: clearCurrentFocusAndDismissKeyboard, dismissGlobalKeyboard, onKeyboardChanged

// Module 1872 (dismissGlobalKeyboard)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("utils/native/KeyboardManagerUtils.tsx");

export const dismissGlobalKeyboard = function dismissGlobalKeyboard() {
  if (obj.isAndroid()) {
    const obj2 = importDefault(1873);
    if (obj2 != null) {
      const result = obj2.dismissGlobalKeyboard();
    }
  } else {
    const KeyboardManager = NativeModules.KeyboardManager;
    const result1 = KeyboardManager.dismissGlobalKeyboard();
  }
};
export const clearCurrentFocusAndDismissKeyboard = function clearCurrentFocusAndDismissKeyboard() {
  if (obj.isAndroid()) {
    const obj2 = importDefault(1873);
    if (obj2 != null) {
      const result = obj2.clearCurrentFocusAndDismissKeyboard();
    }
  }
};
export const onKeyboardChanged = function onKeyboardChanged(open) {
  if (obj.isAndroid()) {
    const obj2 = importDefault(1873);
    if (obj2 != null) {
      obj2.onKeyboardChanged(open);
    }
  } else {
    const KeyboardManager = NativeModules.KeyboardManager;
    const onKeyboardChanged = KeyboardManager.onKeyboardChanged;
    if (onKeyboardChanged != null) {
      open = globalThis.open;
      onKeyboardChanged(globalThis.open);
    }
  }
};
