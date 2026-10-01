// Module ID: 6031
// Function ID: 6032
// Name: TextField
// Dependencies: [19, 21, 6032, 6033, 6037, 6041, 2]

// Module 6031 (TextField)
import Fragment from "Fragment" /* 21 */;
import useTextField from "useTextField" /* 6032 */;
import useInputClearButton from "useInputClearButton" /* 6033 */;
import useInputAttachments from "useInputAttachments" /* 6037 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((onClear, ref) => {
  let innerRef;
  let inputProps;
  let inputStyle;
  let leading;
  let state;
  let trailing;
  const obj = useTextField;
  const textField = obj.useTextField(onClear, ref);
  ({ inputProps, innerRef, state } = textField);
  const obj2 = useInputClearButton;
  const inputClearButtonConfig = obj2.useInputClearButtonConfig(onClear, state);
  let tmp5;
  if (null != inputClearButtonConfig) {
    const obj4 = { trailing: null, trailingPressableProps: null };
    ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
    tmp5 = obj4;
  }
  const tmpResult = useInputAttachments;
  const inputAttachments = tmpResult.useInputAttachments(onClear, tmp5);
  ({ leading, trailing, inputStyle } = inputAttachments);
  const BaseTextField = tmp(6041).BaseTextField;
  const merged = Object.assign(inputProps);
  return <BaseTextField ref={innerRef} leading={leading} trailing={trailing} inputStyle={inputStyle} />;
});
const result = size.fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = forwardRefResult;
