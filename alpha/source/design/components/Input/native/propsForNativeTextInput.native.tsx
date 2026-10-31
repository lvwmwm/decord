// Module ID: 7103
// Function ID: 7104
// Name: _objectWithoutProperties
// Dependencies: [109, 2]
// Exports: propsForNativeTextInput

// Module 7103 (_objectWithoutProperties)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import size from "module_2" /* 2 */;

let closure_0 = ["disabled", "centered", "round", "clearable"];
const result = size.fileFinishedImporting("design/components/Input/native/propsForNativeTextInput.native.tsx");

export function propsForNativeTextInput(inputProps) {
  let centered;
  let clearable;
  let disabled;
  let round;
  ({ disabled, centered, round, clearable } = inputProps);
  return _objectWithoutProperties(inputProps, closure_0);
}
