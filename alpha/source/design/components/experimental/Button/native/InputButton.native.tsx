// Module ID: 8996
// Function ID: 8997
// Name: InputButton
// Dependencies: [109, 19, 17, 21, 5014, 575, 5640, 7097, 5635, 2]
// Exports: InputButton

// Module 8996 (InputButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ButtonConstants from "ButtonConstants" /* 5640 */;
import InputFieldContainer from "InputFieldContainer" /* 7097 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let tmp6;
const BaseTextButton2 = tmp6(5635);
let closure_2 = ["size", "round", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
const Text = react_native.Text;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" }, buttonTextPlaceholder: obj2, buttonTextValue: obj3 };
obj2 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_6 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export function InputButton(ref) {
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
  const tmp5 = _objectWithoutProperties(merged, closure_2);
  const obj = InputFieldContainer;
  const inputStyles = obj.useInputStyles(obj2);
  const tmp10 = closure_6();
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
}
