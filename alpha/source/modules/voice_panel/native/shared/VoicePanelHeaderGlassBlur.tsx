// Module ID: 13815
// Function ID: 13816
// Name: VoicePanelHeaderGlassBlur
// Dependencies: [19, 17, 21, 5014, 1375, 5095, 5637, 5253, 7241, 5599, 5021, 6960, 2]

// Module 13815 (VoicePanelHeaderGlassBlur)
import react_native from "react-native" /* 17 */;
import useThemeDefault from "useTheme" /* 5253 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5599 */;
import spring from "spring" /* 5637 */;
import NativeViewDefault from "NativeView" /* 6960 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7241 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const StyleSheet = react_native.StyleSheet;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { blur: { position: "absolute", top: 0, left: 0, right: 0 }, strokeContainer: { position: "absolute", left: 0, right: 0, bottom: -StyleSheet.hairlineWidth, height: StyleSheet.hairlineWidth }, stroke: { height: StyleSheet.hairlineWidth, opacity: 0.15, backgroundColor: "white" }, strokeAlt: { height: StyleSheet.hairlineWidth, opacity: 0.8, backgroundColor: "black" }, strokeAltLight: { height: StyleSheet.hairlineWidth, opacity: 0.2, backgroundColor: "black" } };
let closure_6 = createStyles.createStyles(obj);
const IS_ANDROID = PlatformUtils.isAndroid();
const __initData = { code: "function VoicePanelHeaderGlassBlurTsx1(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}" };
const __initData2 = { code: "function VoicePanelHeaderGlassBlurTsx2(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}" };
const memoResult = react.memo(function HeaderGlassBlur(shown) {
  let blurStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let style;
  shown = shown.shown;
  ({ blurStyle, style } = shown);
  const tmp = closure_6();
  let obj = shown(5095);
  const fn = function k() {
    let opacity = 0;
    if (shown.get()) {
      let num2 = 1;
      if (IS_ANDROID) {
        num2 = 0.7;
      }
      opacity = num2;
    }
    return { opacity };
  };
  const obj2 = { shown, IS_ANDROID };
  fn.__closure = obj2;
  fn.__workletHash = 3451055086565;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const fn2 = function p() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (shown.get()) {
      num = 0.3;
    }
    const obj = { blurAmount: withSpring(num) };
    return obj;
  };
  const obj3 = shown(5095);
  fn2.__closure = { withSpring: shown(5637).withSpring, shown };
  fn2.__workletHash = 5642055202507;
  fn2.__initData = __initData2;
  ({ withSpring: shown(5637).withSpring, shown });
  const animatedProps = obj3.useAnimatedProps(fn2);
  const tmp7 = useThemeDefault();
  const obj5 = { style: items, children: items2 };
  items = [tmp.blur, style, animatedStyle];
  const tmp9 = ReanimatedNativeViewDefault;
  let str = "light";
  const tmp11 = VisualEffectViewAnimatedDefault;
  const obj6 = shown(5021);
  const tmp2 = shown;
  if (obj6.isThemeDark(tmp7)) {
    str = "dark";
  }
  const obj7 = { blurStyle: "ultra-thin", blurTheme: str, style: items1, animatedProps };
  items1 = [StyleSheet.absoluteFillObject, blurStyle];
  items2 = [closure_4(tmp11, obj7), ];
  const obj8 = { style: tmp.strokeContainer, children: items3 };
  items3 = [, ];
  const obj9 = { style: tmp.stroke };
  const tmp6Result = NativeViewDefault;
  items3[0] = closure_4(NativeViewDefault, obj9);
  const tmp6Result2 = NativeViewDefault;
  const tmp2Result = tmp2(5021);
  const obj10 = { style: tmp2Result.isThemeDark(tmp7) ? tmp.strokeAlt : tmp.strokeAltLight };
  items3[1] = closure_4(tmp6Result2, obj10);
  items2[1] = closure_5(tmp6Result, obj8);
  return closure_5(tmp9, obj5);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx");

export default memoResult;
