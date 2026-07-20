// Module ID: 13443
// Function ID: 102115
// Name: HuePicker
// Dependencies: []
// Exports: default

// Module 13443 (HuePicker)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = [];
let obj = arg1(dependencyMap[4]);
obj = { container: {}, containerFullWidth: {} };
obj = { 0: "<string:1137377281>", 0: "<string:1498480641>", 9223372036854775807: "<string:122569145>", 0: "<string:1498480641>", 0: "<string:2576110777>", 9223372036854775807: "<string:2391447948>", 0: "<string:2388753968>", borderColor: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.slider = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.colorBar = { borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.colorBarFullWidth = { width: "100%" };
obj.colorBarInner = { <string:3747679790>: null, <string:3022870866>: null };
obj.colorBarInnerFullWidth = { source_page: 18, -1257254734: 18 };
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function setSatVal_HuePickerTsx1({x:x}){const{hue,normalizeValue,barWidth,onPanUpdate,runOnJS}=this.__closure;hue.set(normalizeValue(x/barWidth.get())*360);onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
let closure_11 = { code: "function HuePickerTsx2(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
let closure_12 = { code: "function HuePickerTsx3(){const{hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};}" };
let closure_13 = { code: "function HuePickerTsx4(){const{sliderHeight,barHeight,fullWidth,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}" };
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.xs };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/color_picker/native/HuePicker.tsx");

export default function HuePicker(hue) {
  let colorBarInnerStyle;
  let onPanFinalize;
  let onPanUpdate;
  let saturation;
  let sliderStyle;
  let style;
  hue = hue.hue;
  const arg1 = hue;
  ({ onPanUpdate, onPanFinalize, saturation } = hue);
  ({ style, colorBarInnerStyle, sliderStyle } = hue);
  if (saturation === undefined) {
    saturation = 1;
  }
  const importDefault = saturation;
  let num = hue.lightness;
  if (num === undefined) {
    num = 0.5;
  }
  const dependencyMap = num;
  let flag = hue.fullWidth;
  if (flag === undefined) {
    flag = false;
  }
  let closure_3 = flag;
  let React;
  let View;
  let sharedValue2;
  let sharedValue3;
  const tmp = callback();
  let obj = arg1(dependencyMap[7]);
  const sharedValue = obj.useSharedValue(0);
  React = sharedValue;
  let obj1 = arg1(dependencyMap[7]);
  const sharedValue1 = obj1.useSharedValue(0);
  View = sharedValue1;
  let obj2 = arg1(dependencyMap[7]);
  sharedValue2 = obj2.useSharedValue(0);
  let obj3 = arg1(dependencyMap[7]);
  sharedValue3 = obj3.useSharedValue(0);
  const items = [saturation, num];
  const memo = React.useMemo(() => closure_8.map((h) => {
    let obj = callback(closure_2[6]);
    obj = { h, s: closure_1, l: closure_2 };
    const tmp = callback2(obj.hslToRgbWorklet(obj), 3);
    return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
  }), items);
  let obj4 = arg1(dependencyMap[7]);
  const fn = function y() {
    let obj = hue(num[6]);
    obj = { h: hue.get(), s: saturation, l: num };
    const hslToRgbWorkletResult = obj.hslToRgbWorklet(obj);
    let num = 0;
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
  obj = { hslToRgbWorklet: arg1(dependencyMap[6]).hslToRgbWorklet, hue, saturation, lightness: num, fullWidth: flag, sliderWidth: sharedValue, barWidth: sharedValue3 };
  fn.__closure = obj;
  fn.__workletHash = 11845890180264;
  fn.__initData = closure_12;
  const items1 = [sharedValue1, sharedValue];
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const items2 = [sharedValue2, sharedValue3];
  const callback = React.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const result = sharedValue1.set(layout.height);
    const result1 = sharedValue.set(layout.width);
  }, items1);
  const callback1 = React.useCallback((nativeEvent) => {
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
  const animatedStyle1 = arg1(dependencyMap[7]).useAnimatedStyle(fn2);
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
    gesture: function useHuePickerGesture(hue, sharedValue3, onPanUpdate, onPanFinalize) {
      const saturation = sharedValue3;
      const items = [hue, sharedValue3, onPanUpdate, onPanFinalize];
      return {
        gesture: sharedValue.useMemo(() => {
          const tmp = () => {
            function setSatVal(arg0) {
              const result = lib.set(360 * lib(closure_2[6]).normalizeValue(arg0.x / closure_1.get()));
              if (null != closure_2) {
                lib(closure_2[7]).runOnJS(closure_2)();
                const obj2 = lib(closure_2[7]);
              }
            }
            setSatVal.__closure = { hue: callback, normalizeValue: callback(closure_2[6]).normalizeValue, barWidth: closure_1, onPanUpdate: closure_2, runOnJS: callback(closure_2[7]).runOnJS };
            setSatVal.__workletHash = 17165611898087;
            setSatVal.__initData = closure_10;
            return setSatVal;
          }();
          const Gesture = arg0(arg2[8]).Gesture;
          const PanResult = Gesture.Pan();
          const onBeginResult = Gesture.Pan().onBegin(tmp);
          const fn = function n() {
            if (null != closure_3) {
              callback(closure_2[7]).runOnJS(closure_3)();
              const obj = callback(closure_2[7]);
            }
          };
          const onUpdateResult = Gesture.Pan().onBegin(tmp).onUpdate(tmp);
          fn.__closure = { onPanFinalize: arg3, runOnJS: arg0(arg2[7]).runOnJS };
          fn.__workletHash = 182773971449;
          fn.__initData = closure_11;
          return onUpdateResult.onFinalize(fn);
        }, items)
      };
    }(hue, sharedValue3, onPanUpdate, onPanFinalize).gesture
  };
  obj3 = { colors: memo, start: { "Null": false, "Null": false }, end: { "Null": -721485569, "Null": 3375103 } };
  const items4 = [tmp.colorBar, ];
  let colorBarFullWidth = flag;
  const obj7 = arg1(dependencyMap[7]);
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
  obj3.children = sharedValue2(View, obj4);
  obj2.children = sharedValue2(importDefault(dependencyMap[9]), obj3);
  const items6 = [sharedValue2(arg1(dependencyMap[8]).GestureDetector, obj2), ];
  const items7 = [tmp.slider, sliderStyle, animatedStyle];
  items6[1] = sharedValue2(importDefault(dependencyMap[7]).View, { onLayout: callback, pointerEvents: "box-none", style: items7 });
  obj1.children = items6;
  return tmp11(importDefault(dependencyMap[7]).View, obj1);
};
