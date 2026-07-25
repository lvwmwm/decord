// Module ID: 11372
// Function ID: 88356
// Name: StyleSheet
// Dependencies: [31, 27, 33, 4131, 477, 3992, 4543, 4067, 7620, 4533, 3977, 5515, 2]

// Module 11372 (StyleSheet)
import { StyleSheet } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import importAllResult from "result";
import set from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = { position: "absolute", left: 0, right: 0, bottom: -StyleSheet.hairlineWidth, height: StyleSheet.hairlineWidth };
obj = { height: StyleSheet.hairlineWidth, opacity: 0.15, backgroundColor: "white" };
_createForOfIteratorHelperLoose = { height: StyleSheet.hairlineWidth, opacity: 0.8, backgroundColor: "black" };
let obj2 = { height: StyleSheet.hairlineWidth, opacity: 0.2, backgroundColor: "black" };
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ blur: { position: "absolute", top: 0, left: 0, right: 0 }, strokeContainer: obj, stroke: obj, strokeAlt: _createForOfIteratorHelperLoose, strokeAltLight: obj2 });
set = set.isAndroid();
let closure_8 = { code: "function VoicePanelHeaderGlassBlurTsx1(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}" };
let closure_9 = { code: "function VoicePanelHeaderGlassBlurTsx2(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}" };
const result = set.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx");

export default require("result").memo(function HeaderGlassBlur(shown) {
  let blurStyle;
  let style;
  shown = shown.shown;
  ({ blurStyle, style } = shown);
  const tmp = callback2();
  let obj = shown(3992);
  const fn = function k() {
    const obj = {};
    let num = 0;
    if (shown.get()) {
      let num2 = 1;
      if (outer1_7) {
        num2 = 0.7;
      }
      num = num2;
    }
    obj.opacity = num;
    return obj;
  };
  obj = { shown, IS_ANDROID: set };
  fn.__closure = obj;
  fn.__workletHash = 3451055086565;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = shown(3992);
  const fn2 = function p() {
    const obj = {};
    let num = 0;
    if (shown.get()) {
      num = 0.3;
    }
    obj.blurAmount = shown(outer1_2[6]).withSpring(num);
    return obj;
  };
  obj = { withSpring: shown(4543).withSpring, shown };
  fn2.__closure = obj;
  fn2.__workletHash = 5642055202507;
  fn2.__initData = closure_9;
  const animatedProps = obj2.useAnimatedProps(fn2);
  const tmp4 = importDefault(4067)();
  const obj1 = { style: items };
  items = [tmp.blur, style, animatedStyle];
  obj2 = { blurStyle: "ultra-thin" };
  const tmp5 = closure_5;
  const tmp6 = importDefault(7620);
  const tmp7 = callback;
  const tmp8 = importDefault(4533);
  let str = "light";
  if (obj7.isThemeDark(tmp4)) {
    str = "dark";
  }
  obj2.blurTheme = str;
  const items1 = [StyleSheet.absoluteFillObject, blurStyle];
  obj2.style = items1;
  obj2.animatedProps = animatedProps;
  const items2 = [tmp7(tmp8, obj2), ];
  const obj3 = { style: tmp.strokeContainer };
  obj7 = shown(3977);
  const tmp9 = closure_5;
  const items3 = [callback(importDefault(5515), { style: tmp.stroke }), ];
  const obj5 = {};
  const obj4 = { style: tmp.stroke };
  const tmp10 = importDefault(5515);
  const tmp11 = callback;
  const tmp12 = importDefault(5515);
  obj5.style = shown(3977).isThemeDark(tmp4) ? tmp.strokeAlt : tmp.strokeAltLight;
  items3[1] = tmp11(tmp12, obj5);
  obj3.children = items3;
  items2[1] = tmp9(tmp10, obj3);
  obj1.children = items2;
  return tmp5(tmp6, obj1);
});
