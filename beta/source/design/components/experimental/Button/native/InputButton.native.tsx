// Module ID: 8374
// Function ID: 8375
// Name: InputButton
// Dependencies: [109, 19, 17, 21, 4836, 576, 5286, 6039, 5282, 2]

// Module 8374 (InputButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import InputFieldContainer from "InputFieldContainer" /* 6039 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let tmp5;
const BaseTextButton2 = tmp5(5282);
let closure_2 = ["size", "round", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
const Text = react_native.Text;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" }, buttonTextPlaceholder: obj2, buttonTextValue: obj3 };
obj2 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_6 = createStyles(obj);
const forwardRefResult = react.forwardRef((size, ref) => {
  let accessibilityLabel;
  let accessibilityValue;
  let icon;
  let iconPosition;
  let maxFontSizeMultiplier;
  let obj5;
  let text;
  let value;
  size = size.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  const round = size.round;
  const tmp = undefined !== round && round;
  ({ text, value, icon, iconPosition } = size);
  let str2 = "start";
  if (undefined !== iconPosition) {
    str2 = iconPosition;
  }
  ({ accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = size);
  if (undefined === maxFontSizeMultiplier) {
    maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const obj2 = { size: str, round: tmp, hasLeadingIcon: "start" === str2 };
  const tmp4 = _objectWithoutProperties(size, closure_2);
  const obj = InputFieldContainer;
  const inputStyles = obj.useInputStyles(obj2);
  const tmp9 = closure_6();
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
  const merged = Object.assign(tmp4);
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
  const items1 = [inputStyles.text, tmp9.buttonText, , ];
  items1[2] = null != value ? tmp9.buttonTextValue : tmp9.buttonTextPlaceholder;
  items1[3] = obj5;
  if (value == null) {
    value = text;
  }
  return <BaseTextButton ref={arg1} size={str} variant="tertiary" icon={icon} iconPosition={str2} pillStyle={items} accessibilityLabel={accessibilityLabel} accessibilityValue={accessibilityValue} textElement={<tmp13 style={items1} numberOfLines={1} maxFontSizeMultiplier={maxFontSizeMultiplier}>{value}</tmp13>} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export const InputButton = forwardRefResult;
