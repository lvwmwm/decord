// Module ID: 8188
// Function ID: 8189
// Name: FormSwitch
// Dependencies: [19, 17, 21, 5014, 575, 5253, 5021, 2]
// Exports: default

// Module 8188 (FormSwitch)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const Switch = react_native.Switch;
const jsx = Fragment.jsx;
let obj = { switch: { marginVertical: -5 }, track: obj2 };
obj2 = { color: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/void/Form/native/FormSwitch.tsx");

export default function FormSwitch(value) {
  let accessibilityHint;
  let accessibilityLabel;
  let accessible;
  let borderColor;
  let items;
  let onValueChange;
  let renderIosBackground;
  let style;
  let tmp11;
  value = value.value;
  const disabled = value.disabled;
  ({ borderColor, renderIosBackground } = value);
  let tmp3 = undefined !== renderIosBackground;
  ({ style, onValueChange, accessible, accessibilityLabel, accessibilityHint } = value);
  if (tmp3) {
    tmp3 = renderIosBackground;
  }
  const tmp4 = closure_5();
  let color = value.tintColor;
  const tmp7 = useThemeDefault();
  if (color == null) {
    color = tmp4.track.color;
  }
  if (null == borderColor) {
    const obj = shared;
    if (obj.isThemeDark(tmp7)) {
      borderColor = nativeDefault.unsafe_rawColors.PRIMARY_400;
    }
  }
  const obj2 = { accessible, trackColor: { true: color, false: borderColor }, ios_backgroundColor: tmp11, value: undefined !== value && value, disabled: undefined !== disabled && disabled, style: items, onValueChange, accessibilityState: { disabled: undefined !== disabled && disabled, selected: undefined !== value && value }, accessibilityLabel, accessibilityHint };
  tmp11 = undefined;
  const tmp10 = Switch;
  const tmp9 = jsx;
  if (false === (undefined !== value && value)) {
    if (tmp3) {
      tmp11 = borderColor;
    }
  }
  items = [tmp4.switch, style];
  return tmp9(tmp10, obj2);
};
