// Module ID: 8057
// Function ID: 8058
// Name: BackgroundBlurFill
// Dependencies: [19, 17, 21, 576, 4683, 4540, 5269, 4531, 5268, 4566, 5280, 5284, 2]
// Exports: BackgroundBlurFill, BackgroundBlurFillAnimated, BackgroundBlurFillWithPress

// Module 8057 (BackgroundBlurFill)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import VisualEffectView from "VisualEffectView" /* 5269 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import react from "react" /* 19 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let tmp4;
const VisualEffectViewAnimatedDefault = tmp4(5268);
const VisualEffectViewDefault = tmp4(5269);
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let ColorUtils = ColorUtils_mod;
let closure_6 = ColorUtils.hexWithOpacity(BLACK, 0);
ColorUtils = ColorUtils_mod;
let closure_7 = ColorUtils.hexWithOpacity(BLACK, 0.2);
ColorUtils = ColorUtils_mod;
let closure_8 = ColorUtils.hexWithOpacity(BLACK, 0.4);
ColorUtils = ColorUtils_mod;
let closure_9 = ColorUtils.hexWithOpacity(BLACK, 0.5);
const __initData = { code: "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const __initData2 = { code: "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING}=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,'animate-always')};}" };
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx");

export const BlurTheme = VisualEffectView.BlurTheme;
export const BlurStyle = VisualEffectView.BlurStyle;
export const BackgroundBlurFill = function BackgroundBlurFill(arg0) {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let blurAmount;
  let blurStyle;
  let blurTheme;
  let style;
  let tintColor;
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  const obj = blurTheme(4540);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  const obj2 = react;
  if (blurStyle == null) {
    blurStyle = react.useMemo(() => {
      let str = "ultra-thin";
      const obj = pressed(closure_2[6]);
      if (obj.isBlurThemeLight(blurTheme)) {
        str = "default";
      }
      return str;
    }, items);
  }
  const items1 = [blurTheme];
  if (tintColor == null) {
    tintColor = obj2.useMemo(() => {
      const obj = blurTheme(dependencyMap[6]);
      return obj.isBlurThemeLight(blurTheme) ? closure_2_6 : closure_2_8;
    }, items1);
  }
  const useToken = blurTheme(4531).useToken;
  blurTheme(4531);
  const BACKGROUND_SCRIM = nativeDefault.colors.BACKGROUND_SCRIM;
  const tmpResult2 = blurTheme(5269);
  if (android_fallbackColor == null) {
    android_fallbackColor = useToken(BACKGROUND_SCRIM, tmpResult2.normalizeBlurTheme(blurTheme));
  }
  const items2 = [StyleSheet.absoluteFill, style];
  return jsx(VisualEffectViewDefault, { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: items2 });
};
export const BackgroundBlurFillAnimated = function BackgroundBlurFillAnimated(arg0) {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let animatedProps;
  let blurAmount;
  let blurStyle;
  let blurTheme;
  let items2;
  let style;
  let tintColor;
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor, animatedProps } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  let obj = blurTheme(4540);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  const obj2 = react;
  if (blurStyle == null) {
    blurStyle = react.useMemo(() => {
      let str = "ultra-thin";
      const obj = pressed(closure_2[6]);
      if (obj.isBlurThemeLight(blurTheme)) {
        str = "default";
      }
      return str;
    }, items);
  }
  const items1 = [blurTheme];
  if (tintColor == null) {
    tintColor = obj2.useMemo(() => {
      const obj = blurTheme(dependencyMap[6]);
      return obj.isBlurThemeLight(blurTheme) ? closure_2_6 : closure_2_8;
    }, items1);
  }
  const useToken = blurTheme(4531).useToken;
  blurTheme(4531);
  const BACKGROUND_SCRIM = nativeDefault.colors.BACKGROUND_SCRIM;
  const tmpResult2 = blurTheme(5269);
  if (android_fallbackColor == null) {
    android_fallbackColor = useToken(BACKGROUND_SCRIM, tmpResult2.normalizeBlurTheme(blurTheme));
  }
  const obj3 = { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: items2 };
  items2 = [StyleSheet.absoluteFill, style];
  let tmp7 = null != animatedProps;
  const tmp4Result = VisualEffectViewAnimatedDefault;
  const tmp5 = jsx;
  if (tmp7) {
    tmp7 = { animatedProps };
    const obj4 = { animatedProps };
  }
  const merged = Object.assign(tmp7);
  return tmp5(tmp4Result, obj3);
};
export const BackgroundBlurFillWithPress = function BackgroundBlurFillWithPress(style) {
  let blurTheme;
  let closure_1;
  let closure_2;
  let items1;
  let pressed;
  ({ blurTheme, pressed } = style);
  style = style.style;
  importDefault = undefined;
  dependencyMap = undefined;
  let token;
  let token1;
  let c5;
  const merged = Object.assign(style, Object.assign({ style: 0, blurTheme: 0, pressed: 0 }));
  let obj = pressed(4540);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  let items = [blurTheme];
  const memo = token.useMemo(() => {
    let str = "ultra-thin";
    const obj = pressed(closure_2[6]);
    if (obj.isBlurThemeLight(blurTheme)) {
      str = "default";
    }
    return str;
  }, items);
  const tmp2Result = pressed(5269);
  const normalizeBlurThemeResult = tmp2Result.normalizeBlurTheme(blurTheme);
  const tmp2Result8 = pressed(5269);
  const tmp6 = tmp2Result8.isBlurThemeLight(blurTheme) ? closure_6 : closure_8;
  importDefault = tmp6;
  const tmp2Result9 = pressed(5269);
  const tmp7 = tmp2Result9.isBlurThemeLight(blurTheme) ? closure_7 : closure_9;
  dependencyMap = tmp7;
  const tmp2Result10 = pressed(4531);
  token = tmp2Result10.useToken(nativeDefault.colors.BACKGROUND_SCRIM, normalizeBlurThemeResult);
  const tmp2Result11 = pressed(4531);
  token1 = tmp2Result11.useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, normalizeBlurThemeResult);
  const tmp2Result12 = pressed(5269);
  const isBlurDisabledResult = tmp2Result12.isBlurDisabled(merged);
  c5 = isBlurDisabledResult;
  const fn = function p() {
    let interpolateColorResult;
    let withSpring;
    const obj = { backgroundColor: withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always") };
    withSpring = spring.withSpring;
    spring;
    const items = [token, token1];
    const obj2 = ReanimatedRexport;
    interpolateColorResult = obj2.interpolateColor(pressed.get(), [0, 1], items);
    return obj;
  };
  const tmp2Result13 = pressed(4566);
  let obj2 = { withSpring: tmp2(5280).withSpring, interpolateColor: tmp2(4566).interpolateColor, pressed, fallbackColor: token, fallbackColorPressed: token1, ON_PRESS_SPRING: tmp2(5284).ON_PRESS_SPRING };
  fn.__closure = obj2;
  fn.__workletHash = 10497618157620;
  fn.__initData = __initData;
  let animatedStyle = tmp2Result13.useAnimatedStyle(fn);
  const tmp2Result14 = pressed(4566);
  class C {
    constructor() {
      let tintColor;
      if (!c5) {
        const withSpring = spring.withSpring;
        spring;
        const items = [closure_1, closure_2];
        const obj = ReanimatedRexport;
        const interpolateColorResult = obj.interpolateColor(pressed.get(), [0, 1], items);
        tintColor = withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always");
      }
      return { tintColor };
    }
  }
  C.__closure = { shouldUseFallback: isBlurDisabledResult, withSpring: pressed(5280).withSpring, interpolateColor: pressed(4566).interpolateColor, pressed, restingTint: tmp6, pressedTint: tmp7, ON_PRESS_SPRING: pressed(5284).ON_PRESS_SPRING };
  C.__workletHash = 11987567486157;
  C.__initData = __initData2;
  ({ shouldUseFallback: isBlurDisabledResult, withSpring: pressed(5280).withSpring, interpolateColor: pressed(4566).interpolateColor, pressed, restingTint: tmp6, pressedTint: tmp7, ON_PRESS_SPRING: pressed(5284).ON_PRESS_SPRING });
  const animatedProps = tmp2Result14.useAnimatedProps(C);
  const obj4 = { blurTheme, blurStyle: memo, style: items1 };
  items1 = [token1.absoluteFill, style, ];
  const tmp12 = c5;
  const tmp13 = VisualEffectViewAnimatedDefault;
  if (!isBlurDisabledResult) {
    animatedStyle = {};
  }
  items1[2] = animatedStyle;
  let tmp14 = !isBlurDisabledResult;
  if (tmp14) {
    tmp14 = { animatedProps };
    const obj5 = { animatedProps };
  }
  const merged1 = Object.assign(tmp14);
  return tmp12(tmp13, obj4);
};
