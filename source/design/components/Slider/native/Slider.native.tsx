// Module ID: 13142
// Function ID: 101172
// Name: Slider
// Dependencies: [31, 27, 33, 4130, 689, 4099, 4100, 7658, 2]
// Exports: Slider

// Module 13142 (Slider)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, flexDirection: "row", alignItems: "center" }, slider: { flex: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_INPUT_CONTROL_SELECTED };
_createForOfIteratorHelperLoose.minimumTrackTintColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.maximumTrackTintColor = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.SLIDER_TRACK_BACKGROUND };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.SLIDER_TRACK_BACKGROUND };
_createForOfIteratorHelperLoose.startIcon = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.endIcon = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj3 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("jsxProd").fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export const Slider = function Slider(step) {
  let endIcon;
  let onValueChange;
  let startIcon;
  ({ startIcon, endIcon, onValueChange } = step);
  step = step.step;
  let obj = { startIcon: 0, endIcon: 0, style: 0, onValueChange: 0, step: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(step, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  const items = [step, onValueChange];
  obj = { style: tmp3.container };
  let tmp7 = null;
  const callback = React.useCallback((arg0) => {
    if (null != step) {
      const result = onValueChange(outer1_2[5]).triggerHapticFeedback(step(outer1_2[6]).IMPACT_LIGHT);
      const obj = onValueChange(outer1_2[5]);
    }
    if (null != onValueChange) {
      onValueChange(arg0);
    }
  }, items);
  if (null != startIcon) {
    obj = { style: tmp3.startIcon, children: startIcon };
    tmp7 = callback(View, obj);
  }
  const items1 = [tmp7, , ];
  const obj1 = {};
  const merged1 = Object.assign(merged);
  const items2 = [tmp3.slider, step.style];
  obj1["style"] = items2;
  obj1["step"] = step;
  obj1["onValueChange"] = callback;
  obj1["minimumTrackTintColor"] = tmp3.minimumTrackTintColor.backgroundColor;
  obj1["maximumTrackTintColor"] = tmp3.maximumTrackTintColor.backgroundColor;
  obj1["tapToSeek"] = true;
  items1[1] = callback(step(7658), obj1);
  let tmp12 = null;
  if (null != endIcon) {
    const obj2 = { style: tmp3.endIcon, children: endIcon };
    tmp12 = callback(View, obj2);
  }
  items1[2] = tmp12;
  obj.children = items1;
  return closure_6(View, obj);
};
