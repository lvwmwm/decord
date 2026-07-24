// Module ID: 9605
// Function ID: 74754
// Name: dismissKeyboard
// Dependencies: [27, 2]
// Exports: dismissKeyboard

// Module 9605 (dismissKeyboard)
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
