// Module ID: 5447
// Function ID: 5448
// Name: getKeyboardDuration
// Dependencies: [1497, 500, 1498, 2]
// Exports: getKeyboardDuration

// Module 5447 (getKeyboardDuration)
import set from "set" /* 2 */;
import context from "context" /* 1497 */;
import computeEntryStateDefault from "computeEntryState" /* 1498 */;

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
