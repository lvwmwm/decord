// Module ID: 13451
// Function ID: 102146
// Name: ColorBox
// Dependencies: []
// Exports: default

// Module 13451 (ColorBox)
function ColorBox(hue) {
  let colorBoxInnerStyle;
  let colorBoxStyle;
  hue = hue.hue;
  const arg1 = hue;
  ({ colorBoxStyle, colorBoxInnerStyle } = hue);
  const tmp = callback3();
  const tmp2 = callback(React.useState("rgb(0,0,0)"), 2);
  const importDefault = tmp3;
  let obj = arg1(dependencyMap[6]);
  class S {
    constructor() {
      obj = hue(closure_2[7]);
      obj = { "Null": 255, "Null": 4293643775, "Null": 65535 };
      obj.h = hue.get();
      return obj.hslToRgbWorklet(obj);
    }
  }
  obj = { hslToRgbWorklet: arg1(dependencyMap[7]).hslToRgbWorklet, hue };
  S.__closure = obj;
  S.__workletHash = 8814597686728;
  S.__initData = closure_9;
  const fn = function v(arg0, arg1) {
    if (arg0 !== arg1) {
      const _HermesInternal = HermesInternal;
      const obj = hue(closure_2[6]);
      hue(closure_2[6]).runOnJS(tmp3)("rgb(" + arg0[0] + ", " + arg0[1] + ", " + arg0[2] + ")");
      const runOnJSResult = hue(closure_2[6]).runOnJS(tmp3);
    }
  };
  obj = { runOnJS: arg1(dependencyMap[6]).runOnJS, setColor: tmp3 };
  fn.__closure = obj;
  fn.__workletHash = 14688428173537;
  fn.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(S, fn);
  const obj1 = { style: items, colors: items1, start: {}, end: {} };
  const items = [tmp.colorBox, colorBoxStyle];
  const items1 = [, tmp2[0]];
  const obj2 = { colors: [] };
  const items2 = [tmp.colorBoxInner, colorBoxInnerStyle];
  const tmp5 = importDefault(dependencyMap[8]);
  obj2.children = callback2(View, { style: items2 });
  obj1.children = callback2(importDefault(dependencyMap[8]), obj2);
  return callback2(tmp5, obj1);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {} };
obj = { padding: "M7 1v1h2V1H7Z", ks: "<string:1414594560>", bind: "<string:1907712401>", shapes: "apply", width: "<string:1638344529>", Object: "<string:8483257>", now: "<string:1895890944>", borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.selector = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.colorBox = { overflow: "hidden", borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.colorBoxInner = {};
let closure_8 = obj.createStyles(obj);
let closure_9 = { code: "function SaturationValueColorPickerTsx1(){const{hslToRgbWorklet,hue}=this.__closure;return hslToRgbWorklet({h:hue.get(),s:1,l:0.5});}" };
let closure_10 = { code: "function SaturationValueColorPickerTsx2(result,previous){const{runOnJS,setColor}=this.__closure;if(result!==previous)runOnJS(setColor)(\"rgb(\"+result[0]+\", \"+result[1]+\", \"+result[2]+\")\");}" };
let closure_11 = { code: "function setSatVal_SaturationValueColorPickerTsx3({x:x,y:y}){const{saturation,normalizeValue,width,value,height,onPanUpdate,runOnJS}=this.__closure;saturation.set(normalizeValue(x/width));value.set(1-normalizeValue(y/height));onPanUpdate!=null&&runOnJS(onPanUpdate)();}" };
let closure_12 = { code: "function SaturationValueColorPickerTsx4(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}" };
let closure_13 = { code: "function SaturationValueColorPickerTsx5(){const{hsvToRgbWorklet,hue,saturation,value,colorBoxWidth,colorBoxHeight}=this.__closure;const rgb=hsvToRgbWorklet({h:hue.get(),s:saturation.get(),v:value.get()});const bgRgb=hsvToRgbWorklet({h:hue.get(),s:0,v:Math.round(1-value.get())});return{backgroundColor:\"rgb(\"+rgb[0]+\", \"+rgb[1]+\", \"+rgb[2]+\")\",transform:[{translateX:colorBoxWidth*saturation.get()},{translateY:colorBoxHeight*(1-value.get())}],borderColor:\"rgb(\"+bgRgb[0]+\", \"+bgRgb[1]+\", \"+bgRgb[2]+\")\"};}" };
const obj1 = { overflow: "hidden", borderRadius: importDefault(dependencyMap[5]).radii.xs };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/color_picker/native/SaturationValueColorPicker.tsx");

export default function SaturationValueColorPicker(hue) {
  let colorBoxInnerStyle;
  let colorBoxStyle;
  let onPanFinalize;
  let onPanUpdate;
  let selectorStyle;
  let style;
  hue = hue.hue;
  const arg1 = hue;
  const saturation = hue.saturation;
  const importDefault = saturation;
  const value = hue.value;
  const dependencyMap = value;
  ({ onPanUpdate, onPanFinalize, style, colorBoxStyle, colorBoxInnerStyle, selectorStyle } = hue);
  const tmp = callback3();
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  let callback = first;
  const React = tmp2[1];
  const tmp4 = callback(React.useState(0), 2);
  const first1 = tmp4[0];
  const View = first1;
  const callback2 = tmp4[1];
  const tmp6 = callback(React.useState(0), 2);
  const first2 = tmp6[0];
  const callback3 = tmp6[1];
  let obj = { onPanUpdate, onPanFinalize };
  let obj1 = arg1(dependencyMap[6]);
  class B {
    constructor() {
      obj = hue(value[7]);
      obj = { h: hue.get(), s: saturation.get(), v: value.get() };
      hsvToRgbWorkletResult = obj.hsvToRgbWorklet(obj);
      obj3 = hue(value[7]);
      obj1 = { h: hue.get(), s: 0, v: Math.round(1 - value.get()) };
      hsvToRgbWorkletResult1 = obj3.hsvToRgbWorklet(obj1);
      obj2 = { backgroundColor: "rgb(" + hsvToRgbWorkletResult[0] + ", " + hsvToRgbWorkletResult[1] + ", " + hsvToRgbWorkletResult[2] + ")" };
      obj3 = { translateX: closure_3 * saturation.get() };
      items = [, ];
      items[0] = obj3;
      obj4 = { translateY: closure_5 * (1 - value.get()) };
      items[1] = obj4;
      obj2.transform = items;
      obj2.borderColor = "rgb(" + hsvToRgbWorkletResult1[0] + ", " + hsvToRgbWorkletResult1[1] + ", " + hsvToRgbWorkletResult1[2] + ")";
      return obj2;
    }
  }
  obj = { hsvToRgbWorklet: arg1(dependencyMap[7]).hsvToRgbWorklet, hue, saturation, value, colorBoxWidth: first, colorBoxHeight: first1 };
  B.__closure = obj;
  B.__workletHash = 6880706874032;
  B.__initData = closure_13;
  const animatedStyle = obj1.useAnimatedStyle(B);
  callback = React.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    React(layout.width);
    callback(layout.height);
  }, []);
  const items = [first2, first, first1];
  const callback1 = React.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const result = first2 / 2;
  obj = {};
  const items1 = [tmp.container, style, React.useMemo(() => ({ height: first1 + first2, width: first + first2 }), items)];
  obj.style = items1;
  obj1 = {
    gesture: function useGesture(saturation, value, first, first1, onPanUpdate) {
      const hue = saturation;
      saturation = value;
      value = first;
      first = first1;
      onPanUpdate = onPanUpdate.onPanUpdate;
      const React = onPanUpdate;
      const onPanFinalize = onPanUpdate.onPanFinalize;
      first1 = onPanFinalize;
      const items = [first, first1, saturation, value, onPanUpdate, onPanFinalize];
      return {
        gesture: React.useMemo(() => {
          const tmp = () => {
            function setSatVal(arg0) {
              let x;
              let y;
              ({ x, y } = arg0);
              const result = lib.set(lib(closure_2[7]).normalizeValue(x / closure_2));
              const obj = lib(closure_2[7]);
              const result1 = closure_1.set(1 - lib(closure_2[7]).normalizeValue(y / closure_3));
              if (null != closure_4) {
                lib(closure_2[6]).runOnJS(closure_4)();
                const obj3 = lib(closure_2[6]);
              }
            }
            setSatVal.__closure = { saturation: callback, normalizeValue: callback(closure_2[7]).normalizeValue, width: closure_2, value: closure_1, height: closure_3, onPanUpdate: closure_4, runOnJS: callback(closure_2[6]).runOnJS };
            setSatVal.__workletHash = 12832664740692;
            setSatVal.__initData = closure_11;
            return setSatVal;
          }();
          const Gesture = arg0(arg2[9]).Gesture;
          const PanResult = Gesture.Pan();
          const onBeginResult = Gesture.Pan().onBegin(tmp);
          const fn = function o() {
            if (null != closure_5) {
              callback(closure_2[6]).runOnJS(closure_5)();
              const obj = callback(closure_2[6]);
            }
          };
          const onUpdateResult = Gesture.Pan().onBegin(tmp).onUpdate(tmp);
          fn.__closure = { onPanFinalize, runOnJS: arg0(arg2[6]).runOnJS };
          fn.__workletHash = 4207681669293;
          fn.__initData = closure_12;
          return onUpdateResult.onFinalize(fn);
        }, items),
        saturation,
        value
      };
    }(saturation, value, first, first1, obj).gesture
  };
  const obj2 = { onLayout: callback, hitSlop: { top: result, bottom: result, left: result, right: result }, children: callback2(ColorBox, { hue, colorBoxStyle, colorBoxInnerStyle }) };
  obj1.children = callback2(View, obj2);
  const items2 = [callback2(arg1(dependencyMap[9]).GestureDetector, obj1), ];
  const items3 = [tmp.selector, animatedStyle, selectorStyle];
  items2[1] = callback2(importDefault(dependencyMap[6]).View, { onLayout: callback1, pointerEvents: "box-none", style: items3 });
  obj.children = items2;
  return first2(View, obj);
};
