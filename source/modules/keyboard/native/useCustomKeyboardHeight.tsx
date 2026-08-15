// Module ID: 5444
// Function ID: 5445
// Name: useCustomKeyboardHeight
// Dependencies: [1497, 1498, 2]
// Exports: default, getCustomKeyboardHeight

// Module 5444 (useCustomKeyboardHeight)
const result = require("set").fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  _require = _require(1497).useAppEntryKey();
  return importDefault(1498)((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight(arg0) {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1497) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1498).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};
