// Module ID: 7180
// Function ID: 7181
// Name: TextField
// Dependencies: [19, 21, 7181, 7182, 7186, 7191, 7195, 2]
// Exports: TextField

// Module 7180 (TextField)
import Fragment from "Fragment" /* 21 */;
import useTextField from "useTextField" /* 7181 */;
import useInputClearButton from "useInputClearButton" /* 7182 */;
import useInputRevealButton from "useInputRevealButton" /* 7186 */;
import useInputAttachments from "useInputAttachments" /* 7191 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export function TextField(ref) {
  let innerRef;
  let inputProps;
  let inputStyle;
  let leading;
  let state;
  let trailing;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = useTextField;
  const textField = obj.useTextField(merged, ref);
  ({ inputProps, state, innerRef } = textField);
  const obj2 = useInputClearButton;
  const inputClearButtonConfig = obj2.useInputClearButtonConfig(merged, state);
  const obj3 = useInputRevealButton;
  let inputRevealButtonConfig = obj3.useInputRevealButtonConfig(merged, state);
  if (inputRevealButtonConfig == null) {
    inputRevealButtonConfig = inputClearButtonConfig;
  }
  let tmp7;
  if (null != inputRevealButtonConfig) {
    const obj5 = { trailing: null, trailingPressableProps: null };
    ({ content: obj4.trailing, pressableProps: obj4.trailingPressableProps } = inputRevealButtonConfig);
    tmp7 = obj5;
  }
  const tmp2Result = useInputAttachments;
  const inputAttachments = tmp2Result.useInputAttachments(merged, tmp7);
  ({ leading, trailing, inputStyle } = inputAttachments);
  const BaseTextField = tmp2(7195).BaseTextField;
  const merged1 = Object.assign(inputProps);
  return <BaseTextField ref={innerRef} leading={leading} trailing={trailing} inputStyle={inputStyle} />;
}
