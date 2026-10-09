// Module ID: 6294
// Function ID: 6295
// Name: TextField
// Dependencies: [109, 19, 21, 558, 576, 6295, 6296, 6297, 6301, 2]

// Module 6294 (TextField)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useTextField from "useTextField" /* 6295 */;
import useInputClearButton from "useInputClearButton" /* 6296 */;
import useInputAttachments from "useInputAttachments" /* 6297 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["ref"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function TextField(ref) {
  let innerRef;
  let inputProps;
  let inputStyle;
  let leading;
  let state;
  let tmp11;
  let tmp4;
  let tmp5;
  let trailing;
  const obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_2);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = useTextField;
  const textField = tmpResult.useTextField(tmp4, tmp5);
  ({ innerRef, inputProps, state } = textField);
  const tmpResult3 = useInputClearButton;
  const inputClearButtonConfig = tmpResult3.useInputClearButtonConfig(tmp4, state);
  if (cResult[3] !== inputClearButtonConfig) {
    let tmp13;
    if (null != inputClearButtonConfig) {
      const obj2 = { trailing: null, trailingPressableProps: null };
      ({ content: obj4.trailing, pressableProps: obj4.trailingPressableProps } = inputClearButtonConfig);
      tmp13 = obj2;
    }
    cResult[3] = inputClearButtonConfig;
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  const tmpResult4 = useInputAttachments;
  const inputAttachments = tmpResult4.useInputAttachments(tmp4, tmp11);
  ({ leading, trailing, inputStyle } = inputAttachments);
  if (cResult[5] === inputStyle) {
    if (cResult[6] === innerRef) {
      if (cResult[7] === inputProps) {
        if (cResult[8] === leading) {
          let tmp15;
          if (cResult[9] === trailing) {
            tmp15 = cResult[10];
          }
          return tmp15;
        }
      }
    }
  }
  const BaseTextField = tmp(6301).BaseTextField;
  const merged = Object.assign(inputProps);
  const tmp17 = <BaseTextField ref={innerRef} leading={leading} trailing={trailing} inputStyle={inputStyle} />;
  cResult[5] = inputStyle;
  cResult[6] = innerRef;
  cResult[7] = inputProps;
  cResult[8] = leading;
  cResult[9] = trailing;
  cResult[10] = tmp17;
  tmp15 = tmp17;
}) : (function TextField(ref) {
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
  const BaseTextField = tmp2(6301).BaseTextField;
  const merged1 = Object.assign(inputProps);
  return <BaseTextField ref={innerRef} leading={leading} trailing={trailing} inputStyle={inputStyle} />;
});
const result = size.fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = tmp3;
