// Module ID: 9561
// Function ID: 74489
// Name: dismissKeyboard
// Dependencies: []
// Exports: dismissKeyboard

// Module 9561 (dismissKeyboard)
const Keyboard = require(dependencyMap[0]).Keyboard;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/native/KeyboardUtils.tsx");

export const dismissKeyboard = function dismissKeyboard() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (!flag) {
    Keyboard.dismiss();
  }
};
