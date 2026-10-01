// Module ID: 14156
// Function ID: 14157
// Name: HSVColorPicker
// Dependencies: [19, 17, 21, 4836, 4566, 14157, 14158, 2]
// Exports: default

// Module 14156 (HSVColorPicker)
import react_native from "react-native" /* 17 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import SaturationValueColorPickerDefault from "SaturationValueColorPicker" /* 14157 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp9;
const HuePickerDefault = tmp9(14158);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ hsvColorPicker: { alignItems: "center" } });
const result = size.fileFinishedImporting("modules/color_picker/native/HSVColorPicker.tsx");

export default function HSVColorPicker(arg0) {
  let hue;
  let hueColorBarInnerStyle;
  let huePickerStyle;
  let hueSliderStyle;
  let items;
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
  const tmp = closure_6();
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = ReanimatedRexport;
  const sharedValue1 = obj2.useSharedValue(1);
  const obj4 = { style: tmp.hsvColorPicker, children: items };
  const obj3 = ReanimatedRexport;
  const sharedValue2 = obj3.useSharedValue(1);
  let tmp11 = hue;
  const tmp10 = SaturationValueColorPickerDefault;
  const tmp6 = hasOwnProperty;
  const tmp7 = View;
  if (hue == null) {
    tmp11 = sharedValue;
  }
  const obj5 = { hue: tmp11, saturation, value, style: saturationValuePickerStyle, colorBoxStyle: saturationValueColorBoxStyle, colorBoxInnerStyle: saturationValueColorBoxInnerStyle, selectorStyle: saturationValueSelectorStyle, onPanUpdate, onPanFinalize };
  if (saturation == null) {
    saturation = sharedValue1;
  }
  if (value == null) {
    value = sharedValue2;
  }
  items = [React3(tmp10, obj5), ];
  const tmp9Result = HuePickerDefault;
  if (hue == null) {
    hue = sharedValue;
  }
  items[1] = React3(tmp9Result, { hue, style: huePickerStyle, colorBarInnerStyle: hueColorBarInnerStyle, sliderStyle: hueSliderStyle, onPanUpdate, onPanFinalize });
  return tmp6(tmp7, obj4);
};
