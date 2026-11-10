// Module ID: 16798
// Function ID: 16799
// Name: HuePicker
// Dependencies: [32, 19, 17, 21, 5142, 575, 5422, 16795, 1705, 1652, 5717, 2]
// Exports: default

// Module 16798 (HuePicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size_mod from "module_2" /* 2 */;

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
let closure_10 = { code: "(function HuePickerTsx1(event){let[hue,normalizeValue,barWidth,onPanUpdate,scheduleOnRN]=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&scheduleOnRN(onPanUpdate);})" };
let closure_11 = { code: "(function HuePickerTsx2(event){let[hue,normalizeValue,barWidth,onPanUpdate,scheduleOnRN]=this.__closure;hue.set(normalizeValue(event.x/barWidth.get())*360);onPanUpdate!=null&&scheduleOnRN(onPanUpdate);})" };
let closure_12 = { code: "(function HuePickerTsx3(){let[onPanFinalize,scheduleOnRN]=this.__closure;onPanFinalize!=null&&scheduleOnRN(onPanFinalize);})" };
let closure_13 = { code: "(function HuePickerTsx4(){let[hslToRgbWorklet,hue,saturation,lightness,fullWidth,sliderWidth,barWidth]=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:saturation,l:lightness});const centerOffset=fullWidth?sliderWidth.get()/2:0;return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:barWidth.get()*hue.get()/360-centerOffset}]};})" };
let closure_14 = { code: "(function HuePickerTsx5(){let[sliderHeight,barHeight,fullWidth,sliderWidth]=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=fullWidth?0:sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/color_picker/native/HuePicker.tsx");

export default function HuePicker(lightness) {
  let colorBarInnerStyle;
  let hue;
  let items14;
  let items15;
  let items16;
  let items17;
  let obj10;
  let obj9;
  let onPanFinalize;
  let onPanUpdate;
  let saturation;
  let sliderStyle;
  let style;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp45Result;
  let tmp48;
  let tmp9;
  ({ hue, onPanUpdate, saturation } = lightness);
  ({ style, colorBarInnerStyle, sliderStyle, onPanFinalize } = lightness);
  if (saturation === undefined) {
    saturation = 1;
  }
  let num = lightness.lightness;
  if (num === undefined) {
    num = 0.5;
  }
  let flag = lightness.fullWidth;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue;
  let tmp = closure_9();
  const tmp2 = saturation;
  let obj = saturation(sharedValue[9]);
  sharedValue = obj.useSharedValue(0);
  let obj2 = saturation(sharedValue[9]);
  const sharedValue1 = obj2.useSharedValue(tmp.slider.height);
  let obj3 = saturation(sharedValue[9]);
  const sharedValue2 = obj3.useSharedValue(tmp.colorBarInner.height);
  let obj4 = saturation(sharedValue[9]);
  const sharedValue3 = obj4.useSharedValue(0);
  let items = [closure_10, hue, , , , ];
  const usePanGesture = saturation(sharedValue[6]).usePanGesture;
  saturation(sharedValue[6]);
  items[2] = saturation(sharedValue[7]).normalizeValue;
  items[3] = sharedValue3;
  items[4] = onPanUpdate;
  items[5] = saturation(sharedValue[8]).scheduleOnRN;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  const obj5 = { onBegin: HuePickerTsx1, onUpdate: HuePickerTsx2, onFinalize: HuePickerTsx3 };
  class HuePickerTsx1 {
    constructor(arg0) {
      const result = _undefined.set(360 * _undefined2(arg0.x / _undefined3.get()));
      if (null != c3) {
        _undefined4(tmp2);
      }
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  HuePickerTsx1.__closure = items1;
  HuePickerTsx1.__workletHash = 2888417885837;
  HuePickerTsx1.__initData = tmp9;
  const items2 = [closure_11, hue, tmp2(tmp3[7]).normalizeValue, sharedValue3, onPanUpdate, tmp2(tmp3[8]).scheduleOnRN];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
  class HuePickerTsx2 {
    constructor(arg0) {
      const result = _undefined.set(360 * _undefined2(arg0.x / _undefined3.get()));
      if (null != c3) {
        _undefined4(tmp2);
      }
    }
  }
  const items3 = [tmp16, tmp17, tmp18, tmp19, tmp20];
  HuePickerTsx2.__closure = items3;
  HuePickerTsx2.__workletHash = 1340523300494;
  HuePickerTsx2.__initData = tmp15;
  const items4 = [closure_12, onPanFinalize, tmp2(tmp3[8]).scheduleOnRN];
  c0 = undefined;
  c1 = undefined;
  [tmp21, tmp22, tmp23] = items4;
  class HuePickerTsx3 {
    constructor() {
      if (null != c0) {
        _undefined(tmp);
      }
    }
  }
  const items5 = [tmp22, tmp23];
  HuePickerTsx3.__closure = items5;
  HuePickerTsx3.__workletHash = 10163270248416;
  HuePickerTsx3.__initData = tmp21;
  const items6 = [saturation, num];
  const panGesture = usePanGesture(obj5);
  const memo = react.useMemo(() => {
    let closure_0;
    let closure_1;
    return closure_8.map((h) => {
      const obj = saturation(sharedValue[7]);
      const obj2 = { h, s, l };
      const tmp = sharedValue3(obj.hslToRgbWorklet(obj2), 3);
      return "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")";
    });
  }, items6);
  const items7 = [closure_13, , , , , , , ];
  const useAnimatedStyle = tmp2(tmp3[9]).useAnimatedStyle;
  tmp2(sharedValue[9]);
  items7[1] = tmp2(sharedValue[7]).hslToRgbWorklet;
  items7[2] = hue;
  items7[3] = saturation;
  items7[4] = num;
  items7[5] = flag;
  items7[6] = sharedValue;
  items7[7] = sharedValue3;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items7;
  class HuePickerTsx4 {
    constructor() {
      let items;
      let value;
      const obj = { h: _undefined2.get(), s, l };
      const tmp = _undefined(obj);
      num = 0;
      const obj2 = _undefined2;
      if (c4) {
        num = _undefined3.get() / 2;
      }
      const obj3 = { backgroundColor: "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")", transform: items };
      const obj4 = { translateX: value * obj2.get() / 360 - num };
      value = _undefined4.get();
      items = [obj4];
      return obj3;
    }
  }
  const items8 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
  HuePickerTsx4.__closure = items8;
  HuePickerTsx4.__workletHash = 9466436421270;
  HuePickerTsx4.__initData = tmp27;
  const items9 = [sharedValue];
  const animatedStyle = useAnimatedStyle(HuePickerTsx4);
  const items10 = [sharedValue3];
  const callback = obj6.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
  }, items9);
  const callback1 = obj6.useCallback((nativeEvent) => {
    const result = sharedValue3.set(nativeEvent.nativeEvent.layout.width);
  }, items10);
  const items11 = [closure_14, sharedValue1, sharedValue2, flag, sharedValue];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp38, tmp39, tmp40, tmp41, tmp42] = items11;
  const tmp2Result2 = tmp2(sharedValue[9]);
  class HuePickerTsx5 {
    constructor() {
      const value = _undefined.get();
      let paddingTop = 0;
      const obj = _undefined;
      const obj2 = _undefined2;
      if (value - _undefined2.get() > 0) {
        const value2 = obj.get();
        paddingTop = (value2 - obj2.get()) / 2;
      }
      let paddingLeft = 0;
      if (!c2) {
        paddingLeft = _undefined3.get() / 2;
      }
      return { paddingTop, paddingBottom: paddingTop, paddingLeft, paddingRight: paddingLeft };
    }
  }
  const items12 = [tmp39, tmp40, tmp41, tmp42];
  HuePickerTsx5.__closure = items12;
  HuePickerTsx5.__workletHash = 7167757714665;
  HuePickerTsx5.__initData = tmp38;
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(HuePickerTsx5);
  const items13 = [tmp.container, , , ];
  let containerFullWidth = flag;
  View = num(tmp3[9]).View;
  const tmp44 = closure_7;
  if (flag) {
    containerFullWidth = tmp.containerFullWidth;
  }
  const obj7 = { style: items13, children: items16 };
  items13[1] = containerFullWidth;
  items13[2] = style;
  items13[3] = animatedStyle1;
  const obj8 = { gesture: panGesture, children: closure_6(tmp45Result, obj9) };
  const GestureDetector = tmp2(tmp3[6]).GestureDetector;
  obj9 = { colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: items14, children: closure_6(tmp48, obj10) };
  items14 = [tmp.colorBar, ];
  let colorBarFullWidth = flag;
  tmp45Result = num(sharedValue[10]);
  if (flag) {
    colorBarFullWidth = tmp.colorBarFullWidth;
  }
  items14[1] = colorBarFullWidth;
  obj10 = { onLayout: callback1, style: items15 };
  items15 = [tmp.colorBarInner, , ];
  tmp48 = View;
  if (flag) {
    flag = tmp.colorBarInnerFullWidth;
  }
  items15[1] = flag;
  items15[2] = colorBarInnerStyle;
  items16 = [closure_6(GestureDetector, obj8), ];
  const obj11 = { onLayout: callback, pointerEvents: "box-none", style: items17 };
  items17 = [tmp.slider, sliderStyle, animatedStyle];
  items16[1] = closure_6(num(sharedValue[9]).View, obj11);
  return tmp44(View, obj7);
};
