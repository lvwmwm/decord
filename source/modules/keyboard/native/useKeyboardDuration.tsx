// Module ID: 5227
// Function ID: 44195
// Name: getKeyboardDuration
// Dependencies: []
// Exports: getKeyboardDuration

// Module 5227 (getKeyboardDuration)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export const getKeyboardDuration = function getKeyboardDuration() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(dependencyMap[0]).DEFAULT_APP_ENTRY_KEY;
  }
  let num2 = 300;
  if (!obj.isAndroid()) {
    num2 = importDefault(dependencyMap[2]).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardDuration;
    const obj2 = importDefault(dependencyMap[2]);
  }
  return num2;
};
