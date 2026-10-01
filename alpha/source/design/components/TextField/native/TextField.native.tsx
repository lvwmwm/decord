// Module ID: 6217
// Function ID: 6218
// Name: TextField
// Dependencies: [19, 21, 6218, 6219, 6223, 6227, 2]

// Module 6217 (TextField)
import useTextField from "useTextField" /* 6218 */;
import useInputClearButton from "useInputClearButton" /* 6219 */;
import useInputAttachments from "useInputAttachments" /* 6223 */;
import BaseTextField from "BaseTextField" /* 6227 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = noop.forwardRef((onClear, ref) => {
  const textField = useTextField.useTextField(onClear, ref);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(onClear, state);
  let tmp5;
  if (null != inputClearButtonConfig) {
    ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
    tmp5 = { trailing: null, trailingPressableProps: null };
    const obj4 = { trailing: null, trailingPressableProps: null };
  }
  const inputAttachments = useInputAttachments.useInputAttachments(onClear, tmp5);
  ({ leading, trailing, inputStyle } = inputAttachments);
  const obj5 = {};
  const merged = Object.assign(inputProps);
  obj5.ref = innerRef;
  obj5.leading = leading;
  obj5.trailing = trailing;
  obj5.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
});
