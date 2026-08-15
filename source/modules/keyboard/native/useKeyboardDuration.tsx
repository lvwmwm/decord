// Module ID: 5442
// Function ID: 5443
// Name: getKeyboardDuration
// Dependencies: [1497, 500, 1498, 2]
// Exports: getKeyboardDuration

// Module 5442 (getKeyboardDuration)
const result = require("computeEntryState").fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export const getKeyboardDuration = function getKeyboardDuration() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1497) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  let num = 300;
  if (!obj.isAndroid()) {
    num = importDefault(1498).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardDuration;
    const obj2 = importDefault(1498);
  }
  return num;
};
