// Module ID: 17076
// Function ID: 17077
// Name: SaturationValueColorPicker
// Dependencies: [32, 19, 17, 21, 5306, 575, 1655, 17074, 1708, 5893, 5598, 2]
// Exports: default

// Module 17076 (SaturationValueColorPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import ColorPickerUtils from "ColorPickerUtils" /* 17074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
let _HermesInternal, importDefault, str, str2, str3, str4, str5;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let tmp5;
const _mod1708 = tmp5(1708);
function ColorBox(arg0) {
  let colorBoxInnerStyle;
  let colorBoxStyle;
  let hue;
  let items4;
  let items5;
  let items6;
  let obj2;
  let obj3;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp3;
  let tmp4;
  let tmp8;
  let tmp9;
  ({ hue, colorBoxStyle, colorBoxInnerStyle } = arg0);
  const tmp = closure_8();
  [tmp3, tmp4] = _slicedToArray(react.useState("rgb(0,0,0)"), 2);
  const items = [closure_9, , ];
  const tmp2 = _slicedToArray(react.useState("rgb(0,0,0)"), 2);
  const useAnimatedReaction = _mod1655.useAnimatedReaction;
  _mod1655;
  items[1] = ColorPickerUtils.hslToRgbWorklet;
  items[2] = hue;
  let c0;
  let c1;
  [tmp8, tmp9, tmp10] = items;
  class SaturationValueColorPickerTsx1 {
    constructor() {
      obj = { h: closure_1.get(), s: 1, l: 0.5 };
      return closure_0(obj);
    }
  }
  const items1 = [tmp9, tmp10];
  SaturationValueColorPickerTsx1.__closure = items1;
  SaturationValueColorPickerTsx1.__workletHash = 16511625483345;
  SaturationValueColorPickerTsx1.__initData = tmp8;
  const items2 = [closure_10, _mod1708.scheduleOnRN, tmp4];
  c0 = undefined;
  c1 = undefined;
  [tmp11, tmp12, tmp13] = items2;
  class SaturationValueColorPickerTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = globalThis;
        _HermesInternal = HermesInternal;
        str = ")";
        str2 = ", ";
        str3 = "rgb(";
        str4 = ", ";
        str5 = ", ";
        tmp4 = closure_0(closure_1, "rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
      }
      return;
    }
  }
  const items3 = [tmp12, tmp13];
  SaturationValueColorPickerTsx2.__closure = items3;
  SaturationValueColorPickerTsx2.__workletHash = 3512294390005;
  SaturationValueColorPickerTsx2.__initData = tmp11;
  const animatedReaction = useAnimatedReaction(SaturationValueColorPickerTsx1, SaturationValueColorPickerTsx2);
  let obj = { style: items4, colors: items5, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, children: metroRequire(tmp16, obj2) };
  items4 = [tmp.colorBox, colorBoxStyle];
  items5 = ["rgb(255,255,255)", tmp3];
  obj2 = { colors: ["rgba(0, 0, 0, 0)", "#000"], children: metroRequire(View, obj3) };
  obj3 = { style: items6 };
  items6 = [tmp.colorBoxInner, colorBoxInnerStyle];
  const tmp15 = LinearGradientDefault;
  tmp16 = LinearGradientDefault;
  return metroRequire(tmp15, obj);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { justifyContent: "center", alignItems: "center", position: "relative" }, selector: size, colorBox: obj2, colorBoxInner: { minHeight: 240, minWidth: 240 } };
size = { top: 0, left: 0, position: "absolute", width: 24, height: 24, borderRadius: nativeDefault.radii.md, borderWidth: 2 };
createStyles = createStyles.createStyles;
obj2 = { overflow: "hidden", borderRadius: nativeDefault.radii.xs };
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function SaturationValueColorPickerTsx1(){let[hslToRgbWorklet,hue]=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});})" };
let closure_10 = { code: "(function SaturationValueColorPickerTsx2(result,previous){let[scheduleOnRN,setColor]=this.__closure;if(result!==previous)scheduleOnRN(setColor,\"rgb(\"+result[0]+\", \"+result[1]+\", \"+result[2]+\")\");})" };
let closure_12 = { code: "(function SaturationValueColorPickerTsx3(event){let[saturation,normalizeValue,width,value,height,onPanUpdate,scheduleOnRN]=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&scheduleOnRN(onPanUpdate);})" };
let closure_13 = { code: "(function SaturationValueColorPickerTsx4(event){let[saturation,normalizeValue,width,value,height,onPanUpdate,scheduleOnRN]=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&scheduleOnRN(onPanUpdate);})" };
let closure_14 = { code: "(function SaturationValueColorPickerTsx5(){let[onPanFinalize,scheduleOnRN]=this.__closure;onPanFinalize!=null&&scheduleOnRN(onPanFinalize);})" };
let closure_15 = { code: "(function SaturationValueColorPickerTsx6(){let[hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight]=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:\"rgb(\"+bgRgb[0]+\", \"+bgRgb[1]+\", \"+bgRgb[2]+\")\"};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/color_picker/native/SaturationValueColorPicker.tsx");

export default function SaturationValueColorPicker(arg0) {
  let closure_3;
  let closure_5;
  let colorBoxInnerStyle;
  let colorBoxStyle;
  let first;
  let first1;
  let first2;
  let hue;
  let items10;
  let items11;
  let items9;
  let obj5;
  let onPanFinalize;
  let onPanUpdate;
  let saturation;
  let selectorStyle;
  let style;
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
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let value;
  ({ hue, saturation, value, onPanUpdate } = arg0);
  first = undefined;
  importDefault = undefined;
  first1 = undefined;
  closure_3 = undefined;
  first2 = undefined;
  closure_5 = undefined;
  ({ onPanFinalize, style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = arg0);
  let tmp = closure_8();
  let obj = react;
  [first, importDefault] = react.useState(0);
  [first1, closure_3] = react.useState(0);
  [first2, closure_5] = react.useState(0);
  let items = [closure_12, saturation, , , , , , ];
  const usePanGesture = LegacyBaseButton.usePanGesture;
  LegacyBaseButton;
  items[2] = ColorPickerUtils.normalizeValue;
  items[3] = first;
  items[4] = value;
  items[5] = first1;
  items[6] = onPanUpdate;
  items[7] = _mod1708.scheduleOnRN;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  let obj2 = { onBegin: SaturationValueColorPickerTsx3, onUpdate: SaturationValueColorPickerTsx4, onFinalize: SaturationValueColorPickerTsx5 };
  class SaturationValueColorPickerTsx3 {
    constructor(arg0) {
      const result = _undefined.set(_undefined2(arg0.x / c2));
      const result1 = _undefined3.set(1 - _undefined2(arg0.y / c4));
      if (null != c5) {
        _undefined4(tmp3);
      }
    }
  }
  const items1 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  SaturationValueColorPickerTsx3.__closure = items1;
  SaturationValueColorPickerTsx3.__workletHash = 12886468679050;
  SaturationValueColorPickerTsx3.__initData = tmp11;
  const items2 = [closure_13, saturation, ColorPickerUtils.normalizeValue, first, value, first1, onPanUpdate, _mod1708.scheduleOnRN];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items2;
  class SaturationValueColorPickerTsx4 {
    constructor(arg0) {
      const result = _undefined.set(_undefined2(arg0.x / c2));
      const result1 = _undefined3.set(1 - _undefined2(arg0.y / c4));
      if (null != c5) {
        _undefined4(tmp3);
      }
    }
  }
  const items3 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  SaturationValueColorPickerTsx4.__closure = items3;
  SaturationValueColorPickerTsx4.__workletHash = 11287600813869;
  SaturationValueColorPickerTsx4.__initData = tmp19;
  const items4 = [closure_14, onPanFinalize, _mod1708.scheduleOnRN];
  c0 = undefined;
  c1 = undefined;
  [tmp27, tmp28, tmp29] = items4;
  class SaturationValueColorPickerTsx5 {
    constructor() {
      if (null != c0) {
        _undefined(tmp);
      }
    }
  }
  const items5 = [tmp28, tmp29];
  SaturationValueColorPickerTsx5.__closure = items5;
  SaturationValueColorPickerTsx5.__workletHash = 13952547708884;
  SaturationValueColorPickerTsx5.__initData = tmp27;
  const panGesture = usePanGesture(obj2);
  const items6 = [closure_15, , , , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items6[1] = ColorPickerUtils.hsvToRgbWorklet;
  items6[2] = hue;
  items6[3] = saturation;
  items6[4] = value;
  items6[5] = first;
  items6[6] = first1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items6;
  class SaturationValueColorPickerTsx6 {
    constructor() {
      let items;
      const obj = { h: _undefined2.get(), s: _undefined3.get(), v: _undefined4.get() };
      const tmp = _undefined(obj);
      const obj2 = { h: _undefined2.get(), s: 0, v: Math.round(1 - _undefined4.get()) };
      const tmp2 = _undefined(obj2);
      const obj3 = { backgroundColor: "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")", transform: items, borderColor: "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")" };
      items = [{ translateX: c4 * _undefined3.get() }, ];
      ({ translateX: c4 * _undefined3.get() });
      items[1] = { translateY: c5 * (1 - _undefined4.get()) };
      ({ translateY: c5 * (1 - _undefined4.get()) });
      return obj3;
    }
  }
  const items7 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  SaturationValueColorPickerTsx6.__closure = items7;
  SaturationValueColorPickerTsx6.__workletHash = 2440308818282;
  SaturationValueColorPickerTsx6.__initData = tmp32;
  const animatedStyle = useAnimatedStyle(SaturationValueColorPickerTsx6);
  const callback = obj.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    closure_1(layout.width);
    closure_3(height);
  }, []);
  const items8 = [first2, first, first1];
  const callback1 = obj.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.width);
  }, []);
  let result = first2 / 2;
  let obj3 = { style: items9, children: items10 };
  items9 = [
    tmp.container,
    style,
    obj.useMemo(() => {
      size = { height: first1 + first2, width: first + first2 };
      return size;
    }, items8)
  ];
  const obj4 = { gesture: panGesture, children: metroRequire(View, obj5) };
  obj5 = { onLayout: callback, hitSlop: { top: result, bottom: result, left: result, right: result }, children: metroRequire(ColorBox, { hue, colorBoxStyle, colorBoxInnerStyle }) };
  const GestureDetector = tmp8(5598).GestureDetector;
  items10 = [metroRequire(GestureDetector, obj4), ];
  const obj6 = { onLayout: callback1, pointerEvents: "box-none", style: items11 };
  items11 = [tmp.selector, animatedStyle, selectorStyle];
  items10[1] = metroRequire(_modDef1655.View, obj6);
  return metroImportDefault(View, obj3);
};
