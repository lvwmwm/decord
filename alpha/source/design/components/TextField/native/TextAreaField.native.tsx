// Module ID: 6764
// Function ID: 6765
// Name: TextAreaField
// Dependencies: [109, 19, 17, 21, 5090, 587, 558, 576, 6292, 6288, 4780, 1126, 6765, 6609, 6295, 5086, 2]

// Module 6764 (TextAreaField)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 4780 */;
import useTextField from "useTextField" /* 6288 */;
import InputFieldContainer2 from "InputFieldContainer" /* 6292 */;
import _objectWithoutProperties2 from "_objectWithoutProperties" /* 6609 */;
import useCharacterLimitAnnouncement2 from "useCharacterLimitAnnouncement" /* 6765 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let rect;
let closure_2 = ["ref"];
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { area: { height: 128, textAlignVertical: "top" }, maxLengthIndicator: rect };
rect = { position: "absolute", bottom: nativeDefault.space.PX_4, right: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TextAreaField(ref) {
  let Text;
  let diff;
  let focusProps;
  let formatToPlainStringResult;
  let innerRef;
  let inputProps;
  let isFocused;
  let items;
  let obj4;
  let state;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(27);
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
  if (cResult[3] !== tmp4.disabled) {
    const obj2 = { size: "lg", round: false, disabled: tmp4.disabled };
    cResult[3] = tmp4.disabled;
    cResult[4] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult = InputFieldContainer2;
  const inputStyles = tmpResult.useInputStyles(tmp9);
  const tmp11 = closure_7();
  const maxLength = tmp4.maxLength;
  const tmpResult7 = useTextField;
  const textField = tmpResult7.useTextField(tmp4, tmp5);
  ({ inputProps, innerRef, state } = textField);
  const tmpResult8 = native;
  const focus = tmpResult8.useFocus();
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const tmpResult9 = native;
  const nodeText = tmpResult9.getNodeText(tmp4.label);
  const length = state.value.length;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl4.t.c2Jqed);
    cResult[5] = stringResult;
    tmp16 = stringResult;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === maxLength) {
    let tmp18;
    if (cResult[7] === state.value.length) {
      tmp18 = cResult[8];
    }
    const tmpResult10 = useCharacterLimitAnnouncement2;
    const characterLimitAnnouncement = tmpResult10.useCharacterLimitAnnouncement(tmp18);
    const InputFieldContainer = tmp(6292).InputFieldContainer;
    if (cResult[9] === focusProps) {
      let tmp20;
      if (cResult[10] === inputProps) {
        tmp20 = cResult[11];
      }
      if (cResult[12] === inputStyles.padding) {
        if (cResult[13] === inputStyles.text) {
          let tmp23;
          if (cResult[14] === tmp11.area) {
            tmp23 = cResult[15];
          }
          if (cResult[16] === innerRef) {
            if (cResult[17] === inputStyles.placeholderText.color) {
              if (cResult[18] === tmp20) {
                let tmp24;
                if (cResult[19] === tmp23) {
                  tmp24 = cResult[20];
                }
                let tmp38Result = null;
                if (null != diff) {
                  let str3 = "text-muted";
                  let str = "text-muted";
                  const obj3 = { style: tmp11.maxLengthIndicator, children: hasOwnProperty(Text, obj4) };
                  Text = tmp(5086).Text;
                  const tmp39 = View;
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
                  obj4 = { variant: "text-xs/semibold", color: str, accessibilityLabel: formatToPlainStringResult, children: diff };
                  if (null != nodeText) {
                    const intl3 = tmp(1126).intl;
                    const obj5 = { label: nodeText, remainingCharacters: diff };
                    formatToPlainStringResult = intl3.formatToPlainString(tmp(1126).t["8Q+k1s"], obj5);
                  } else {
                    const intl2 = tmp(1126).intl;
                    const obj6 = { remainingCharacters: diff };
                    formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.fR1cof, obj6);
                  }
                  tmp38Result = tmp38(tmp39, obj3);
                }
                if (cResult[21] === InputFieldContainer) {
                  if (cResult[22] === isFocused) {
                    if (cResult[23] === tmp4) {
                      if (cResult[24] === tmp24) {
                        let tmp32;
                        if (cResult[25] === tmp38Result) {
                          tmp32 = cResult[26];
                        }
                        return tmp32;
                      }
                    }
                  }
                }
                const obj7 = { isFocused, children: items };
                const merged = Object.assign(tmp4);
                items = [tmp24, tmp38Result];
                const tmp37 = metroRequire(InputFieldContainer, obj7);
                cResult[21] = InputFieldContainer;
                cResult[22] = isFocused;
                cResult[23] = tmp4;
                cResult[24] = tmp24;
                cResult[25] = tmp38Result;
                cResult[26] = tmp37;
                tmp32 = tmp37;
              }
            }
          }
          const obj8 = { ref: innerRef, style: tmp23, placeholderTextColor: inputStyles.placeholderText.color, multiline: true };
          const NativeTextInput = tmp(6295).NativeTextInput;
          const merged1 = Object.assign(tmp20);
          const tmp29 = hasOwnProperty(NativeTextInput, obj8);
          cResult[16] = innerRef;
          cResult[17] = inputStyles.placeholderText.color;
          cResult[18] = tmp20;
          cResult[19] = tmp23;
          cResult[20] = tmp29;
          tmp24 = tmp29;
        }
      }
      const items1 = [, , ];
      ({ padding: arr[0], text: arr[1] } = inputStyles);
      items1[2] = tmp11.area;
      cResult[12] = inputStyles.padding;
      cResult[13] = inputStyles.text;
      cResult[14] = tmp11.area;
      cResult[15] = items1;
      tmp23 = items1;
    }
    const propsForNativeTextInput = _objectWithoutProperties2.propsForNativeTextInput;
    _objectWithoutProperties2;
    const tmpResult12 = native;
    const result = propsForNativeTextInput(tmpResult12.mergeProps(inputProps, focusProps));
    cResult[9] = focusProps;
    cResult[10] = inputProps;
    cResult[11] = result;
    tmp20 = result;
  }
  const obj9 = { currentLength: length, maxLength, message: tmp16 };
  cResult[6] = maxLength;
  cResult[7] = state.value.length;
  cResult[8] = obj9;
  tmp18 = obj9;
}) : (function TextAreaField(ref) {
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
  const tmp5 = closure_7();
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
  intl = tmp2(1126).intl;
  const characterLimitAnnouncement = useCharacterLimitAnnouncement(obj5);
  const obj6 = { isFocused, children: items1 };
  const InputFieldContainer = tmp2(6292).InputFieldContainer;
  const merged1 = Object.assign(merged);
  const obj7 = { ref: innerRef, style: items, placeholderTextColor: inputStyles.placeholderText.color, multiline: true };
  const NativeTextInput = tmp2(6295).NativeTextInput;
  const propsForNativeTextInput = _objectWithoutProperties2.propsForNativeTextInput;
  _objectWithoutProperties2;
  const tmp2Result6 = native;
  const merged2 = Object.assign(propsForNativeTextInput(tmp2Result6.mergeProps(inputProps, focusProps)));
  items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp5.area;
  items1 = [hasOwnProperty(NativeTextInput, obj7), ];
  let tmp14Result = null;
  const tmp12 = metroRequire;
  if (null != diff) {
    let str3 = "text-muted";
    let str = "text-muted";
    const obj8 = { style: tmp5.maxLengthIndicator, children: hasOwnProperty(Text, obj9) };
    Text = tmp2(5086).Text;
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
      const intl3 = tmp2(1126).intl;
      const obj10 = { label: nodeText, remainingCharacters: diff };
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1126).t["8Q+k1s"], obj10);
    } else {
      const intl2 = tmp2(1126).intl;
      const obj11 = { remainingCharacters: diff };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1126).t.fR1cof, obj11);
    }
    tmp14Result = tmp14(tmp19, obj8);
  }
  items1[1] = tmp14Result;
  return tmp12(InputFieldContainer, obj6);
});
let result = size.fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TEXT_AREA_HEIGHT = 128;
export const TextAreaField = tmp4;
