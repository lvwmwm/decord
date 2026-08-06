// Module ID: 5914
// Function ID: 5915
// Name: TextField
// Dependencies: [19, 21, 5915, 5916, 5920, 5923, 2]

// Module 5914 (TextField)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((onClear, ref) => {
  let innerRef;
  let inputProps;
  let inputStyle;
  let leading;
  let state;
  let trailing;
  let obj = require(5915) /* useTextFieldState */;
  const textField = obj.useTextField(onClear, ref);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = require(5916) /* useInputClearButton */.useInputClearButtonConfig(onClear, state);
  let tmp5;
  if (null != inputClearButtonConfig) {
    obj = { trailing: null, trailingPressableProps: null };
    ({ content: obj3[0], pressableProps: obj3[1] } = inputClearButtonConfig);
    tmp5 = obj;
  }
  const obj2 = require(5916) /* useInputClearButton */;
  const inputAttachments = require(5920) /* InputAttachmentContainer */.useInputAttachments(onClear, tmp5);
  ({ leading, trailing, inputStyle } = inputAttachments);
  obj = {};
  const merged = Object.assign(inputProps);
  obj.ref = innerRef;
  obj.leading = leading;
  obj.trailing = trailing;
  obj.inputStyle = inputStyle;
  return jsx(require(5923) /* BaseTextField */.BaseTextField, {});
});
const result = require("useTextFieldState").fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = forwardRefResult;
