// Module ID: 8521
// Function ID: 8522
// Name: InputButton
// Dependencies: [109, 19, 17, 21, 5090, 587, 558, 576, 5380, 6292, 5376, 2]

// Module 8521 (InputButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ButtonConstants from "ButtonConstants" /* 5380 */;
import InputFieldContainer from "InputFieldContainer" /* 6292 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let tmp6;
const BaseTextButton2 = tmp6(5376);
let closure_2 = ["ref"];
let closure_3 = ["size", "round", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
let closure_4 = ["size", "round", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
const Text = react_native.Text;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" }, buttonTextPlaceholder: obj2, buttonTextValue: obj3 };
obj2 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function InputButton(ref) {
  let accessibilityLabel;
  let accessibilityValue;
  let icon;
  let iconPosition;
  let maxFontSizeMultiplier;
  let obj5;
  let round;
  let text;
  let value;
  const obj = react2;
  const cResult = obj.c(26);
  const tmp4 = _objectWithoutProperties(ref, closure_2);
  ({ size, round, text, value, icon, iconPosition, accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = tmp4);
  const tmp5 = _objectWithoutProperties(tmp4, closure_3);
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  let str2 = "start";
  const tmp6 = undefined !== round && round;
  if (undefined !== iconPosition) {
    str2 = iconPosition;
  }
  if (undefined === maxFontSizeMultiplier) {
    maxFontSizeMultiplier = tmp(5380).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const obj2 = { size: str, round: tmp6, hasLeadingIcon: "start" === str2 };
  const tmpResult = InputFieldContainer;
  const inputStyles = tmpResult.useInputStyles(obj2);
  const tmp9 = closure_8();
  if (null != icon) {
    let obj4;
    if ("start" === str2) {
      obj4 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
      const obj3 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
    } else {
      obj4 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
    }
    obj5 = obj4;
  } else {
    obj5 = {};
  }
  const BaseTextButton = tmp(5376).BaseTextButton;
  if (cResult[0] === inputStyles.padding) {
    let tmp10;
    if (cResult[1] === inputStyles.radius) {
      tmp10 = cResult[2];
    }
    if (accessibilityLabel == null) {
      let str1;
      if (text != null) {
        str1 = text.toString();
      }
      accessibilityLabel = str1;
    }
    if (cResult[3] === accessibilityValue) {
      let tmp12;
      if (cResult[4] === value) {
        tmp12 = cResult[5];
      }
      const tmp14 = null != value ? tmp9.buttonTextValue : tmp9.buttonTextPlaceholder;
      if (cResult[6] === inputStyles.text) {
        if (cResult[7] === tmp9.buttonText) {
          if (cResult[8] === tmp14) {
            let tmp15;
            if (cResult[9] === obj5) {
              tmp15 = cResult[10];
            }
            if (value == null) {
              value = text;
            }
            if (cResult[11] === maxFontSizeMultiplier) {
              if (cResult[12] === tmp15) {
                let tmp16;
                if (cResult[13] === value) {
                  tmp16 = cResult[14];
                }
                if (cResult[15] === BaseTextButton) {
                  if (cResult[16] === tmp5) {
                    if (cResult[17] === icon) {
                      if (cResult[18] === str2) {
                        if (cResult[19] === ref.ref) {
                          if (cResult[20] === str) {
                            if (cResult[21] === tmp16) {
                              if (cResult[22] === tmp10) {
                                if (cResult[23] === accessibilityLabel) {
                                  let tmp20;
                                  if (cResult[24] === tmp12) {
                                    tmp20 = cResult[25];
                                  }
                                  return tmp20;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const merged = Object.assign(tmp5);
                const tmp25 = <BaseTextButton ref={arg0.ref} size={str} variant="tertiary" icon={icon} iconPosition={str2} pillStyle={tmp10} accessibilityLabel={accessibilityLabel} accessibilityValue={tmp12} textElement={tmp16} />;
                cResult[15] = BaseTextButton;
                cResult[16] = tmp5;
                cResult[17] = icon;
                cResult[18] = str2;
                cResult[19] = ref.ref;
                cResult[20] = str;
                cResult[21] = tmp16;
                cResult[22] = tmp10;
                cResult[23] = accessibilityLabel;
                cResult[24] = tmp12;
                cResult[25] = tmp25;
                tmp20 = tmp25;
              }
            }
            const tmp19 = <Text style={tmp15} numberOfLines={1} maxFontSizeMultiplier={maxFontSizeMultiplier}>{value}</Text>;
            cResult[11] = maxFontSizeMultiplier;
            cResult[12] = tmp15;
            cResult[13] = value;
            cResult[14] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
      const items = [inputStyles.text, tmp9.buttonText, tmp14, obj5];
      cResult[6] = inputStyles.text;
      cResult[7] = tmp9.buttonText;
      cResult[8] = tmp14;
      cResult[9] = obj5;
      cResult[10] = items;
      tmp15 = items;
    }
    let tmp13 = accessibilityValue;
    if (accessibilityValue == null) {
      tmp13 = { text: value };
      const obj8 = { text: value };
    }
    cResult[3] = accessibilityValue;
    cResult[4] = value;
    cResult[5] = tmp13;
    tmp12 = tmp13;
  }
  const items1 = [, ];
  ({ padding: arr[0], radius: arr[1] } = inputStyles);
  cResult[0] = inputStyles.padding;
  cResult[1] = inputStyles.radius;
  cResult[2] = items1;
  tmp10 = items1;
}) : (function InputButton(ref) {
  let accessibilityLabel;
  let accessibilityValue;
  let icon;
  let iconPosition;
  let maxFontSizeMultiplier;
  let obj5;
  let text;
  let value;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  size = merged.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  const round = merged.round;
  const tmp2 = undefined !== round && round;
  ({ text, value, icon, iconPosition } = merged);
  let str2 = "start";
  if (undefined !== iconPosition) {
    str2 = iconPosition;
  }
  ({ accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = merged);
  if (undefined === maxFontSizeMultiplier) {
    maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const obj2 = { size: str, round: tmp2, hasLeadingIcon: "start" === str2 };
  const tmp5 = _objectWithoutProperties(merged, closure_4);
  const obj = InputFieldContainer;
  const inputStyles = obj.useInputStyles(obj2);
  const tmp10 = closure_8();
  if (null != icon) {
    let obj4;
    if ("start" === str2) {
      obj4 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
      const obj3 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
    } else {
      obj4 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
    }
    obj5 = obj4;
  } else {
    obj5 = {};
  }
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  const merged1 = Object.assign(tmp5);
  const items = [, ];
  ({ padding: arr[0], radius: arr[1] } = inputStyles);
  if (accessibilityLabel == null) {
    let str1;
    if (text != null) {
      str1 = text.toString();
    }
    accessibilityLabel = str1;
  }
  if (accessibilityValue == null) {
    accessibilityValue = { text: value };
    const obj7 = { text: value };
  }
  const items1 = [inputStyles.text, tmp10.buttonText, , ];
  items1[2] = null != value ? tmp10.buttonTextValue : tmp10.buttonTextPlaceholder;
  items1[3] = obj5;
  if (value == null) {
    value = text;
  }
  return <BaseTextButton ref={ref} size={str} variant="tertiary" icon={icon} iconPosition={str2} pillStyle={items} accessibilityLabel={accessibilityLabel} accessibilityValue={accessibilityValue} textElement={<tmp14 style={items1} numberOfLines={1} maxFontSizeMultiplier={maxFontSizeMultiplier}>{value}</tmp14>} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export const InputButton = tmp4;
