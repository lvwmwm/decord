// Module ID: 14157
// Function ID: 14158
// Name: SaturationValueColorPicker
// Dependencies: [32, 19, 17, 21, 4836, 576, 4566, 14155, 5293, 6073, 2]
// Exports: default

// Module 14157 (SaturationValueColorPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14155 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault, set, set2;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
function ColorBox(hue) {
  let closure_1;
  let colorBoxInnerStyle;
  let colorBoxStyle;
  let first;
  let items;
  let items1;
  let items2;
  let obj4;
  let obj5;
  let tmp8;
  hue = hue.hue;
  ({ colorBoxStyle, colorBoxInnerStyle } = hue);
  const tmp = closure_8();
  [first] = react.useState("rgb(0,0,0)");
  importDefault = tmp4;
  const tmp5 = hue(4566);
  class S {
    constructor() {
      const obj = ColorPickerUtils;
      const obj2 = { h: hue.get(), s: 1, l: 0.5 };
      return obj.hslToRgbWorklet(obj2);
    }
  }
  let obj = { hslToRgbWorklet: hue(14155).hslToRgbWorklet, hue };
  const useAnimatedReaction = tmp5.useAnimatedReaction;
  S.__closure = obj;
  S.__workletHash = 8814597686728;
  S.__initData = __initData;
  const fn = function v(arg0, arg1) {
    if (arg0 !== arg1) {
      const _HermesInternal = HermesInternal;
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(closure_1);
      runOnJSResult("rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
    }
  };
  let obj2 = { runOnJS: hue(4566).runOnJS, setColor: tmp4 };
  fn.__closure = obj2;
  fn.__workletHash = 14688428173537;
  fn.__initData = __initData2;
  const animatedReaction = useAnimatedReaction(S, fn);
  const obj3 = { style: items, colors: items1, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, children: closure_6(tmp8, obj4) };
  items = [tmp.colorBox, colorBoxStyle];
  items1 = ["rgb(255,255,255)", first];
  obj4 = { colors: ["rgba(0, 0, 0, 0)", "#000"], children: closure_6(View, obj5) };
  obj5 = { style: items2 };
  items2 = [tmp.colorBoxInner, colorBoxInnerStyle];
  const tmp7 = LinearGradientDefault;
  tmp8 = LinearGradientDefault;
  return closure_6(tmp7, obj3);
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { justifyContent: "center", alignItems: "center", position: "relative" }, selector: size, colorBox: obj2, colorBoxInner: { minHeight: 240, minWidth: 240 } };
size = { top: 0, left: 0, position: "absolute", width: 24, height: 24, borderRadius: nativeDefault.radii.md, borderWidth: 2 };
createStyles = createStyles.createStyles;
obj2 = { overflow: "hidden", borderRadius: nativeDefault.radii.xs };
let closure_8 = createStyles(obj);
const __initData = { code: "function SaturationValueColorPickerTsx1(){const{hslToRgbWorklet,hue}=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});}" };
const __initData2 = { code: "function SaturationValueColorPickerTsx2(result,previous){const{runOnJS,setColor}=this.__closure;if(result!==previous)runOnJS(setColor)(\"rgb(\"+result[0]+\", \"+result[1]+\", \"+result[2]+\")\");}" };
const __initData3 = { code: "function SaturationValueColorPickerTsx3(event){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData4 = { code: "function SaturationValueColorPickerTsx4(event){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(event.x/width));value.set(1-normalizeValue(event.y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
const __initData5 = { code: "function SaturationValueColorPickerTsx5(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
const __initData6 = { code: "function SaturationValueColorPickerTsx6(){const{hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight}=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:\"rgb(\"+bgRgb[0]+\", \"+bgRgb[1]+\", \"+bgRgb[2]+\")\"};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/color_picker/native/SaturationValueColorPicker.tsx");

export default function SaturationValueColorPicker(hue) {
  let closure_4;
  let colorBoxInnerStyle;
  let colorBoxStyle;
  let first;
  let fn;
  let fn2;
  let fn3;
  let items1;
  let items2;
  let items3;
  let obj7;
  let onPanFinalize;
  let onPanUpdate;
  let selectorStyle;
  let style;
  hue = hue.hue;
  const saturation = hue.saturation;
  const value = hue.value;
  dependencyMap = value;
  ({ onPanUpdate, onPanFinalize } = hue);
  let colorBoxWidth;
  react = undefined;
  closure_8 = undefined;
  ({ style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = hue);
  let tmp = closure_8();
  let tmp2 = colorBoxWidth(react.useState(0), 2);
  colorBoxWidth = tmp2[0];
  react = tmp2[1];
  const tmp4 = colorBoxWidth(react.useState(0), 2);
  const first1 = tmp4[0];
  let closure_6 = tmp4[1];
  const tmp6 = colorBoxWidth(react.useState(0), 2);
  const first2 = tmp6[0];
  closure_8 = tmp6[1];
  let obj = { onBegin: fn, onUpdate: fn2, onFinalize: fn3 };
  fn = function _(arg0) {
    set = saturation.set;
    const obj = hue(dependencyMap[7]);
    const result = set(obj.normalizeValue(arg0.x / first));
    set2 = dependencyMap.set;
    const obj2 = hue(dependencyMap[7]);
    set2(1 - obj2.normalizeValue(arg0.y / first1));
    const tmp = hue;
    const tmp2 = dependencyMap;
    if (null != onPanUpdate) {
      const tmpResult = tmp(tmp2[6]);
      tmpResult.runOnJS(tmp5)();
    }
  };
  const tmp8 = hue(6073);
  size = { saturation, normalizeValue: hue(14155).normalizeValue, width: colorBoxWidth, value, height: first1, onPanUpdate, runOnJS: hue(4566).runOnJS };
  const usePanGesture = tmp8.usePanGesture;
  fn.__closure = size;
  fn.__workletHash = 1039948278130;
  fn.__initData = __initData3;
  fn2 = function h(arg0) {
    set = saturation.set;
    const obj = hue(dependencyMap[7]);
    const result = set(obj.normalizeValue(arg0.x / first));
    set2 = dependencyMap.set;
    const obj2 = hue(dependencyMap[7]);
    set2(1 - obj2.normalizeValue(arg0.y / first1));
    const tmp = hue;
    const tmp2 = dependencyMap;
    if (null != onPanUpdate) {
      const tmpResult = tmp(tmp2[6]);
      tmpResult.runOnJS(tmp5)();
    }
  };
  const size1 = { saturation, normalizeValue: hue(14155).normalizeValue, width: colorBoxWidth, value, height: first1, onPanUpdate, runOnJS: hue(4566).runOnJS };
  fn2.__closure = size1;
  fn2.__workletHash = 3656850328181;
  fn2.__initData = __initData4;
  fn3 = function c() {
    if (null != onPanFinalize) {
      const obj = hue(dependencyMap[6]);
      obj.runOnJS(tmp)();
    }
  };
  let obj2 = { onPanFinalize, runOnJS: hue(4566).runOnJS };
  fn3.__closure = obj2;
  fn3.__workletHash = 12553589408812;
  fn3.__initData = __initData5;
  const panGesture = usePanGesture(obj);
  const obj5 = hue(4566);
  const fn4 = function z() {
    let items;
    const obj = ColorPickerUtils;
    const obj2 = { h: hue.get(), s: saturation.get(), v: dependencyMap.get() };
    const hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj2);
    const hsvToRgbWorklet = ColorPickerUtils.hsvToRgbWorklet;
    const obj3 = { h: hue.get(), s: 0, v: Math.round(1 - dependencyMap.get()) };
    const hsvToRgbWorkletResult1 = hsvToRgbWorklet(obj3);
    const obj4 = { backgroundColor: "rgb(" + hsvToRgbWorkletResult[0] + ", " + hsvToRgbWorkletResult[1] + ", " + hsvToRgbWorkletResult[2] + ")", transform: items, borderColor: "rgb(" + hsvToRgbWorkletResult1[0] + ", " + hsvToRgbWorkletResult1[1] + ", " + hsvToRgbWorkletResult1[2] + ")" };
    items = [{ translateX: first * saturation.get() }, ];
    ({ translateX: first * saturation.get() });
    items[1] = { translateY: first1 * (1 - dependencyMap.get()) };
    ({ translateY: first1 * (1 - dependencyMap.get()) });
    return obj4;
  };
  let obj3 = { hsvToRgbWorklet: hue(14155).hsvToRgbWorklet, hue, saturation, value, colorBoxWidth, colorBoxHeight: first1 };
  fn4.__closure = obj3;
  fn4.__workletHash = 15029576157619;
  fn4.__initData = __initData6;
  const animatedStyle = obj5.useAnimatedStyle(fn4);
  const callback = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const height = layout.height;
    closure_4(layout.width);
    closure_6(height);
  }, []);
  let items = [first2, colorBoxWidth, first1];
  const callback1 = react.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.width);
  }, []);
  let result = first2 / 2;
  let obj4 = { style: items1, children: items2 };
  items1 = [
    tmp.container,
    style,
    react.useMemo(() => {
      size = { height: first1 + first2, width: first + first2 };
      return size;
    }, items)
  ];
  const obj6 = { gesture: panGesture, children: closure_6(first1, obj7) };
  obj7 = { onLayout: callback, hitSlop: { top: result, bottom: result, left: result, right: result }, children: closure_6(ColorBox, { hue, colorBoxStyle, colorBoxInnerStyle }) };
  const GestureDetector = hue(6073).GestureDetector;
  items2 = [closure_6(GestureDetector, obj6), ];
  const obj8 = { onLayout: callback1, pointerEvents: "box-none", style: items3 };
  items3 = [tmp.selector, animatedStyle, selectorStyle];
  items2[1] = closure_6(saturation(4566).View, obj8);
  return first2(first1, obj4);
};
