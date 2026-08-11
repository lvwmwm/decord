// Module ID: 5372
// Function ID: 5373
// Name: useCustomKeyboardHeight
// Dependencies: [1496, 1497, 2]
// Exports: default, getCustomKeyboardHeight

// Module 5372 (useCustomKeyboardHeight)
const result = require("set").fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  _require = _require(1496).useAppEntryKey();
  return importDefault(1497)((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1496) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1497).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};
