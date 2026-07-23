// Module ID: 5161
// Function ID: 44957
// Name: getKeyboardDuration
// Dependencies: [1453, 477, 1454, 2]
// Exports: getKeyboardDuration

// Module 5161 (getKeyboardDuration)
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export const getKeyboardDuration = function getKeyboardDuration() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1453) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  let num2 = 300;
  if (!obj.isAndroid()) {
    num2 = importDefault(1454).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardDuration;
    const obj2 = importDefault(1454);
  }
  return num2;
};
