// Module ID: 1882
// Function ID: 1883
// Name: KeyboardManagerUtils
// Dependencies: [17, 1370, 1883, 2]
// Exports: clearCurrentFocusAndDismissKeyboard, dismissGlobalKeyboard, onKeyboardChanged

// Module 1882 (KeyboardManagerUtils)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import react_nativeDefault from "react-native" /* 1883 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
let result = size.fileFinishedImporting("utils/native/KeyboardManagerUtils.tsx");

export const dismissGlobalKeyboard = function dismissGlobalKeyboard() {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    if (obj2 != null) {
      const result = obj2.dismissGlobalKeyboard();
    }
  } else {
    const KeyboardManager = NativeModules.KeyboardManager;
    const result1 = KeyboardManager.dismissGlobalKeyboard();
  }
};
export const clearCurrentFocusAndDismissKeyboard = function clearCurrentFocusAndDismissKeyboard() {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    if (obj2 != null) {
      const result = obj2.clearCurrentFocusAndDismissKeyboard();
    }
  }
};
export const onKeyboardChanged = function onKeyboardChanged(open) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
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
