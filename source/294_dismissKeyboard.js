// Module ID: 294
// Function ID: 4513
// Name: dismissKeyboard
// Dependencies: [143]

// Module 294 (dismissKeyboard)
const require = arg1;
const dependencyMap = arg6;
arg5.default = function dismissKeyboard() {
  const _default = require(143) /* focusInput */.default;
  _default.blurTextInput(require(143) /* focusInput */.default.currentlyFocusedInput());
};
