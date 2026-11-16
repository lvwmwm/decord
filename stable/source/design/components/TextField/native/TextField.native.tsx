// Module ID: 7188
// Function ID: 7189
// Name: TextField
// Dependencies: [19, 21, 7189, 7190, 7194, 7199, 7203, 2]
// Exports: TextField

// Module 7188 (TextField)
import Fragment from "Fragment" /* 21 */;
import useTextField from "useTextField" /* 7189 */;
import useInputClearButton from "useInputClearButton" /* 7190 */;
import useInputRevealButton from "useInputRevealButton" /* 7194 */;
import useInputAttachments from "useInputAttachments" /* 7199 */;
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
  const BaseTextField = tmp2(7203).BaseTextField;
  const merged1 = Object.assign(inputProps);
  return <BaseTextField ref={innerRef} leading={leading} trailing={trailing} inputStyle={inputStyle} />;
}
