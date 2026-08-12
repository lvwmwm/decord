// Module ID: 13974
// Function ID: 13975
// Name: HSVColorPicker
// Dependencies: [19, 17, 21, 4344, 4083, 13975, 13976, 2]
// Exports: default

// Module 13974 (HSVColorPicker)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ hsvColorPicker: { alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/color_picker/native/HSVColorPicker.tsx");

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
  let obj = require(4083);
  const sharedValue = obj.useSharedValue(0);
  const tmp = callback();
  const sharedValue1 = require(4083).useSharedValue(1);
  const obj2 = require(4083);
  obj = { style: tmp.hsvColorPicker, children: null };
  const sharedValue2 = require(4083).useSharedValue(1);
  let tmp11 = hue;
  const obj3 = require(4083);
  const tmp6 = closure_5;
  const tmp7 = View;
  const tmp9 = importDefault;
  if (hue == null) {
    tmp11 = sharedValue;
  }
  obj = { hue: tmp11, saturation: null, value: null, style: null, colorBoxStyle: null, colorBoxInnerStyle: null, selectorStyle: null, onPanUpdate: null, onPanFinalize: null };
  if (saturation == null) {
    saturation = sharedValue1;
  }
  obj[1] = saturation;
  if (value == null) {
    value = sharedValue2;
  }
  obj[2] = value;
  obj[3] = saturationValuePickerStyle;
  obj[4] = saturationValueColorBoxStyle;
  obj[5] = saturationValueColorBoxInnerStyle;
  obj[6] = saturationValueSelectorStyle;
  obj[7] = onPanUpdate;
  obj[8] = onPanFinalize;
  const items = [closure_4(importDefault(13975), obj), ];
  const tmp10 = importDefault(13975);
  if (hue == null) {
    hue = sharedValue;
  }
  items[1] = closure_4(tmp9(13976), { hue, style: huePickerStyle, colorBarInnerStyle: hueColorBarInnerStyle, sliderStyle: hueSliderStyle, onPanUpdate, onPanFinalize });
  obj[1] = items;
  return tmp6(tmp7, obj);
};
