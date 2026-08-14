// Module ID: 9983
// Function ID: 9984
// Name: dismissKeyboard
// Dependencies: [17, 2]
// Exports: dismissKeyboard

// Module 9983 (dismissKeyboard)
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
