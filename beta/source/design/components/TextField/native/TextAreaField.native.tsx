// Module ID: 6507
// Function ID: 6508
// Name: TextAreaField
// Dependencies: [19, 17, 21, 4836, 576, 6039, 6032, 4533, 6508, 1115, 6042, 6356, 4832, 2]

// Module 6507 (TextAreaField)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 4533 */;
import useTextField from "useTextField" /* 6032 */;
import InputFieldContainer2 from "InputFieldContainer" /* 6039 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 6356 */;
import useCharacterLimitAnnouncement2 from "useCharacterLimitAnnouncement" /* 6508 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let rect;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { area: { height: 128, textAlignVertical: "top" }, maxLengthIndicator: rect };
rect = { position: "absolute", bottom: nativeDefault.space.PX_4, right: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const forwardRefResult = react.forwardRef((disabled, ref) => {
  let Text;
  let focusProps;
  let formatToPlainStringResult;
  let innerRef;
  let inputProps;
  let intl;
  let isFocused;
  let items;
  let items1;
  let obj9;
  let state;
  const obj = InputFieldContainer2;
  const obj2 = { size: "lg", round: false, disabled: disabled.disabled };
  const inputStyles = obj.useInputStyles(obj2);
  const tmp4 = closure_5();
  const maxLength = disabled.maxLength;
  const obj3 = useTextField;
  const textField = obj3.useTextField(disabled, ref);
  ({ state, inputProps, innerRef } = textField);
  const obj4 = native;
  const focus = obj4.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const tmpResult = native;
  const nodeText = tmpResult.getNodeText(disabled.label);
  const obj5 = { currentLength: state.value.length, maxLength, message: intl.string(intl4.t.c2Jqed) };
  const useCharacterLimitAnnouncement = useCharacterLimitAnnouncement2.useCharacterLimitAnnouncement;
  useCharacterLimitAnnouncement2;
  intl = tmp(1115).intl;
  const characterLimitAnnouncement = useCharacterLimitAnnouncement(obj5);
  const obj6 = { isFocused, children: items1 };
  const InputFieldContainer = tmp(6039).InputFieldContainer;
  const merged = Object.assign(disabled);
  const obj7 = { ref: innerRef, style: items, placeholderTextColor: inputStyles.placeholderText.color, multiline: true };
  const NativeTextInput = tmp(6042).NativeTextInput;
  const propsForNativeTextInput = _objectWithoutProperties.propsForNativeTextInput;
  _objectWithoutProperties;
  const tmpResult6 = native;
  const merged1 = Object.assign(propsForNativeTextInput(tmpResult6.mergeProps(inputProps, focusProps)));
  items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp4.area;
  items1 = [_false(NativeTextInput, obj7), ];
  let tmp13Result = null;
  const tmp11 = React3;
  if (null != diff) {
    let str3 = "text-muted";
    let str = "text-muted";
    const obj8 = { style: tmp4.maxLengthIndicator, children: _false(Text, obj9) };
    Text = tmp(4832).Text;
    const tmp18 = View;
    if (null != maxLength) {
      str = str3;
      if (null != diff) {
        let str2 = "text-feedback-critical";
        if (diff > 0) {
          if (diff < maxLength / 9) {
            str3 = "text-feedback-warning";
          }
          str2 = str3;
        }
        str = str2;
      }
    }
    obj9 = { variant: "text-xs/semibold", color: str, accessibilityLabel: formatToPlainStringResult, children: diff };
    if (null != nodeText) {
      const intl3 = tmp(1115).intl;
      const obj10 = { label: nodeText, remainingCharacters: diff };
      formatToPlainStringResult = intl3.formatToPlainString(tmp(1115).t["8Q+k1s"], obj10);
    } else {
      const intl2 = tmp(1115).intl;
      const obj11 = { remainingCharacters: diff };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1115).t.fR1cof, obj11);
    }
    tmp13Result = tmp13(tmp18, obj8);
  }
  items1[1] = tmp13Result;
  return tmp11(InputFieldContainer, obj6);
});
const result = size.fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TextAreaField = forwardRefResult;
