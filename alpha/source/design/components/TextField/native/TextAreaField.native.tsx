// Module ID: 7248
// Function ID: 7249
// Name: TextAreaField
// Dependencies: [19, 17, 21, 5009, 575, 7091, 7084, 5182, 7249, 1114, 7094, 7097, 5619, 2]
// Exports: TextAreaField

// Module 7248 (TextAreaField)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import native from "native" /* 5182 */;
import useTextField from "useTextField" /* 7084 */;
import InputFieldContainer2 from "InputFieldContainer" /* 7091 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 7097 */;
import useCharacterLimitAnnouncement2 from "useCharacterLimitAnnouncement" /* 7249 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let rect;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { area: { height: 128, textAlignVertical: "top" }, maxLengthIndicator: rect };
rect = { position: "absolute", bottom: nativeDefault.space.PX_4, right: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TEXT_AREA_HEIGHT = 128;
export function TextAreaField(ref) {
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
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = InputFieldContainer2;
  const obj2 = { size: "lg", round: false, disabled: merged.disabled };
  const inputStyles = obj.useInputStyles(obj2);
  const tmp5 = closure_5();
  const maxLength = merged.maxLength;
  const obj3 = useTextField;
  const textField = obj3.useTextField(merged, ref);
  ({ state, inputProps, innerRef } = textField);
  const obj4 = native;
  const focus = obj4.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const tmp2Result = native;
  const nodeText = tmp2Result.getNodeText(merged.label);
  const obj5 = { currentLength: state.value.length, maxLength, message: intl.string(intl4.t.c2Jqed) };
  const useCharacterLimitAnnouncement = useCharacterLimitAnnouncement2.useCharacterLimitAnnouncement;
  useCharacterLimitAnnouncement2;
  intl = tmp2(1114).intl;
  const characterLimitAnnouncement = useCharacterLimitAnnouncement(obj5);
  const obj6 = { isFocused, children: items1 };
  const InputFieldContainer = tmp2(7091).InputFieldContainer;
  const merged1 = Object.assign(merged);
  const obj7 = { ref: innerRef, style: items, placeholderTextColor: inputStyles.placeholderText.color, multiline: true };
  const NativeTextInput = tmp2(7094).NativeTextInput;
  const propsForNativeTextInput = _objectWithoutProperties.propsForNativeTextInput;
  _objectWithoutProperties;
  const tmp2Result6 = native;
  const merged2 = Object.assign(propsForNativeTextInput(tmp2Result6.mergeProps(inputProps, focusProps)));
  items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp5.area;
  items1 = [_false(NativeTextInput, obj7), ];
  let tmp14Result = null;
  const tmp12 = React3;
  if (null != diff) {
    let str3 = "text-muted";
    let str = "text-muted";
    const obj8 = { style: tmp5.maxLengthIndicator, children: _false(Text, obj9) };
    Text = tmp2(5619).Text;
    const tmp19 = View;
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
      const intl3 = tmp2(1114).intl;
      const obj10 = { label: nodeText, remainingCharacters: diff };
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1114).t["8Q+k1s"], obj10);
    } else {
      const intl2 = tmp2(1114).intl;
      const obj11 = { remainingCharacters: diff };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.fR1cof, obj11);
    }
    tmp14Result = tmp14(tmp19, obj8);
  }
  items1[1] = tmp14Result;
  return tmp12(InputFieldContainer, obj6);
}
