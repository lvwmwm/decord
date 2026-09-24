// Module ID: 6943
// Function ID: 6944
// Name: TextField
// Dependencies: [19, 21, 6944, 6945, 6949, 6953, 2]

// Module 6943 (TextField)
import useTextField from "useTextField" /* 6944 */;
import useInputClearButton from "useInputClearButton" /* 6945 */;
import useInputAttachments from "useInputAttachments" /* 6949 */;
import BaseTextField from "BaseTextField" /* 6953 */;
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
