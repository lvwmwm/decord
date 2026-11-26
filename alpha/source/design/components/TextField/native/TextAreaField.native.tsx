// Module ID: 7441
// Function ID: 7442
// Name: TextAreaField
// Dependencies: [19, 17, 21, 5043, 575, 5607, 6124, 7294, 7282, 5208, 7442, 1112, 7297, 7300, 5634, 2]
// Exports: TextAreaField

// Module 7441 (TextAreaField)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1112 */;
import native from "native" /* 5208 */;
import useToken from "useToken" /* 5607 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 6124 */;
import useTextField from "useTextField" /* 7282 */;
import InputFieldContainer2 from "InputFieldContainer" /* 7294 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 7300 */;
import useCharacterLimitAnnouncement2 from "useCharacterLimitAnnouncement" /* 7442 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles(() => {
  let rect;
  let num = arg0;
  if (arg0 === undefined) {
    num = 128;
  }
  const obj = { area: { height: num, textAlignVertical: "top" }, maxLengthIndicator: rect };
  rect = { position: "absolute", bottom: nativeDefault.space.PX_4, right: nativeDefault.space.PX_16 };
  return obj;
});
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
  let obj7;
  let state;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = InputFieldContainer2;
  const obj2 = { size: "lg", round: false, disabled: merged.disabled };
  const inputStyles = obj.useInputStyles(obj2);
  let num = inputStyles.padding.paddingVertical;
  if (num == null) {
    num = 0;
  }
  const tmp2Result = useToken;
  const token = tmp2Result.useToken(nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_LG);
  const tmp2Result8 = useScaledTextLineHeight;
  const tmp6 = closure_6(Math.max(128, 5 * tmp2Result8.useScaledTextLineHeight(token) + 2 * num));
  const maxLength = merged.maxLength;
  const tmp2Result9 = useTextField;
  const textField = tmp2Result9.useTextField(merged, ref);
  ({ state, inputProps, innerRef } = textField);
  const tmp2Result10 = native;
  const focus = tmp2Result10.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const tmp2Result11 = native;
  const nodeText = tmp2Result11.getNodeText(merged.label);
  const obj3 = { currentLength: state.value.length, maxLength, message: intl.string(intl4.t.c2Jqed) };
  const useCharacterLimitAnnouncement = useCharacterLimitAnnouncement2.useCharacterLimitAnnouncement;
  useCharacterLimitAnnouncement2;
  intl = tmp2(1112).intl;
  const characterLimitAnnouncement = useCharacterLimitAnnouncement(obj3);
  const obj4 = { isFocused, children: items1 };
  const InputFieldContainer = tmp2(7294).InputFieldContainer;
  const merged1 = Object.assign(merged);
  const obj5 = { ref: innerRef, style: items, placeholderTextColor: inputStyles.placeholderText.color, multiline: true };
  const NativeTextInput = tmp2(7297).NativeTextInput;
  const propsForNativeTextInput = _objectWithoutProperties.propsForNativeTextInput;
  _objectWithoutProperties;
  const tmp2Result14 = native;
  const merged2 = Object.assign(propsForNativeTextInput(tmp2Result14.mergeProps(inputProps, focusProps)));
  items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp6.area;
  items1 = [React3(NativeTextInput, obj5), ];
  let tmp15Result = null;
  const tmp13 = hasOwnProperty;
  if (null != diff) {
    let str3 = "text-muted";
    let str = "text-muted";
    const obj6 = { style: tmp6.maxLengthIndicator, children: React3(Text, obj7) };
    Text = tmp2(5634).Text;
    const tmp20 = View;
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
    obj7 = { variant: "body-xs/semibold", color: str, accessibilityLabel: formatToPlainStringResult, children: diff };
    if (null != nodeText) {
      const intl3 = tmp2(1112).intl;
      const obj8 = { label: nodeText, remainingCharacters: diff };
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1112).t["8Q+k1s"], obj8);
    } else {
      const intl2 = tmp2(1112).intl;
      const obj9 = { remainingCharacters: diff };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1112).t.fR1cof, obj9);
    }
    tmp15Result = tmp15(tmp20, obj6);
  }
  items1[1] = tmp15Result;
  return tmp13(InputFieldContainer, obj4);
}
