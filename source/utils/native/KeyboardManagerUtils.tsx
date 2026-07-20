// Module ID: 1820
// Function ID: 19990
// Name: dismissGlobalKeyboard
// Dependencies: []
// Exports: clearCurrentFocusAndDismissKeyboard, dismissGlobalKeyboard, onKeyboardChanged

// Module 1820 (dismissGlobalKeyboard)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("utils/native/KeyboardManagerUtils.tsx");

export const dismissGlobalKeyboard = function dismissGlobalKeyboard() {
  if (obj.isAndroid()) {
    if (null != importDefault(dependencyMap[2])) {
      const result = importDefault(dependencyMap[2]).dismissGlobalKeyboard();
      const obj2 = importDefault(dependencyMap[2]);
    }
  } else {
    const KeyboardManager = NativeModules.KeyboardManager;
    const result1 = KeyboardManager.dismissGlobalKeyboard();
  }
};
export const clearCurrentFocusAndDismissKeyboard = function clearCurrentFocusAndDismissKeyboard() {
  if (obj.isAndroid()) {
    if (null != importDefault(dependencyMap[2])) {
      const result = importDefault(dependencyMap[2]).clearCurrentFocusAndDismissKeyboard();
      const obj2 = importDefault(dependencyMap[2]);
    }
  }
};
export const onKeyboardChanged = function onKeyboardChanged(open) {
  if (obj.isAndroid()) {
    if (null != importDefault(dependencyMap[2])) {
      importDefault(dependencyMap[2]).onKeyboardChanged(open);
      const obj2 = importDefault(dependencyMap[2]);
    }
  } else if (null != NativeModules.KeyboardManager.onKeyboardChanged) {
    const KeyboardManager = NativeModules.KeyboardManager;
    open = globalThis.open;
    KeyboardManager.onKeyboardChanged(globalThis.open);
  }
};
