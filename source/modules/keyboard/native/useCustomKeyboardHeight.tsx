// Module ID: 5163
// Function ID: 44962
// Name: useCustomKeyboardHeight
// Dependencies: [1453, 1454, 2]
// Exports: default, getCustomKeyboardHeight

// Module 5163 (useCustomKeyboardHeight)
const result = require("set").fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  _require = _require(1453).useAppEntryKey();
  return importDefault(1454)((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1453) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1454).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};
