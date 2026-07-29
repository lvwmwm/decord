// Module ID: 9590
// Function ID: 9591
// Name: dismissKeyboard
// Dependencies: [17, 2]
// Exports: dismissKeyboard

// Module 9590 (dismissKeyboard)
import { Keyboard } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("utils/native/KeyboardUtils.tsx");

export const dismissKeyboard = function dismissKeyboard() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (!flag) {
    Keyboard.dismiss();
  }
};
