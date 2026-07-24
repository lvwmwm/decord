// Module ID: 1820
// Function ID: 19997
// Name: dismissGlobalKeyboard
// Dependencies: [27, 477, 1821, 2]
// Exports: clearCurrentFocusAndDismissKeyboard, dismissGlobalKeyboard, onKeyboardChanged

// Module 1820 (dismissGlobalKeyboard)
import { NativeModules } from "get ActivityIndicator";

let result = require("enforcing").fileFinishedImporting("utils/native/KeyboardManagerUtils.tsx");

export const dismissGlobalKeyboard = function dismissGlobalKeyboard() {
  if (obj.isAndroid()) {
    if (null != importDefault(1821)) {
      const result = importDefault(1821).dismissGlobalKeyboard();
      const obj2 = importDefault(1821);
    }
  } else {
    const KeyboardManager = NativeModules.KeyboardManager;
    const result1 = KeyboardManager.dismissGlobalKeyboard();
  }
};
export const clearCurrentFocusAndDismissKeyboard = function clearCurrentFocusAndDismissKeyboard() {
  if (obj.isAndroid()) {
    if (null != importDefault(1821)) {
      const result = importDefault(1821).clearCurrentFocusAndDismissKeyboard();
      const obj2 = importDefault(1821);
    }
  }
};
export const onKeyboardChanged = function onKeyboardChanged(open) {
  if (obj.isAndroid()) {
    if (null != importDefault(1821)) {
      importDefault(1821).onKeyboardChanged(open);
      const obj2 = importDefault(1821);
    }
  } else if (null != NativeModules.KeyboardManager.onKeyboardChanged) {
    const KeyboardManager = NativeModules.KeyboardManager;
    open = globalThis.open;
    KeyboardManager.onKeyboardChanged(globalThis.open);
  }
};
