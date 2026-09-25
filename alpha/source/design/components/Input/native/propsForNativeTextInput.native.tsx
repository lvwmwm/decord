// Module ID: 6351
// Function ID: 6352
// Name: propsForNativeTextInput
// Dependencies: [109, 2]
// Exports: propsForNativeTextInput

// Module 6351 (propsForNativeTextInput)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

let closure_0 = ["disabled", "centered", "round", "clearable"];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/propsForNativeTextInput.native.tsx");

export const propsForNativeTextInput = function propsForNativeTextInput(inputProps) {
  ({ disabled, centered, round, clearable } = inputProps);
  return _objectWithoutProperties(inputProps, closure_0);
};
