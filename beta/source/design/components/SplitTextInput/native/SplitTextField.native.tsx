// Module ID: 6386
// Function ID: 6387
// Name: SplitTextField
// Dependencies: [19, 17, 21, 6039, 6032, 6033, 6037, 6041, 2]

// Module 6386 (SplitTextField)
import Fragment from "Fragment" /* 21 */;
import useTextField from "useTextField" /* 6032 */;
import useInputClearButton from "useInputClearButton" /* 6033 */;
import useInputAttachments from "useInputAttachments" /* 6037 */;
import InputFieldContainer from "InputFieldContainer" /* 6039 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ Pressable: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((size, ref) => {
  let innerRef;
  let inputProps;
  let inputStyle;
  let state;
  let tmpResult2;
  let trailing;
  let obj = InputFieldContainer;
  const obj2 = { size: size.size, round: size.round };
  const inputStyles = obj.useInputStyles(obj2);
  const obj3 = useTextField;
  const textField = obj3.useTextField(size, ref);
  ({ inputProps, innerRef, state } = textField);
  const obj4 = useInputClearButton;
  const inputClearButtonConfig = obj4.useInputClearButtonConfig(size, state);
  let tmp6;
  if (null != inputClearButtonConfig) {
    const obj6 = { trailing: null, trailingPressableProps: null };
    ({ content: obj5.trailing, pressableProps: obj5.trailingPressableProps } = inputClearButtonConfig);
    tmp6 = obj6;
  }
  const tmpResult = useInputAttachments;
  const inputAttachments = tmpResult.useInputAttachments(size, tmp6);
  let tmp8 = null;
  ({ trailing, inputStyle } = inputAttachments);
  if (null != size.leadingText) {
    tmp8 = null;
    if (size.leadingText.length > 0) {
      ({
        style(pressed) {
              let obj;
              if (pressed.pressed) {
                obj = { opacity: 0.2 };
              }
              const items = [obj];
              return items;
            },
        children: tmpResult2.renderInputAttachment(undefined, size.leadingText, inputStyles.text)
      });
      const merged = Object.assign(size.leadingPressableProps);
      tmp8 = <_false style={inputStyles.splitBorder}>{null}</_false>;
      tmpResult2 = useInputAttachments;
    }
  }
  const BaseTextField = tmp(6041).BaseTextField;
  const merged1 = Object.assign(inputProps);
  return <BaseTextField ref={innerRef} leading={tmp8} trailing={trailing} inputStyle={inputStyle} />;
});
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export const SplitTextField = forwardRefResult;
