// Module ID: 13573
// Function ID: 104349
// Name: HuePicker
// Dependencies: [57, 31, 27, 33, 4130, 689, 13570, 3991, 5217, 4554, 2]
// Exports: default

// Module 13573 (HuePicker)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = [0, 60, 120, 180, 240, 300, 360];
_createForOfIteratorHelperLoose = { container: { justifyContent: "center", alignItems: "center" }, containerFullWidth: { alignSelf: "stretch", overflow: "visible" } };
_createForOfIteratorHelperLoose = { left: 0, position: "absolute", borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, width: 24, height: 36, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 2 };
_createForOfIteratorHelperLoose.slider = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.colorBar = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.colorBarFullWidth = { width: "100%" };
_createForOfIteratorHelperLoose.colorBarInner = { minWidth: 240, height: 32 };
_createForOfIteratorHelperLoose.colorBarInnerFullWidth = { minWidth: 0, width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function setSatVal_HuePickerTsx1({x:x}){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
let closure_11 = { code: "function HuePickerTsx2(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
let closure_12 = { code: "function HuePickerTsx3(){const{hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};}" };
let closure_13 = { code: "function HuePickerTsx4(){const{sliderHeight,barHeight,fullWidth,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}" };
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/color_picker/native/HuePicker.tsx");

export default function HuePicker(hue) {
  let colorBarInnerStyle;
  let onPanFinalize;
  let onPanUpdate;
  let saturation;
  let sliderStyle;
  let style;
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
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = hue(num[7]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = hue(num[7]);
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = hue(num[7]);
  sharedValue2 = obj2.useSharedValue(0);
  let obj3 = hue(num[7]);
  sharedValue3 = obj3.useSharedValue(0);
  let items = [saturation, num];
  const memo = sharedValue.useMemo(() => outer1_8.map((h) => {
    let obj = hue(num[6]);
    obj = { h, s: outer1_1, l: outer1_2 };
    const tmp = flag(obj.hslToRgbWorklet(obj), 3);
    return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
  }), items);
  let obj4 = hue(num[7]);
  let fn = function y() {
    let obj = hue(num[6]);
    obj = { h: hue.get(), s: saturation, l: num };
    const hslToRgbWorkletResult = obj.hslToRgbWorklet(obj);
    num = 0;
    if (flag) {
      num = sharedValue.get() / 2;
    }
    obj = { backgroundColor: "rgb(" + hslToRgbWorkletResult[0] + ", " + hslToRgbWorkletResult[1] + ", " + hslToRgbWorkletResult[2] + ")" };
    const obj1 = {};
    const value = sharedValue3.get();
    obj1.translateX = value * hue.get() / 360 - num;
    const items = [obj1];
    obj.transform = items;
    return obj;
  };
  obj = { hslToRgbWorklet: hue(num[6]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 };
  fn.__closure = obj;
  fn.__workletHash = 11845890180264;
  fn.__initData = closure_12;
  const items1 = [sharedValue1, sharedValue];
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const items2 = [sharedValue2, sharedValue3];
  const callback = sharedValue.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const result = sharedValue1.set(layout.height);
    const result1 = sharedValue.set(layout.width);
  }, items1);
  const callback1 = sharedValue.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const result = sharedValue2.set(layout.height);
    const result1 = sharedValue3.set(layout.width);
  }, items2);
  const fn2 = function x() {
    let value = sharedValue1.get();
    let num = 0;
    if (value - sharedValue2.get() > 0) {
      value = sharedValue1.get();
      num = (value - sharedValue2.get()) / 2;
    }
    let num3 = 0;
    if (!flag) {
      num3 = sharedValue.get() / 2;
    }
    const obj = { paddingTop: num, paddingBottom: num, paddingLeft: num3, paddingRight: num3 };
    return obj;
  };
  obj = { sliderHeight: sharedValue1, barHeight: sharedValue2, fullWidth: flag, sliderWidth: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 3108469558001;
  fn2.__initData = closure_13;
  const animatedStyle1 = hue(num[7]).useAnimatedStyle(fn2);
  obj1 = {};
  const items3 = [tmp.container, , , ];
  let containerFullWidth = flag;
  if (flag) {
    containerFullWidth = tmp.containerFullWidth;
  }
  items3[1] = containerFullWidth;
  items3[2] = style;
  items3[3] = animatedStyle1;
  obj1.style = items3;
  obj2 = {
    gesture: (function useHuePickerGesture(hue, sharedValue3, onPanUpdate, onPanFinalize) {
      let closure_0 = hue;
      let closure_1 = sharedValue3;
      let closure_2 = onPanUpdate;
      let _slicedToArray = onPanFinalize;
      const items = [hue, sharedValue3, onPanUpdate, onPanFinalize];
      return {
        gesture: sharedValue.useMemo(() => {
          const tmp = (() => {
            function setSatVal(arg0) {
              const result = outer2_0.set(360 * hue(num[6]).normalizeValue(arg0.x / outer2_1.get()));
              if (null != outer2_2) {
                hue(7[7]).runOnJS(outer2_2)();
                const obj2 = hue(7[7]);
              }
            }
            setSatVal.__closure = { hue: outer1_0, normalizeValue: hue(num[6]).normalizeValue, barWidth: outer1_1, onPanUpdate: outer1_2, runOnJS: hue(num[7]).runOnJS };
            setSatVal.__workletHash = 17165611898087;
            setSatVal.__initData = outer3_10;
            return setSatVal;
          })();
          const Gesture = hue(num[8]).Gesture;
          const PanResult = Gesture.Pan();
          const onBeginResult = Gesture.Pan().onBegin(tmp);
          const fn = function n() {
            if (null != outer1_3) {
              hue(7[7]).runOnJS(outer1_3)();
              const obj = hue(7[7]);
            }
          };
          const onUpdateResult = Gesture.Pan().onBegin(tmp).onUpdate(tmp);
          fn.__closure = { onPanFinalize: _slicedToArray, runOnJS: hue(num[7]).runOnJS };
          fn.__workletHash = 182773971449;
          fn.__initData = outer2_11;
          return onUpdateResult.onFinalize(fn);
        }, items)
      };
    })(hue, sharedValue3, onPanUpdate, onPanFinalize).gesture
  };
  obj3 = { colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } };
  const items4 = [tmp.colorBar, ];
  let colorBarFullWidth = flag;
  const obj7 = hue(num[7]);
  const tmp11 = sharedValue3;
  if (flag) {
    colorBarFullWidth = tmp.colorBarFullWidth;
  }
  items4[1] = colorBarFullWidth;
  obj3.style = items4;
  obj4 = { onLayout: callback1 };
  const items5 = [tmp.colorBarInner, , ];
  if (flag) {
    flag = tmp.colorBarInnerFullWidth;
  }
  items5[1] = flag;
  items5[2] = colorBarInnerStyle;
  obj4.style = items5;
  obj3.children = sharedValue2(sharedValue1, obj4);
  obj2.children = sharedValue2(saturation(num[9]), obj3);
  const items6 = [sharedValue2(hue(num[8]).GestureDetector, obj2), ];
  const items7 = [tmp.slider, sliderStyle, animatedStyle];
  items6[1] = sharedValue2(saturation(num[7]).View, { onLayout: callback, pointerEvents: "box-none", style: items7 });
  obj1.children = items6;
  return tmp11(saturation(num[7]).View, obj1);
};
