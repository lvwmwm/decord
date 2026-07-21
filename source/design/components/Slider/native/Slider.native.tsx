// Module ID: 12969
// Function ID: 98660
// Name: Slider
// Dependencies: []
// Exports: Slider

// Module 12969 (Slider)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Null": null, "Null": "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", "Null": true }, slider: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj.minimumTrackTintColor = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.maximumTrackTintColor = { backgroundColor: importDefault(dependencyMap[4]).colors.SLIDER_TRACK_BACKGROUND };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.SLIDER_TRACK_BACKGROUND };
obj.startIcon = { marginRight: importDefault(dependencyMap[4]).space.PX_8 };
const obj2 = { marginRight: importDefault(dependencyMap[4]).space.PX_8 };
obj.endIcon = { marginLeft: importDefault(dependencyMap[4]).space.PX_8 };
let closure_7 = obj.createStyles(obj);
const obj3 = { marginLeft: importDefault(dependencyMap[4]).space.PX_8 };
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export const Slider = function Slider(step) {
  let endIcon;
  let onValueChange;
  let startIcon;
  ({ startIcon, endIcon, onValueChange } = step);
  const arg1 = onValueChange;
  step = step.step;
  const importDefault = step;
  let obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
  Object.setPrototypeOf(null);
  const merged = Object.assign(step, obj);
  const tmp3 = callback2();
  const items = [step, onValueChange];
  obj = { style: tmp3.container };
  let tmp7 = null;
  const callback = React.useCallback((arg0) => {
    if (null != step) {
      const result = onValueChange(closure_2[5]).triggerHapticFeedback(step(closure_2[6]).IMPACT_LIGHT);
      const obj = onValueChange(closure_2[5]);
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
  items1[1] = callback(importDefault(dependencyMap[7]), obj1);
  let tmp12 = null;
  if (null != endIcon) {
    const obj2 = { style: tmp3.endIcon, children: endIcon };
    tmp12 = callback(View, obj2);
  }
  items1[2] = tmp12;
  obj.children = items1;
  return closure_6(View, obj);
};
