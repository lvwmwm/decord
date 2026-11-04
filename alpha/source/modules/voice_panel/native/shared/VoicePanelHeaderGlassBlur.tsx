// Module ID: 14048
// Function ID: 14049
// Name: VoicePanelHeaderGlassBlur
// Dependencies: [19, 17, 21, 5141, 1377, 1652, 5771, 5772, 5377, 5735, 5148, 7101, 2]

// Module 14048 (VoicePanelHeaderGlassBlur)
import react_native from "react-native" /* 17 */;
import _mod1652 from "module_1652" /* 1652 */;
import shared from "shared" /* 5148 */;
import useThemeDefault from "useTheme" /* 5377 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5735 */;
import spring_spring from "spring/spring" /* 5771 */;
import springPresets from "springPresets" /* 5772 */;
import NativeViewDefault from "NativeView" /* 7101 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let num, num2, opacity;

let closure_4;
let hasOwnProperty;
const StyleSheet = react_native.StyleSheet;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { blur: { position: "absolute", top: 0, left: 0, right: 0 }, strokeContainer: { position: "absolute", left: 0, right: 0, bottom: -StyleSheet.hairlineWidth, height: StyleSheet.hairlineWidth }, stroke: { height: StyleSheet.hairlineWidth, opacity: 0.15, backgroundColor: "white" }, strokeAlt: { height: StyleSheet.hairlineWidth, opacity: 0.8, backgroundColor: "black" }, strokeAltLight: { height: StyleSheet.hairlineWidth, opacity: 0.2, backgroundColor: "black" } };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = PlatformUtils.isAndroid();
let closure_8 = { code: "(function VoicePanelHeaderGlassBlurTsx1(){let[shown,IS_ANDROID]=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};})" };
let closure_9 = { code: "(function VoicePanelHeaderGlassBlurTsx2(){let[withSpring,shown,Reanimated3DefaultSpringConfig]=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0,Reanimated3DefaultSpringConfig)};})" };
const memoResult = react.memo(function HeaderGlassBlur(shown) {
  let blurStyle;
  let items4;
  let items5;
  let items6;
  let items7;
  let style;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  shown = shown.shown;
  ({ blurStyle, style } = shown);
  let tmp = closure_6();
  let obj = _mod1652;
  const items = [closure_8, shown, closure_7];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  class VoicePanelHeaderGlassBlurTsx1 {
    constructor() {
      opacity = 0;
      if (closure_0.get()) {
        tmp = closure_1;
        num2 = 1;
        if (closure_1) {
          num2 = 0.7;
        }
        opacity = num2;
      }
      return { opacity };
    }
  }
  const items1 = [tmp5, tmp6];
  VoicePanelHeaderGlassBlurTsx1.__closure = items1;
  VoicePanelHeaderGlassBlurTsx1.__workletHash = 4561654385020;
  VoicePanelHeaderGlassBlurTsx1.__initData = tmp4;
  const animatedStyle = obj.useAnimatedStyle(VoicePanelHeaderGlassBlurTsx1);
  const items2 = [closure_9, , , ];
  const useAnimatedProps = _mod1652.useAnimatedProps;
  _mod1652;
  items2[1] = spring_spring.withSpring;
  items2[2] = shown;
  items2[3] = springPresets.Reanimated3DefaultSpringConfig;
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  class VoicePanelHeaderGlassBlurTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 0.3;
      }
      obj = { blurAmount: tmp(num, closure_2) };
      return obj;
    }
  }
  const items3 = [tmp10, tmp11, tmp12];
  VoicePanelHeaderGlassBlurTsx2.__closure = items3;
  VoicePanelHeaderGlassBlurTsx2.__workletHash = 10192062827186;
  VoicePanelHeaderGlassBlurTsx2.__initData = tmp9;
  const animatedProps = useAnimatedProps(VoicePanelHeaderGlassBlurTsx2);
  const tmp15 = useThemeDefault();
  const obj2 = { style: items4, children: items6 };
  items4 = [tmp.blur, style, animatedStyle];
  const View = _modDef1652.View;
  let str = "light";
  const tmp18 = VisualEffectViewAnimatedDefault;
  const tmp2Result3 = shared;
  if (tmp2Result3.isThemeDark(tmp15)) {
    str = "dark";
  }
  const obj3 = { blurStyle: "ultra-thin", blurTheme: str, style: items5, animatedProps };
  items5 = [StyleSheet.absoluteFillObject, blurStyle];
  items6 = [React3(tmp18, obj3), ];
  const obj4 = { style: tmp.strokeContainer, children: items7 };
  items7 = [, ];
  const obj5 = { style: tmp.stroke };
  const tmp14Result = NativeViewDefault;
  items7[0] = React3(NativeViewDefault, obj5);
  const tmp14Result2 = NativeViewDefault;
  const tmp2Result4 = shared;
  const obj6 = { style: tmp2Result4.isThemeDark(tmp15) ? tmp.strokeAlt : tmp.strokeAltLight };
  items7[1] = React3(tmp14Result2, obj6);
  items6[1] = hasOwnProperty(tmp14Result, obj4);
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx");

export default memoResult;
