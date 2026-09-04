// Module ID: 5535
// Function ID: 5536
// Name: getKeyboardDuration
// Dependencies: [1495, 1234, 1496, 2]
// Exports: getKeyboardDuration

// Module 5535 (getKeyboardDuration)
import set from "set" /* 2 */;
import context from "context" /* 1495 */;
import computeEntryStateDefault from "computeEntryState" /* 1496 */;

const result = set.fileFinishedImporting("modules/keyboard/native/useKeyboardDuration.tsx");

export const getKeyboardDuration = function getKeyboardDuration() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = context.DEFAULT_APP_ENTRY_KEY;
  }
  let num = 300;
  if (!obj.isAndroid()) {
    num = computeEntryStateDefault.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardDuration;
    const obj2 = computeEntryStateDefault;
  }
  return num;
};
