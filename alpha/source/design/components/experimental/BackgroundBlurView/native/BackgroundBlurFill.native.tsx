// Module ID: 8326
// Function ID: 8327
// Name: BackgroundBlurFill
// Dependencies: [19, 17, 21, 575, 5140, 5209, 5738, 5734, 5737, 1652, 5773, 5774, 2]
// Exports: BackgroundBlurFill, BackgroundBlurFillAnimated, BackgroundBlurFillWithPress

// Module 8326 (BackgroundBlurFill)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import VisualEffectView from "VisualEffectView" /* 5738 */;
import react from "react" /* 19 */;
import ColorUtils_mod from "ColorUtils" /* 5140 */;
import size from "module_2" /* 2 */;

let tmp4;
const VisualEffectViewAnimatedDefault = tmp4(5737);
const VisualEffectViewDefault = tmp4(5738);
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
let closure_10 = { code: "(function BackgroundBlurFillNativeTsx1(){let[withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING]=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};})" };
let closure_11 = { code: "(function BackgroundBlurFillNativeTsx2(){let[shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING]=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,'animate-always')};})" };
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx");

export const BlurTheme = VisualEffectView.BlurTheme;
export const BlurStyle = VisualEffectView.BlurStyle;
export function BackgroundBlurFill(arg0) {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let blurAmount;
  let blurStyle;
  let blurTheme;
  let style;
  let tintColor;
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  const obj = blurTheme(5209);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  const obj2 = react;
  if (blurStyle == null) {
    blurStyle = react.useMemo(() => {
      let str = "ultra-thin";
      const obj = VisualEffectView;
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
  const useToken = blurTheme(5734).useToken;
  blurTheme(5734);
  const BACKGROUND_SCRIM = nativeDefault.colors.BACKGROUND_SCRIM;
  const tmpResult2 = blurTheme(5738);
  if (android_fallbackColor == null) {
    android_fallbackColor = useToken(BACKGROUND_SCRIM, tmpResult2.normalizeBlurTheme(blurTheme));
  }
  const items2 = [StyleSheet.absoluteFill, style];
  return jsx(VisualEffectViewDefault, { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: items2 });
}
export function BackgroundBlurFillAnimated(arg0) {
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
  let obj = blurTheme(5209);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  const obj2 = react;
  if (blurStyle == null) {
    blurStyle = react.useMemo(() => {
      let str = "ultra-thin";
      const obj = VisualEffectView;
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
  const useToken = blurTheme(5734).useToken;
  blurTheme(5734);
  const BACKGROUND_SCRIM = nativeDefault.colors.BACKGROUND_SCRIM;
  const tmpResult2 = blurTheme(5738);
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
}
export function BackgroundBlurFillWithPress(style) {
  let blurTheme;
  let items5;
  let pressed;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  ({ blurTheme, pressed } = style);
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0, blurTheme: 0, pressed: 0 }));
  let obj = blurTheme(5209);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  let items = [blurTheme];
  const memo = react.useMemo(() => {
    let str = "ultra-thin";
    const obj = VisualEffectView;
    if (obj.isBlurThemeLight(blurTheme)) {
      str = "default";
    }
    return str;
  }, items);
  const tmp2Result = blurTheme(5738);
  const normalizeBlurThemeResult = tmp2Result.normalizeBlurTheme(blurTheme);
  const tmp2Result8 = blurTheme(5738);
  const tmp6 = tmp2Result8.isBlurThemeLight(blurTheme) ? closure_6 : closure_8;
  const tmp2Result9 = blurTheme(5738);
  const tmp7 = tmp2Result9.isBlurThemeLight(blurTheme) ? closure_7 : closure_9;
  const tmp2Result10 = blurTheme(5734);
  const token = tmp2Result10.useToken(nativeDefault.colors.BACKGROUND_SCRIM, normalizeBlurThemeResult);
  const tmp2Result11 = blurTheme(5734);
  const token1 = tmp2Result11.useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, normalizeBlurThemeResult);
  const tmp2Result12 = blurTheme(5738);
  const isBlurDisabledResult = tmp2Result12.isBlurDisabled(merged);
  const items1 = [closure_10, , , , , , ];
  const useAnimatedStyle = tmp2(1652).useAnimatedStyle;
  blurTheme(1652);
  items1[1] = blurTheme(5773).withSpring;
  items1[2] = blurTheme(1652).interpolateColor;
  items1[3] = pressed;
  items1[4] = token;
  items1[5] = token1;
  items1[6] = blurTheme(5774).ON_PRESS_SPRING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items1;
  class BackgroundBlurFillNativeTsx1 {
    constructor() {
      let items;
      const obj = { backgroundColor: _undefined(_undefined2(_undefined3.get(), [0, 1], items), c5, "animate-always") };
      items = [c3, c4];
      return obj;
    }
  }
  const items2 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  BackgroundBlurFillNativeTsx1.__closure = items2;
  BackgroundBlurFillNativeTsx1.__workletHash = 9525556178957;
  BackgroundBlurFillNativeTsx1.__initData = tmp13;
  let animatedStyle = useAnimatedStyle(BackgroundBlurFillNativeTsx1);
  const items3 = [closure_11, isBlurDisabledResult, , , , , , ];
  const useAnimatedProps = tmp2(1652).useAnimatedProps;
  blurTheme(1652);
  items3[2] = blurTheme(5773).withSpring;
  items3[3] = blurTheme(1652).interpolateColor;
  items3[4] = pressed;
  items3[5] = tmp6;
  items3[6] = tmp7;
  items3[7] = blurTheme(5774).ON_PRESS_SPRING;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  let c6;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items3;
  class BackgroundBlurFillNativeTsx2 {
    constructor() {
      let tintColor;
      if (!c0) {
        const items = [c4, c5];
        tintColor = _undefined(_undefined2(_undefined3.get(), [0, 1], items), c6, "animate-always");
      }
      return { tintColor };
    }
  }
  const items4 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  BackgroundBlurFillNativeTsx2.__closure = items4;
  BackgroundBlurFillNativeTsx2.__workletHash = 6005645675156;
  BackgroundBlurFillNativeTsx2.__initData = tmp21;
  const animatedProps = useAnimatedProps(BackgroundBlurFillNativeTsx2);
  const obj2 = { blurTheme, blurStyle: memo, style: items5 };
  items5 = [StyleSheet.absoluteFill, style, ];
  const tmp30 = jsx;
  const tmp8Result = VisualEffectViewAnimatedDefault;
  if (!isBlurDisabledResult) {
    animatedStyle = {};
  }
  items5[2] = animatedStyle;
  let tmp32 = !isBlurDisabledResult;
  if (tmp32) {
    tmp32 = { animatedProps };
    const obj3 = { animatedProps };
  }
  const merged1 = Object.assign(tmp32);
  return tmp30(tmp8Result, obj2);
}
