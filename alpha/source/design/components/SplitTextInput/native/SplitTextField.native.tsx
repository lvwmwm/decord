// Module ID: 6648
// Function ID: 6649
// Name: SplitTextField
// Dependencies: [109, 19, 17, 21, 558, 576, 6300, 6293, 6294, 6298, 6302, 2]

// Module 6648 (SplitTextField)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useTextField from "useTextField" /* 6293 */;
import useInputClearButton from "useInputClearButton" /* 6294 */;
import useInputAttachments from "useInputAttachments" /* 6298 */;
import InputFieldContainer from "InputFieldContainer" /* 6300 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_2 = ["ref"];
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SplitTextField(ref) {
  let innerRef;
  let inputProps;
  let inputStyle;
  let state;
  let tmp4;
  let tmp5;
  let tmpResult8;
  let trailing;
  let obj = react2;
  const cResult = obj.c(19);
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
  if (cResult[3] === tmp4.round) {
    let tmp9;
    let tmp13;
    if (cResult[4] === tmp4.size) {
      tmp9 = cResult[5];
    }
    const tmpResult = InputFieldContainer;
    const inputStyles = tmpResult.useInputStyles(tmp9);
    const tmpResult5 = useTextField;
    const textField = tmpResult5.useTextField(tmp4, tmp5);
    ({ innerRef, inputProps, state } = textField);
    const tmpResult6 = useInputClearButton;
    const inputClearButtonConfig = tmpResult6.useInputClearButtonConfig(tmp4, state);
    if (cResult[6] !== inputClearButtonConfig) {
      let tmp15;
      if (null != inputClearButtonConfig) {
        const obj2 = { trailing: null, trailingPressableProps: null };
        ({ content: obj6.trailing, pressableProps: obj6.trailingPressableProps } = inputClearButtonConfig);
        tmp15 = obj2;
      }
      cResult[6] = inputClearButtonConfig;
      cResult[7] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[7];
    }
    const tmpResult7 = useInputAttachments;
    const inputAttachments = tmpResult7.useInputAttachments(tmp4, tmp13);
    ({ trailing, inputStyle } = inputAttachments);
    if (cResult[8] === (null != tmp4.leadingText && tmp4.leadingText.length > 0)) {
      if (cResult[9] === tmp4.leadingPressableProps) {
        if (cResult[10] === tmp4.leadingText) {
          let tmp19;
          if (cResult[11] === inputStyles) {
            tmp19 = cResult[12];
          }
          if (cResult[13] === inputStyle) {
            if (cResult[14] === innerRef) {
              if (cResult[15] === inputProps) {
                if (cResult[16] === tmp19) {
                  let tmp26;
                  if (cResult[17] === trailing) {
                    tmp26 = cResult[18];
                  }
                  return tmp26;
                }
              }
            }
          }
          const BaseTextField = tmp(6302).BaseTextField;
          const merged = Object.assign(inputProps);
          const tmp31 = <BaseTextField ref={innerRef} leading={tmp19} trailing={trailing} inputStyle={inputStyle} />;
          cResult[13] = inputStyle;
          cResult[14] = innerRef;
          cResult[15] = inputProps;
          cResult[16] = tmp19;
          cResult[17] = trailing;
          cResult[18] = tmp31;
          tmp26 = tmp31;
        }
      }
    }
    let tmp20 = null;
    if (null != tmp4.leadingText && tmp4.leadingText.length > 0) {
      ({
        style(pressed) {
              let obj;
              if (pressed.pressed) {
                obj = { opacity: 0.2 };
              }
              const items = [obj];
              return items;
            },
        children: tmpResult8.renderInputAttachment(undefined, tmp4.leadingText, inputStyles.text)
      });
      const merged1 = Object.assign(tmp4.leadingPressableProps);
      tmp20 = <hasOwnProperty style={inputStyles.splitBorder}>{null}</hasOwnProperty>;
      tmpResult8 = useInputAttachments;
    }
    cResult[8] = null != tmp4.leadingText && tmp4.leadingText.length > 0;
    cResult[9] = tmp4.leadingPressableProps;
    cResult[10] = tmp4.leadingText;
    cResult[11] = inputStyles;
    cResult[12] = tmp20;
    tmp19 = tmp20;
  }
  const obj7 = { size: tmp4.size, round: tmp4.round };
  cResult[3] = tmp4.round;
  cResult[4] = tmp4.size;
  cResult[5] = obj7;
  tmp9 = obj7;
}) : (function SplitTextField(ref) {
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
      tmp9 = <hasOwnProperty style={inputStyles.splitBorder}>{null}</hasOwnProperty>;
      tmp2Result2 = useInputAttachments;
    }
  }
  const BaseTextField = tmp2(6302).BaseTextField;
  const merged2 = Object.assign(inputProps);
  return <BaseTextField ref={innerRef} leading={tmp9} trailing={trailing} inputStyle={inputStyle} />;
});
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export const SplitTextField = tmp4;
