// Module ID: 14502
// Function ID: 14503
// Name: Slider
// Dependencies: [32, 19, 17, 21, 4913, 575, 4974, 10970, 5129, 5130, 5078, 14503, 14504, 1378, 2]
// Exports: Slider, useLatestSliderValue

// Module 14502 (Slider)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5129 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5130 */;
import _modDef10970 from "module_10970" /* 10970 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexGrow: 1, flexDirection: "row", alignItems: "center" }, disabled: { opacity: 0.5 }, slider: { flex: 1 }, minimumTrackTintColor: obj2, maximumTrackTintColor: obj3, startIcon: obj4, endIcon: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.SLIDER_INDICATOR_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
obj4 = { marginRight: nativeDefault.space.PX_8 };
obj5 = { marginLeft: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export function useLatestSliderValue(value, defaultValue, minValue) {
  let tmp3;
  let tmp4;
  let tmp = value;
  const useState = react.useState;
  const obj = react;
  if (value == null) {
    tmp = defaultValue;
  }
  if (tmp == null) {
    tmp = minValue;
  }
  [tmp3, tmp4] = useState(tmp);
  _slicedToArray(useState(tmp), 2);
  const tmp5 = _slicedToArray(obj.useState(value), 2);
  if (value !== tmp5[0]) {
    tmp5[1](value);
    if (null != value) {
      tmp4(value);
    }
  }
  const items = [tmp3, tmp4];
  return items;
}
export function Slider(maxValue) {
  let accessibilityHint;
  let accessibilityLabel;
  let closure_3;
  let closure_4;
  let defaultValue;
  let disabled;
  let endIcon;
  let first;
  let first2;
  let fn;
  let formatValue;
  let items2;
  let minValue;
  let startIcon;
  let testID;
  let tmp11;
  let tmp12;
  let tmp26;
  let tmp2Result3;
  let value;
  ({ value, defaultValue, minValue } = maxValue);
  if (minValue === undefined) {
    minValue = 0;
  }
  let num = maxValue.maxValue;
  if (num === undefined) {
    num = 100;
  }
  const step = maxValue.step;
  ({ onChange: importDefault, onChangeEnd: dependencyMap, formatValue, disabled, startIcon, endIcon } = maxValue);
  _slicedToArray = undefined;
  react = undefined;
  ({ accessibilityLabel, accessibilityHint, testID } = maxValue);
  const tmp = closure_8();
  const tmp2 = step;
  let obj = step(4974);
  const theme = obj.useThemeContext().theme;
  [first, _slicedToArray] = react.useState(false);
  let tmp7 = defaultValue;
  const useState = react.useState;
  if (defaultValue == null) {
    tmp7 = minValue;
  }
  let tmp9 = value;
  const first1 = tmp4(useState(tmp7), 1)[0];
  const useState2 = obj2.useState;
  if (value == null) {
    tmp9 = defaultValue;
  }
  if (tmp9 == null) {
    tmp9 = minValue;
  }
  [tmp11, tmp12] = useState2(tmp9);
  _slicedToArray(useState2(tmp9), 2);
  const tmp4Result3 = _slicedToArray(react.useState(value), 2);
  if (value !== tmp4Result3[0]) {
    tmp4Result3[1](value);
    if (null != value) {
      tmp12(value);
    }
  }
  const items = [tmp11, tmp12];
  [first2, react] = items;
  let num2 = 16;
  if (first) {
    num2 = 16;
    if (!disabled) {
      num2 = 20;
    }
  }
  const items1 = [tmp.container, ];
  let disabled1 = null;
  const tmp18 = closure_7;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  const obj3 = { style: items1, children: items2 };
  items1[1] = disabled1;
  let tmp21 = null;
  if (null != startIcon) {
    const obj4 = { style: tmp.startIcon, children: startIcon };
    tmp21 = closure_6(tmp19, obj4);
  }
  items2 = [tmp21, , ];
  const obj5 = {
    style: tmp.slider,
    value,
    minimumValue: minValue,
    maximumValue: num,
    step,
    disabled,
    onValueChange: function handleValueChange(arg0) {
      if (null != step) {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      }
      closure_4(arg0);
      if (importDefault != null) {
        importDefault(arg0);
      }
    },
    onSlidingStart() {
      return closure_3(true);
    },
    onSlidingComplete: function handleSlidingComplete(arg0) {
      closure_3(false);
      if (dependencyMap != null) {
        tmp2(arg0);
      }
    },
    thumbImage: tmp2Result3,
    thumbSize: 1.625 * num2,
    minimumTrackTintColor: tmp.minimumTrackTintColor.backgroundColor,
    maximumTrackTintColor: tmp.maximumTrackTintColor.backgroundColor,
    tapToSeek: true,
    accessibilityLabel,
    accessibilityHint,
    accessibilityValue: tmp26,
    testID,
    onResponderGrant: fn
  };
  const tmp24 = _modDef10970;
  if (value == null) {
    value = first1;
  }
  const tmp2Result = tmp2(5078);
  if (tmp2Result.isThemeDark(theme)) {
    tmp2Result3 = tmp2(14503);
  } else {
    tmp2Result3 = tmp2(14504);
  }
  tmp26 = undefined;
  if (null != formatValue) {
    tmp26 = { text: formatValue(first2) };
    const obj6 = { text: formatValue(first2) };
  }
  fn = undefined;
  const tmp2Result4 = tmp2(1378);
  if (tmp2Result4.isAndroid()) {
    fn = () => true;
  }
  items2[1] = closure_6(tmp24, obj5);
  let tmp23Result = null;
  if (null != endIcon) {
    const obj7 = { style: tmp.endIcon, children: endIcon };
    tmp23Result = tmp23(tmp19, obj7);
  }
  items2[2] = tmp23Result;
  return tmp18(View, obj3);
}
