// Module ID: 13997
// Function ID: 13998
// Name: Slider
// Dependencies: [19, 17, 21, 4836, 576, 4801, 4802, 7726, 2]
// Exports: Slider

// Module 13997 (Slider)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, flexDirection: "row", alignItems: "center" }, slider: { flex: 1 }, minimumTrackTintColor: obj2, maximumTrackTintColor: obj3, startIcon: obj4, endIcon: { marginLeft: nativeDefault.space.PX_8 } };
obj2 = { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
obj4 = { marginRight: nativeDefault.space.PX_8 };
({ marginLeft: nativeDefault.space.PX_8 });
let closure_7 = createStyles(obj);
let result = size.fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export const Slider = function Slider(step) {
  let endIcon;
  let items1;
  let items2;
  let onValueChange;
  let startIcon;
  ({ startIcon, endIcon, onValueChange } = step);
  step = step.step;
  const style = step.style;
  const merged = Object.assign(step, Object.assign({ startIcon: 0, endIcon: 0, style: 0, onValueChange: 0, step: 0 }));
  const tmp2 = closure_7();
  const items = [step, onValueChange];
  const tmp5 = View;
  let obj = { style: tmp2.container, children: items1 };
  let tmp6 = null;
  const callback = react.useCallback((arg0) => {
    if (null != step) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    if (onValueChange != null) {
      tmp5(arg0);
    }
  }, items);
  const tmp4 = closure_6;
  if (null != startIcon) {
    const obj2 = { style: tmp2.startIcon, children: startIcon };
    tmp6 = closure_5(tmp5, obj2);
  }
  items1 = [tmp6, , ];
  const obj3 = { style: items2, step, onValueChange: callback, minimumTrackTintColor: tmp2.minimumTrackTintColor.backgroundColor, maximumTrackTintColor: tmp2.maximumTrackTintColor.backgroundColor, tapToSeek: true };
  const tmp9 = step(7726);
  const merged1 = Object.assign(merged);
  items2 = [tmp2.slider, style];
  items1[1] = closure_5(tmp9, obj3);
  let tmp8Result = null;
  const tmp8 = closure_5;
  if (null != endIcon) {
    const obj4 = { style: tmp2.endIcon, children: endIcon };
    tmp8Result = tmp8(tmp5, obj4);
  }
  items1[2] = tmp8Result;
  return tmp4(tmp5, obj);
};
