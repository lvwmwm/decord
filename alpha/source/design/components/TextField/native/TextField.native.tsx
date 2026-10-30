// Module ID: 7083
// Function ID: 7084
// Name: TextField
// Dependencies: [19, 21, 7084, 7085, 7089, 7093, 2]
// Exports: TextField

// Module 7083 (TextField)
import Fragment from "Fragment" /* 21 */;
import useTextField from "useTextField" /* 7084 */;
import useInputClearButton from "useInputClearButton" /* 7085 */;
import useInputAttachments from "useInputAttachments" /* 7089 */;
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
  ({ inputProps, innerRef, state } = textField);
  const obj2 = useInputClearButton;
  const inputClearButtonConfig = obj2.useInputClearButtonConfig(merged, state);
  let tmp6;
  if (null != inputClearButtonConfig) {
    const obj4 = { trailing: null, trailingPressableProps: null };
    ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
    tmp6 = obj4;
  }
  const tmp2Result = useInputAttachments;
  const inputAttachments = tmp2Result.useInputAttachments(merged, tmp6);
  ({ leading, trailing, inputStyle } = inputAttachments);
  const BaseTextField = tmp2(7093).BaseTextField;
  const merged1 = Object.assign(inputProps);
  return <BaseTextField ref={innerRef} leading={leading} trailing={trailing} inputStyle={inputStyle} />;
}
