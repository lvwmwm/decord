// Module ID: 303
// Function ID: 304
// Name: dismissKeyboard
// Dependencies: [144]

// Module 303 (dismissKeyboard)
const require = arg1;
const dependencyMap = arg6;
arg5.default = function dismissKeyboard() {
  const _default = require(144) /* set */.default;
  _default.blurTextInput(require(144) /* set */.default.currentlyFocusedInput());
};
