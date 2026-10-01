// Module ID: 14158
// Function ID: 14159
// Name: HuePicker
// Dependencies: [32, 19, 17, 21, 4836, 576, 6073, 14155, 4566, 5293, 2]
// Exports: default

// Module 14158 (HuePicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14155 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let set;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = [0, 60, 120, 180, 240, 300, 360];
let createStyles = createStyles_mod;
let obj = { container: { justifyContent: "center", alignItems: "center" }, containerFullWidth: { alignSelf: "stretch", overflow: "visible" }, slider: size, colorBar: obj2, colorBarFullWidth: { width: "100%" }, colorBarInner: { minWidth: 240, height: 32 }, colorBarInnerFullWidth: { minWidth: 0, width: "100%" } };
size = { left: 0, position: "absolute", borderColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, width: 24, height: 36, borderRadius: nativeDefault.radii.sm, borderWidth: 2 };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.xs };
let closure_9 = createStyles(obj);
const __initData = { code: "function HuePickerTsx1(event){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData2 = { code: "function HuePickerTsx2(event){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData3 = { code: "function HuePickerTsx3(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
const __initData4 = { code: "function HuePickerTsx4(){const{hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};}" };
const __initData5 = { code: "function HuePickerTsx5(){const{sliderHeight,barHeight,fullWidth,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/color_picker/native/HuePicker.tsx");

export default function HuePicker(hue) {
  let colorBarInnerStyle;
  let fn;
  let fn2;
  let fn3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj14;
  let obj15;
  let onPanFinalize;
  let onPanUpdate;
  let saturation;
  let sliderStyle;
  let style;
  let tmp16Result;
  let tmp19;
  hue = hue.hue;
  ({ onPanUpdate, onPanFinalize, saturation } = hue);
  ({ style, colorBarInnerStyle, sliderStyle } = hue);
  if (saturation === undefined) {
    saturation = 1;
  }
  let num = hue.lightness;
  if (num === undefined) {
    num = 0.5;
  }
  let flag = hue.fullWidth;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_9();
  let tmp2 = hue;
  let obj = hue(num[8]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = hue(num[8]);
  const sharedValue1 = obj2.useSharedValue(tmp.slider.height);
  let obj3 = hue(num[8]);
  const sharedValue2 = obj3.useSharedValue(tmp.colorBarInner.height);
  let obj4 = hue(num[8]);
  const sharedValue3 = obj4.useSharedValue(0);
  let obj5 = { onBegin: fn, onUpdate: fn2, onFinalize: fn3 };
  fn = function s(arg0) {
    set = hue.set;
    const obj = hue(num[7]);
    const result = set(360 * obj.normalizeValue(arg0.x / sharedValue3.get()));
    const tmp = hue;
    const tmp2 = num;
    if (null != onPanUpdate) {
      const tmpResult = tmp(tmp2[8]);
      tmpResult.runOnJS(tmp4)();
    }
  };
  const usePanGesture = hue(num[6]).usePanGesture;
  const tmp8 = hue(num[6]);
  fn.__closure = { hue, normalizeValue: hue(num[7]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(num[8]).runOnJS };
  fn.__workletHash = 353921971989;
  fn.__initData = __initData;
  fn2 = function u(arg0) {
    set = hue.set;
    const obj = hue(num[7]);
    const result = set(360 * obj.normalizeValue(arg0.x / sharedValue3.get()));
    const tmp = hue;
    const tmp2 = num;
    if (null != onPanUpdate) {
      const tmpResult = tmp(tmp2[8]);
      tmpResult.runOnJS(tmp4)();
    }
  };
  ({ hue, normalizeValue: hue(num[7]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(num[8]).runOnJS });
  fn2.__closure = { hue, normalizeValue: hue(num[7]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(num[8]).runOnJS };
  fn2.__workletHash = 10969858065142;
  fn2.__initData = __initData2;
  fn3 = function o() {
    if (null != onPanFinalize) {
      const obj = hue(num[8]);
      obj.runOnJS(tmp)();
    }
  };
  ({ hue, normalizeValue: hue(num[7]).normalizeValue, barWidth: sharedValue3, onPanUpdate, runOnJS: hue(num[8]).runOnJS });
  fn3.__closure = { onPanFinalize, runOnJS: hue(num[8]).runOnJS };
  fn3.__workletHash = 2479115151384;
  fn3.__initData = __initData3;
  let items = [saturation, num];
  ({ onPanFinalize, runOnJS: hue(num[8]).runOnJS });
  const panGesture = usePanGesture(obj5);
  const memo = sharedValue.useMemo(() => {
    let closure_1;
    let closure_2;
    return closure_8.map((h) => {
      const obj = hue(num[7]);
      const obj2 = { h, s, l };
      const tmp = flag(obj.hslToRgbWorklet(obj2), 3);
      return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
    });
  }, items);
  const fn4 = function x() {
    let items;
    let value;
    const obj = ColorPickerUtils;
    const obj2 = { h: hue.get(), s: saturation, l: num };
    const hslToRgbWorkletResult = obj.hslToRgbWorklet(obj2);
    num = 0;
    const obj3 = hue;
    if (flag) {
      num = sharedValue.get() / 2;
    }
    const obj4 = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")", transform: items };
    const obj5 = { translateX: value * obj3.get() / 360 - num };
    value = sharedValue3.get();
    items = [obj5];
    return obj4;
  };
  const obj9 = hue(num[8]);
  fn4.__closure = { hslToRgbWorklet: hue(num[7]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 };
  fn4.__workletHash = 11978530182863;
  fn4.__initData = __initData4;
  const items1 = [sharedValue];
  ({ hslToRgbWorklet: hue(num[7]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 });
  const animatedStyle = obj9.useAnimatedStyle(fn4);
  const items2 = [sharedValue3];
  const callback = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  const callback1 = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue3.set(nativeEvent.nativeEvent.layout.width);
  }, items2);
  const fn5 = function y() {
    const value = sharedValue1.get();
    let paddingTop = 0;
    const obj = sharedValue1;
    const obj2 = sharedValue2;
    if (value - sharedValue2.get() > 0) {
      const value2 = obj.get();
      paddingTop = (value2 - obj2.get()) / 2;
    }
    let paddingLeft = 0;
    if (!flag) {
      paddingLeft = sharedValue.get() / 2;
    }
    return { paddingTop, paddingBottom: paddingTop, paddingLeft, paddingRight: paddingLeft };
  };
  fn5.__closure = { sliderHeight: sharedValue1, barHeight: sharedValue2, fullWidth: flag, sliderWidth: sharedValue };
  fn5.__workletHash = 5400515770640;
  fn5.__initData = __initData5;
  const obj11 = hue(num[8]);
  const animatedStyle1 = obj11.useAnimatedStyle(fn5);
  const items3 = [tmp.container, , , ];
  let containerFullWidth = flag;
  View = saturation(num[8]).View;
  const tmp15 = sharedValue3;
  if (flag) {
    containerFullWidth = tmp.containerFullWidth;
  }
  const obj12 = { style: items3, children: items6 };
  items3[1] = containerFullWidth;
  items3[2] = style;
  items3[3] = animatedStyle1;
  const obj13 = { gesture: panGesture, children: sharedValue2(tmp16Result, obj14) };
  const GestureDetector = tmp2(tmp3[6]).GestureDetector;
  obj14 = { colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: items4, children: sharedValue2(tmp19, obj15) };
  items4 = [tmp.colorBar, ];
  let colorBarFullWidth = flag;
  tmp16Result = saturation(num[9]);
  if (flag) {
    colorBarFullWidth = tmp.colorBarFullWidth;
  }
  items4[1] = colorBarFullWidth;
  obj15 = { onLayout: callback1, style: items5 };
  items5 = [tmp.colorBarInner, , ];
  tmp19 = sharedValue1;
  if (flag) {
    flag = tmp.colorBarInnerFullWidth;
  }
  items5[1] = flag;
  items5[2] = colorBarInnerStyle;
  items6 = [sharedValue2(GestureDetector, obj13), ];
  const obj16 = { onLayout: callback, pointerEvents: "box-none", style: items7 };
  items7 = [tmp.slider, sliderStyle, animatedStyle];
  items6[1] = sharedValue2(saturation(num[8]).View, obj16);
  return tmp15(View, obj12);
};
