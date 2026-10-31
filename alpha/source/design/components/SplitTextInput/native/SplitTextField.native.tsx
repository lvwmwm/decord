// Module ID: 7134
// Function ID: 7135
// Name: SplitTextField
// Dependencies: [19, 17, 21, 7097, 7090, 7091, 7095, 7099, 2]
// Exports: SplitTextField

// Module 7134 (SplitTextField)
import Fragment from "Fragment" /* 21 */;
import useTextField from "useTextField" /* 7090 */;
import useInputClearButton from "useInputClearButton" /* 7091 */;
import useInputAttachments from "useInputAttachments" /* 7095 */;
import InputFieldContainer from "InputFieldContainer" /* 7097 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ Pressable: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export function SplitTextField(ref) {
  let innerRef;
  let inputProps;
  let inputStyle;
  let state;
  let tmp2Result2;
  let trailing;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let obj = InputFieldContainer;
  const obj2 = { size: merged.size, round: merged.round };
  const inputStyles = obj.useInputStyles(obj2);
  const obj3 = useTextField;
  const textField = obj3.useTextField(merged, ref);
  ({ inputProps, innerRef, state } = textField);
  const obj4 = useInputClearButton;
  const inputClearButtonConfig = obj4.useInputClearButtonConfig(merged, state);
  let tmp7;
  if (null != inputClearButtonConfig) {
    const obj6 = { trailing: null, trailingPressableProps: null };
    ({ content: obj5.trailing, pressableProps: obj5.trailingPressableProps } = inputClearButtonConfig);
    tmp7 = obj6;
  }
  const tmp2Result = useInputAttachments;
  const inputAttachments = tmp2Result.useInputAttachments(merged, tmp7);
  let tmp9 = null;
  ({ trailing, inputStyle } = inputAttachments);
  if (null != merged.leadingText) {
    tmp9 = null;
    if (merged.leadingText.length > 0) {
      ({
        style(pressed) {
              let obj;
              if (pressed.pressed) {
                obj = { opacity: 0.2 };
              }
              const items = [obj];
              return items;
            },
        children: tmp2Result2.renderInputAttachment(undefined, merged.leadingText, inputStyles.text)
      });
      const merged1 = Object.assign(merged.leadingPressableProps);
      tmp9 = <_false style={inputStyles.splitBorder}>{null}</_false>;
      tmp2Result2 = useInputAttachments;
    }
  }
  const BaseTextField = tmp2(7099).BaseTextField;
  const merged2 = Object.assign(inputProps);
  return <BaseTextField ref={innerRef} leading={tmp9} trailing={trailing} inputStyle={inputStyle} />;
}
