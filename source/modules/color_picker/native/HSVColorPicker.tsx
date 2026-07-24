// Module ID: 13622
// Function ID: 104657
// Name: HSVColorPicker
// Dependencies: [31, 27, 33, 4130, 3991, 13623, 13624, 2]
// Exports: default

// Module 13622 (HSVColorPicker)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ hsvColorPicker: { alignItems: "center" } });
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
  let obj = require(3991);
  let sharedValue = obj.useSharedValue(0);
  let obj1 = require(3991);
  let sharedValue1 = obj1.useSharedValue(1);
  const tmp = callback();
  let sharedValue2 = require(3991).useSharedValue(1);
  obj = { style: tmp.hsvColorPicker };
  obj = {};
  let tmp9 = sharedValue;
  const obj3 = require(3991);
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
  const items = [tmp7(importDefault(13623), obj), ];
  obj1 = {};
  const tmp10 = closure_4;
  const tmp8 = importDefault(13623);
  if (null != hue) {
    sharedValue = hue;
  }
  obj1.hue = sharedValue;
  obj1.style = huePickerStyle;
  obj1.colorBarInnerStyle = hueColorBarInnerStyle;
  obj1.sliderStyle = hueSliderStyle;
  obj1.onPanUpdate = onPanUpdate;
  obj1.onPanFinalize = onPanFinalize;
  items[1] = tmp10(importDefault(13624), obj1);
  obj.children = items;
  return tmp5(tmp6, obj);
};
