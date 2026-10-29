// Module ID: 15773
// Function ID: 15774
// Name: Slider
// Dependencies: [32, 19, 17, 21, 5005, 587, 558, 576, 5249, 5250, 1381, 8809, 2]

// Module 15773 (Slider)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import HapticUtils from "HapticUtils" /* 5249 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5250 */;
import _modDef8809 from "module_8809" /* 8809 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useLatestSliderValue(arg0, arg1, arg2) {
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(2);
  let tmp2 = arg0;
  const useState = react.useState;
  const obj2 = react;
  if (arg0 == null) {
    tmp2 = arg1;
  }
  if (tmp2 == null) {
    tmp2 = arg2;
  }
  [tmp4, tmp5] = useState(tmp2);
  _slicedToArray(useState(tmp2), 2);
  const tmp6 = _slicedToArray(obj2.useState(arg0), 2);
  if (arg0 !== tmp6[0]) {
    tmp6[1](arg0);
    if (null != arg0) {
      tmp5(arg0);
    }
  }
  if (cResult[0] !== tmp4) {
    const items = [tmp4, tmp5];
    cResult[0] = tmp4;
    cResult[1] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  return tmp9;
}) : (function useLatestSliderValue(arg0, arg1, arg2) {
  let tmp3;
  let tmp4;
  let tmp = arg0;
  const useState = react.useState;
  const obj = react;
  if (arg0 == null) {
    tmp = arg1;
  }
  if (tmp == null) {
    tmp = arg2;
  }
  [tmp3, tmp4] = useState(tmp);
  _slicedToArray(useState(tmp), 2);
  const tmp5 = _slicedToArray(obj.useState(arg0), 2);
  if (arg0 !== tmp5[0]) {
    tmp5[1](arg0);
    if (null != arg0) {
      tmp4(arg0);
    }
  }
  const items = [tmp3, tmp4];
  return items;
});
let closure_9 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function Slider(onChange) {
  let accessibilityHint;
  let accessibilityLabel;
  let closure_2;
  let defaultValue;
  let disabled;
  let endIcon;
  let formatValue;
  let items;
  let maxValue;
  let minValue;
  let onChangeEnd;
  let startIcon;
  let step;
  let testID;
  let tmp10;
  let tmp9;
  let value;
  let obj = step(576);
  const cResult = obj.c(34);
  const tmp = step;
  ({ value, defaultValue, minValue, maxValue, step } = onChange);
  onChange = onChange.onChange;
  ({ onChangeEnd, formatValue, disabled, startIcon, endIcon, accessibilityLabel, accessibilityHint, testID } = onChange);
  let num = 0;
  if (undefined !== minValue) {
    num = minValue;
  }
  let num2 = 100;
  if (undefined !== maxValue) {
    num2 = maxValue;
  }
  const tmp4 = closure_8();
  let tmp6 = defaultValue;
  const useState = react.useState;
  if (defaultValue == null) {
    tmp6 = num;
  }
  const first = _slicedToArray(useState(tmp6), 1)[0];
  [tmp9, tmp10] = closure_9(value, defaultValue, num);
  dependencyMap = tmp10;
  _slicedToArray(closure_9(value, defaultValue, num), 2);
  if (cResult[0] === onChange) {
    if (cResult[1] === tmp10) {
      let tmp11;
      if (cResult[2] === step) {
        tmp11 = cResult[3];
      }
      if (cResult[4] === startIcon) {
        let tmp12;
        if (cResult[5] === tmp4.startIcon) {
          tmp12 = cResult[6];
        }
        let tmp16 = value;
        if (value == null) {
          tmp16 = first;
        }
        if (cResult[7] === formatValue) {
          let tmp17;
          let tmp20;
          if (cResult[8] === tmp9) {
            tmp17 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            let fn;
            const tmpResult = tmp(1381);
            if (tmpResult.isAndroid()) {
              fn = () => true;
            }
            cResult[10] = fn;
            tmp20 = fn;
          } else {
            tmp20 = cResult[10];
          }
          if (cResult[11] === accessibilityHint) {
            if (cResult[12] === accessibilityLabel) {
              if (cResult[13] === disabled) {
                if (cResult[14] === tmp11) {
                  if (cResult[15] === num2) {
                    if (cResult[16] === num) {
                      if (cResult[17] === onChangeEnd) {
                        if (cResult[18] === step) {
                          if (cResult[19] === tmp4.maximumTrackTintColor.backgroundColor) {
                            if (cResult[20] === tmp4.minimumTrackTintColor.backgroundColor) {
                              if (cResult[21] === tmp4.slider) {
                                if (cResult[22] === tmp16) {
                                  if (cResult[23] === tmp17) {
                                    let tmp21;
                                    if (cResult[24] === testID) {
                                      tmp21 = cResult[25];
                                    }
                                    if (cResult[26] === endIcon) {
                                      let tmp25;
                                      if (cResult[27] === tmp4.endIcon) {
                                        tmp25 = cResult[28];
                                      }
                                      if (cResult[29] === tmp4.container) {
                                        if (cResult[30] === tmp12) {
                                          if (cResult[31] === tmp21) {
                                            let tmp29;
                                            if (cResult[32] === tmp25) {
                                              tmp29 = cResult[33];
                                            }
                                            return tmp29;
                                          }
                                        }
                                      }
                                      const obj2 = { style: tmp4.container, children: items };
                                      items = [tmp12, tmp21, tmp25];
                                      const tmp32 = closure_7(View, obj2);
                                      cResult[29] = tmp4.container;
                                      cResult[30] = tmp12;
                                      cResult[31] = tmp21;
                                      cResult[32] = tmp25;
                                      cResult[33] = tmp32;
                                      tmp29 = tmp32;
                                    }
                                    let tmp26 = null;
                                    if (null != endIcon) {
                                      const obj3 = { style: tmp4.endIcon, children: endIcon };
                                      tmp26 = closure_6(View, obj3);
                                    }
                                    cResult[26] = endIcon;
                                    cResult[27] = tmp4.endIcon;
                                    cResult[28] = tmp26;
                                    tmp25 = tmp26;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj4 = { style: tmp4.slider, value: tmp16, minimumValue: num, maximumValue: num2, step, disabled, onValueChange: tmp11, onSlidingComplete: onChangeEnd, minimumTrackTintColor: tmp4.minimumTrackTintColor.backgroundColor, maximumTrackTintColor: tmp4.maximumTrackTintColor.backgroundColor, tapToSeek: true, accessibilityLabel, accessibilityHint, accessibilityValue: tmp17, testID, onResponderGrant: tmp20 };
          const tmp24 = closure_6(onChange(8809), obj4);
          cResult[11] = accessibilityHint;
          cResult[12] = accessibilityLabel;
          cResult[13] = disabled;
          cResult[14] = tmp11;
          cResult[15] = num2;
          cResult[16] = num;
          cResult[17] = onChangeEnd;
          cResult[18] = step;
          cResult[19] = tmp4.maximumTrackTintColor.backgroundColor;
          cResult[20] = tmp4.minimumTrackTintColor.backgroundColor;
          cResult[21] = tmp4.slider;
          cResult[22] = tmp16;
          cResult[23] = tmp17;
          cResult[24] = testID;
          cResult[25] = tmp24;
          tmp21 = tmp24;
        }
        let tmp18;
        if (null != formatValue) {
          tmp18 = { text: formatValue(tmp9) };
          const obj5 = { text: formatValue(tmp9) };
        }
        cResult[7] = formatValue;
        cResult[8] = tmp9;
        cResult[9] = tmp18;
        tmp17 = tmp18;
      }
      let tmp13 = null;
      if (null != startIcon) {
        const obj6 = { style: tmp4.startIcon, children: startIcon };
        tmp13 = closure_6(View, obj6);
      }
      cResult[4] = startIcon;
      cResult[5] = tmp4.startIcon;
      cResult[6] = tmp13;
      tmp12 = tmp13;
    }
  }
  function handleValueChange(arg0) {
    if (null != step) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    tmp10(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }
  cResult[0] = onChange;
  cResult[1] = tmp10;
  cResult[2] = step;
  cResult[3] = handleValueChange;
  tmp11 = handleValueChange;
}) : (function Slider(maxValue) {
  let accessibilityHint;
  let accessibilityLabel;
  let closure_2;
  let defaultValue;
  let disabled;
  let endIcon;
  let first1;
  let fn;
  let formatValue;
  let items;
  let minValue;
  let onChangeEnd;
  let startIcon;
  let testID;
  let tmp14;
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
  let tmp3 = defaultValue;
  const useState = react.useState;
  if (defaultValue == null) {
    tmp3 = minValue;
  }
  const first = _slicedToArray(useState(tmp3), 1)[0];
  [first1, dependencyMap] = closure_9(value, defaultValue, minValue);
  let obj = { style: tmp.container, children: items };
  let tmp9 = null;
  const tmp7 = closure_7;
  if (null != startIcon) {
    const obj2 = { style: tmp.startIcon, children: startIcon };
    tmp9 = closure_6(tmp8, obj2);
  }
  items = [tmp9, , ];
  const obj3 = {
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
    accessibilityValue: tmp14,
    testID,
    onResponderGrant: fn
  };
  const tmp13 = _modDef8809;
  if (value == null) {
    value = first;
  }
  tmp14 = undefined;
  if (null != formatValue) {
    tmp14 = { text: formatValue(first1) };
    const obj4 = { text: formatValue(first1) };
  }
  fn = undefined;
  const obj5 = step(1381);
  if (obj5.isAndroid()) {
    fn = () => true;
  }
  items[1] = closure_6(tmp13, obj3);
  let tmp11Result = null;
  if (null != endIcon) {
    const obj6 = { style: tmp.endIcon, children: endIcon };
    tmp11Result = tmp11(tmp8, obj6);
  }
  items[2] = tmp11Result;
  return tmp7(View, obj);
});
let result = size.fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export const useLatestSliderValue = tmp4;
export const Slider = tmp5;
