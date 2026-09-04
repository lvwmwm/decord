// Module ID: 6553
// Function ID: 6554
// Name: TextField
// Dependencies: [19, 21, 6554, 6555, 6559, 6563, 2]

// Module 6553 (TextField)
import useTextFieldState from "useTextFieldState" /* 6554 */;
import useInputClearButton from "useInputClearButton" /* 6555 */;
import InputAttachmentContainer from "InputAttachmentContainer" /* 6559 */;
import BaseTextField from "BaseTextField" /* 6563 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const forwardRefResult = importAllResult.forwardRef((onClear, ref) => {
  let obj = useTextFieldState;
  const textField = obj.useTextField(onClear, ref);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(onClear, state);
  let tmp5;
  if (null != inputClearButtonConfig) {
    obj = { trailing: null, trailingPressableProps: null };
    ({ content: obj3[0], pressableProps: obj3[1] } = inputClearButtonConfig);
    tmp5 = obj;
  }
  const obj2 = useInputClearButton;
  const inputAttachments = InputAttachmentContainer.useInputAttachments(onClear, tmp5);
  ({ leading, trailing, inputStyle } = inputAttachments);
  obj = {};
  const merged = Object.assign(inputProps);
  obj.ref = innerRef;
  obj.leading = leading;
  obj.trailing = trailing;
  obj.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
});
const result = require("set").fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = forwardRefResult;
