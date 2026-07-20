// Module ID: 13441
// Function ID: 102099
// Name: HSVColorPicker
// Dependencies: []
// Exports: default

// Module 13441 (HSVColorPicker)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ hsvColorPicker: { alignItems: "center" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/color_picker/native/HSVColorPicker.tsx");

export default function HSVColorPicker(arg0) {
  let hue;
  let hueColorBarInnerStyle;
  let huePickerStyle;
  let hueSliderStyle;
  let onPanFinalize;
  let onPanUpdate;
  let saturation;
  let saturationValueColorBoxInnerStyle;
  let saturationValueColorBoxStyle;
  let saturationValuePickerStyle;
  let saturationValueSelectorStyle;
  let value;
  ({ hue, saturation, value, onPanUpdate, onPanFinalize } = arg0);
  ({ saturationValuePickerStyle, saturationValueColorBoxStyle, saturationValueColorBoxInnerStyle, saturationValueSelectorStyle, huePickerStyle, hueColorBarInnerStyle, hueSliderStyle } = arg0);
  let obj = arg1(dependencyMap[4]);
  let sharedValue = obj.useSharedValue(0);
  let obj1 = arg1(dependencyMap[4]);
  let sharedValue1 = obj1.useSharedValue(1);
  const tmp = callback();
  let sharedValue2 = arg1(dependencyMap[4]).useSharedValue(1);
  obj = { style: tmp.hsvColorPicker };
  obj = {};
  let tmp9 = sharedValue;
  const obj3 = arg1(dependencyMap[4]);
  const tmp5 = closure_5;
  const tmp6 = View;
  const tmp7 = closure_4;
  if (null != hue) {
    tmp9 = hue;
  }
  obj.hue = tmp9;
  if (null != saturation) {
    sharedValue1 = saturation;
  }
  obj.saturation = sharedValue1;
  if (null != value) {
    sharedValue2 = value;
  }
  obj.value = sharedValue2;
  obj.style = saturationValuePickerStyle;
  obj.colorBoxStyle = saturationValueColorBoxStyle;
  obj.colorBoxInnerStyle = saturationValueColorBoxInnerStyle;
  obj.selectorStyle = saturationValueSelectorStyle;
  obj.onPanUpdate = onPanUpdate;
  obj.onPanFinalize = onPanFinalize;
  const items = [tmp7(importDefault(dependencyMap[5]), obj), ];
  obj1 = {};
  const tmp10 = closure_4;
  const tmp8 = importDefault(dependencyMap[5]);
  if (null != hue) {
    sharedValue = hue;
  }
  obj1.hue = sharedValue;
  obj1.style = huePickerStyle;
  obj1.colorBarInnerStyle = hueColorBarInnerStyle;
  obj1.sliderStyle = hueSliderStyle;
  obj1.onPanUpdate = onPanUpdate;
  obj1.onPanFinalize = onPanFinalize;
  items[1] = tmp10(importDefault(dependencyMap[6]), obj1);
  obj.children = items;
  return tmp5(tmp6, obj);
};
