// Module ID: 17377
// Function ID: 17378
// Name: VEVOOSlider
// Dependencies: [19, 17, 21, 5003, 1384, 587, 558, 576, 15312, 2]

// Module 17377 (VEVOOSlider)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5003 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const Slider = tmp(15312);
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = nativeDefault.space.PX_8;
}
let obj = { slider: { marginTop: num } };
let closure_4 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VEVOOSlider(arg0) {
  let accessibilityLabel;
  let disabled;
  let disabledOpacity;
  let initialValue;
  let onValueChange;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(13);
  ({ disabled, disabledOpacity, initialValue, onValueChange, accessibilityLabel } = arg0);
  const tmp4 = undefined !== disabledOpacity && disabledOpacity;
  const tmp5 = closure_4();
  let num = 1;
  if (tmp4) {
    num = 0.5;
  }
  if (cResult[0] !== num) {
    const obj2 = { opacity: num };
    cResult[0] = num;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5.slider) {
    let tmp7;
    if (cResult[3] === tmp6) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === accessibilityLabel) {
      if (cResult[6] === disabled) {
        if (cResult[7] === initialValue.current) {
          let tmp8;
          if (cResult[8] === onValueChange) {
            tmp8 = cResult[9];
          }
          if (cResult[10] === tmp7) {
            let tmp11;
            if (cResult[11] === tmp8) {
              tmp11 = cResult[12];
            }
            return tmp11;
          }
          const tmp14 = <View style={tmp7}>{tmp8}</View>;
          cResult[10] = tmp7;
          cResult[11] = tmp8;
          cResult[12] = tmp14;
          tmp11 = tmp14;
        }
      }
    }
    const tmp10 = jsx(Slider.Slider, { disabled, defaultValue: initialValue.current, minValue: 0, maxValue: 1, onChange: onValueChange, accessibilityLabel });
    cResult[5] = accessibilityLabel;
    cResult[6] = disabled;
    cResult[7] = initialValue.current;
    cResult[8] = onValueChange;
    cResult[9] = tmp10;
    tmp8 = tmp10;
  }
  const items = [tmp5.slider, tmp6];
  cResult[2] = tmp5.slider;
  cResult[3] = tmp6;
  cResult[4] = items;
  tmp7 = items;
}) : (function VEVOOSlider(disabledOpacity) {
  let accessibilityLabel;
  let initialValue;
  let onValueChange;
  let flag = disabledOpacity.disabledOpacity;
  const disabled = disabledOpacity.disabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ initialValue, onValueChange, accessibilityLabel } = disabledOpacity);
  const items = [closure_4().slider, ];
  let num = 1;
  if (flag) {
    num = 0.5;
  }
  items[1] = { opacity: num };
  return <tmp2 style={items}>{null}</tmp2>;
}));
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default memoResult;
