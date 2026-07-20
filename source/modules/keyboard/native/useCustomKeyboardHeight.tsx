// Module ID: 5227
// Function ID: 44159
// Name: useCustomKeyboardHeight
// Dependencies: []
// Exports: default, getCustomKeyboardHeight

// Module 5227 (useCustomKeyboardHeight)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/keyboard/native/useCustomKeyboardHeight.tsx");

export default function useCustomKeyboardHeight() {
  const callback = callback(dependencyMap[0]).useAppEntryKey();
  return importDefault(dependencyMap[1])((arg0) => arg0.byAppEntry[closure_0].customKeyboardHeight);
};
export const getCustomKeyboardHeight = function getCustomKeyboardHeight() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(dependencyMap[0]).DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(dependencyMap[1]).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].customKeyboardHeight;
};
