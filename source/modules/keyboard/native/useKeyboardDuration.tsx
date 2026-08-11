// Module ID: 5370
// Function ID: 5371
// Name: getKeyboardDuration
// Dependencies: [1496, 500, 1497, 2]
// Exports: getKeyboardDuration

// Module 5370 (getKeyboardDuration)
const result = require("computeEntryState").fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export const getKeyboardDuration = function getKeyboardDuration() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1496) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  let num = 300;
  if (!obj.isAndroid()) {
    num = importDefault(1497).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardDuration;
    const obj2 = importDefault(1497);
  }
  return num;
};
