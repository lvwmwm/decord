// Module ID: 10356
// Function ID: 10357
// Name: react-native
// Dependencies: [17, 2]
// Exports: dismissKeyboard

// Module 10356 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const Keyboard = react_native.Keyboard;
const result = size.fileFinishedImporting("utils/native/KeyboardUtils.tsx");

export function dismissKeyboard() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (!flag) {
    Keyboard.dismiss();
  }
}
