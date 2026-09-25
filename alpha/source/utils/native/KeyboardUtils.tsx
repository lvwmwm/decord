// Module ID: 9726
// Function ID: 9727
// Name: KeyboardUtils
// Dependencies: [17, 2]
// Exports: dismissKeyboard

// Module 9726 (KeyboardUtils)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const Keyboard = _mod17.Keyboard;
const result = size.fileFinishedImporting("utils/native/KeyboardUtils.tsx");

export const dismissKeyboard = function dismissKeyboard() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (!flag) {
    Keyboard.dismiss();
  }
};
