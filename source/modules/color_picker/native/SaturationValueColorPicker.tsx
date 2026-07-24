// Module ID: 13623
// Function ID: 104659
// Name: ColorBox
// Dependencies: [57, 31, 27, 33, 4130, 689, 3991, 13621, 4554, 5217, 2]
// Exports: default

// Module 13623 (ColorBox)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function ColorBox(hue) {
  let colorBoxInnerStyle;
  let colorBoxStyle;
  hue = hue.hue;
  ({ colorBoxStyle, colorBoxInnerStyle } = hue);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState("rgb(0,0,0)"), 2);
  const importDefault = tmp3;
  let obj = hue(3991);
  class S {
    constructor() {
      obj = hue(outer1_2[7]);
      obj = { h: null, s: 1, l: 0.5 };
      obj.h = hue.get();
      return obj.hslToRgbWorklet(obj);
    }
  }
  obj = { hslToRgbWorklet: hue(13621).hslToRgbWorklet, hue };
  S.__closure = obj;
  S.__workletHash = 8814597686728;
  S.__initData = closure_9;
  const fn = function v(arg0, arg1) {
    if (arg0 !== arg1) {
      const _HermesInternal = HermesInternal;
      const obj = hue(outer1_2[6]);
      hue(outer1_2[6]).runOnJS(closure_1)("rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
      const runOnJSResult = hue(outer1_2[6]).runOnJS(closure_1);
    }
  };
  obj = { runOnJS: hue(3991).runOnJS, setColor: tmp3 };
  fn.__closure = obj;
  fn.__workletHash = 14688428173537;
  fn.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(S, fn);
  const obj1 = { style: items, colors: items1, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } };
  items = [tmp.colorBox, colorBoxStyle];
  items1 = ["rgb(255,255,255)", tmp2[0]];
  const obj2 = { colors: ["rgba(0, 0, 0, 0)", "#000"] };
  const items2 = [tmp.colorBoxInner, colorBoxInnerStyle];
  const tmp5 = importDefault(4554);
  obj2.children = callback2(View, { style: items2 });
  obj1.children = callback2(importDefault(4554), obj2);
  return callback2(tmp5, obj1);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { justifyContent: "center", alignItems: "center", position: "relative" } };
_createForOfIteratorHelperLoose = { top: 0, left: 0, position: "absolute", width: 24, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 2 };
_createForOfIteratorHelperLoose.selector = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.colorBox = { overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.colorBoxInner = { minHeight: 240, minWidth: 240 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = { code: "function SaturationValueColorPickerTsx1(){const{hslToRgbWorklet,hue}=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});}" };
let closure_10 = { code: "function SaturationValueColorPickerTsx2(result,previous){const{runOnJS,setColor}=this.__closure;if(result!==previous)runOnJS(setColor)(\"rgb(\"+result[0]+\", \"+result[1]+\", \"+result[2]+\")\");}" };
let closure_11 = { code: "function setSatVal_SaturationValueColorPickerTsx3({x:x,y:y}){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(x/width));value.set(1-normalizeValue(y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
let closure_12 = { code: "function SaturationValueColorPickerTsx4(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
let closure_13 = { code: "function SaturationValueColorPickerTsx5(){const{hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight}=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:\"rgb(\"+bgRgb[0]+\", \"+bgRgb[1]+\", \"+bgRgb[2]+\")\"};}" };
let obj1 = { overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/color_picker/native/SaturationValueColorPicker.tsx");

export default function SaturationValueColorPicker(hue) {
  let colorBoxInnerStyle;
  let colorBoxStyle;
  let onPanFinalize;
  let onPanUpdate;
  let selectorStyle;
  let style;
  hue = hue.hue;
  const saturation = hue.saturation;
  const value = hue.value;
  const dependencyMap = value;
  ({ onPanUpdate, onPanFinalize, style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = hue);
  let tmp = _createForOfIteratorHelperLoose();
  const tmp2 = first(React.useState(0), 2);
  first = tmp2[0];
  React = tmp2[1];
  const tmp4 = first(React.useState(0), 2);
  const first1 = tmp4[0];
  const callback2 = tmp4[1];
  const tmp6 = first(React.useState(0), 2);
  const first2 = tmp6[0];
  _createForOfIteratorHelperLoose = tmp6[1];
  let obj = { onPanUpdate, onPanFinalize };
  let obj1 = hue(3991);
  class B {
    constructor() {
      obj = hue(value[7]);
      obj = { h: hue.get(), s: saturation.get(), v: closure_2.get() };
      hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj);
      obj3 = hue(value[7]);
      obj1 = { h: hue.get(), s: 0, v: Math.round(1 - closure_2.get()) };
      hsvToRgbWorkletResult1 = obj3.hsvToRgbWorklet(obj1);
      obj2 = { backgroundColor: "rgb(" + hsvToRgbWorkletResult[0] + ", " + hsvToRgbWorkletResult[1] + ", " + hsvToRgbWorkletResult[2] + ")" };
      obj3 = { translateX: _slicedToArray * saturation.get() };
      items = [, ];
      items[0] = obj3;
      obj4 = { translateY: closure_5 * (1 - closure_2.get()) };
      items[1] = obj4;
      obj2.transform = items;
      obj2.borderColor = "rgb(" + hsvToRgbWorkletResult1[0] + ", " + hsvToRgbWorkletResult1[1] + ", " + hsvToRgbWorkletResult1[2] + ")";
      return obj2;
    }
  }
  obj = { hsvToRgbWorklet: hue(13621).hsvToRgbWorklet, hue, saturation, value, colorBoxWidth: first, colorBoxHeight: first1 };
  B.__closure = obj;
  B.__workletHash = 6880706874032;
  B.__initData = closure_13;
  const animatedStyle = obj1.useAnimatedStyle(B);
  const callback = React.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    React(layout.width);
    callback(layout.height);
  }, []);
  let items = [first2, first, first1];
  const callback1 = React.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  let result = first2 / 2;
  obj = {};
  const items1 = [tmp.container, style, React.useMemo(() => ({ height: first1 + first2, width: first + first2 }), items)];
  obj.style = items1;
  obj1 = {
    gesture: (function useGesture(saturation, value, first, first1, onPanUpdate) {
      let closure_0 = saturation;
      let closure_1 = value;
      let closure_2 = first;
      let _slicedToArray = first1;
      onPanUpdate = onPanUpdate.onPanUpdate;
      const onPanFinalize = onPanUpdate.onPanFinalize;
      const items = [first, first1, saturation, value, onPanUpdate, onPanFinalize];
      return {
        gesture: React.useMemo(() => {
          const tmp = (() => {
            function setSatVal(arg0) {
              let x;
              let y;
              ({ x, y } = arg0);
              const result = outer2_0.set(hue(value[7]).normalizeValue(x / outer2_2));
              const obj = hue(value[7]);
              const result1 = outer2_1.set(1 - hue(value[7]).normalizeValue(y / outer2_3));
              if (null != outer2_4) {
                hue(value[6]).runOnJS(outer2_4)();
                const obj3 = hue(value[6]);
              }
            }
            setSatVal.__closure = { saturation: outer1_0, normalizeValue: hue(value[7]).normalizeValue, width: outer1_2, value: outer1_1, height: outer1_3, onPanUpdate: outer1_4, runOnJS: hue(value[6]).runOnJS };
            setSatVal.__workletHash = 12832664740692;
            setSatVal.__initData = outer3_11;
            return setSatVal;
          })();
          const Gesture = hue(value[9]).Gesture;
          const PanResult = Gesture.Pan();
          const onBeginResult = Gesture.Pan().onBegin(tmp);
          const fn = function o() {
            if (null != outer1_5) {
              hue(value[6]).runOnJS(outer1_5)();
              const obj = hue(value[6]);
            }
          };
          const onUpdateResult = Gesture.Pan().onBegin(tmp).onUpdate(tmp);
          fn.__closure = { onPanFinalize, runOnJS: hue(value[6]).runOnJS };
          fn.__workletHash = 4207681669293;
          fn.__initData = outer2_12;
          return onUpdateResult.onFinalize(fn);
        }, items),
        saturation,
        value
      };
    })(saturation, value, first, first1, obj).gesture
  };
  let obj2 = { onLayout: callback, hitSlop: { top: result, bottom: result, left: result, right: result }, children: callback2(ColorBox, { hue, colorBoxStyle, colorBoxInnerStyle }) };
  obj1.children = callback2(first1, obj2);
  const items2 = [callback2(hue(5217).GestureDetector, obj1), ];
  const items3 = [tmp.selector, animatedStyle, selectorStyle];
  items2[1] = callback2(saturation(3991).View, { onLayout: callback1, pointerEvents: "box-none", style: items3 });
  obj.children = items2;
  return first2(first1, obj);
};
