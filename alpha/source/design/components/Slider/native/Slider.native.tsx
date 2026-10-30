// Module ID: 15813
// Function ID: 15814
// Name: Slider
// Dependencies: [32, 19, 17, 21, 5009, 575, 8843, 5255, 5256, 1376, 2]
// Exports: Slider, useLatestSliderValue

// Module 15813 (Slider)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5256 */;
import _modDef8843 from "module_8843" /* 8843 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexGrow: 1, flexDirection: "row", alignItems: "center" }, slider: { flex: 1 }, minimumTrackTintColor: obj2, maximumTrackTintColor: obj3, startIcon: obj4, endIcon: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
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
  let closure_2;
  let defaultValue;
  let disabled;
  let endIcon;
  let fn;
  let formatValue;
  let items1;
  let minValue;
  let onChangeEnd;
  let startIcon;
  let testID;
  let tmp21;
  let tmp7;
  let tmp8;
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
  ({ onChange: importDefault, formatValue, startIcon, endIcon } = maxValue);
  dependencyMap = undefined;
  ({ onChangeEnd, disabled, accessibilityLabel, accessibilityHint, testID } = maxValue);
  const tmp = closure_8();
  let obj = react;
  let tmp2 = defaultValue;
  const useState = react.useState;
  if (defaultValue == null) {
    tmp2 = minValue;
  }
  let tmp5 = value;
  const first = _slicedToArray(useState(tmp2), 1)[0];
  const useState2 = obj.useState;
  if (value == null) {
    tmp5 = defaultValue;
  }
  if (tmp5 == null) {
    tmp5 = minValue;
  }
  [tmp7, tmp8] = _slicedToArray(useState2(tmp5), 2);
  _slicedToArray(useState2(tmp5), 2);
  const tmp3Result3 = _slicedToArray(obj.useState(value), 2);
  if (value !== tmp3Result3[0]) {
    tmp3Result3[1](value);
    if (null != value) {
      tmp8(value);
    }
  }
  const items = [tmp7, tmp8];
  const tmp3Result4 = _slicedToArray(items, 2);
  dependencyMap = tmp3Result4[1];
  let tmp16 = null;
  const first1 = tmp3Result4[0];
  const obj2 = { style: tmp.container, children: items1 };
  const tmp14 = closure_7;
  if (null != startIcon) {
    const obj3 = { style: tmp.startIcon, children: startIcon };
    tmp16 = closure_6(tmp15, obj3);
  }
  items1 = [tmp16, , ];
  const obj4 = {
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
      closure_2(arg0);
      if (importDefault != null) {
        importDefault(arg0);
      }
    },
    onSlidingComplete: onChangeEnd,
    minimumTrackTintColor: tmp.minimumTrackTintColor.backgroundColor,
    maximumTrackTintColor: tmp.maximumTrackTintColor.backgroundColor,
    tapToSeek: true,
    accessibilityLabel,
    accessibilityHint,
    accessibilityValue: tmp21,
    testID,
    onResponderGrant: fn
  };
  const tmp20 = _modDef8843;
  if (value == null) {
    value = first;
  }
  tmp21 = undefined;
  if (null != formatValue) {
    tmp21 = { text: formatValue(first1) };
    const obj5 = { text: formatValue(first1) };
  }
  fn = undefined;
  const obj6 = step(1376);
  if (obj6.isAndroid()) {
    fn = () => true;
  }
  items1[1] = closure_6(tmp20, obj4);
  let tmp18Result = null;
  if (null != endIcon) {
    const obj7 = { style: tmp.endIcon, children: endIcon };
    tmp18Result = tmp18(tmp15, obj7);
  }
  items1[2] = tmp18Result;
  return tmp14(View, obj2);
}
