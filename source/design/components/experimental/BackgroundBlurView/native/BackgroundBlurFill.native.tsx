// Module ID: 7494
// Function ID: 60092
// Name: useBlurTheme
// Dependencies: []
// Exports: BackgroundBlurFill, BackgroundBlurFillAnimated, BackgroundBlurFillWithPress

// Module 7494 (useBlurTheme)
function useBlurTheme(blurTheme) {
  let theme = arg1(dependencyMap[5]).useThemeContext().theme;
  if (null != blurTheme) {
    theme = blurTheme;
  }
  return theme;
}
function useBlurStyle(blurTheme, blurStyle) {
  blurStyle = blurTheme;
  const items = [blurTheme];
  let memo = React.useMemo(() => {
    let str = "ultra-thin";
    if ("light" === arg0) {
      str = "default";
    }
    return str;
  }, items);
  if (null != blurStyle) {
    memo = blurStyle;
  }
  return memo;
}
function useBlurTintRgba(blurTheme, blurTintRgba) {
  blurTintRgba = blurTheme;
  const items = [blurTheme];
  let memo = React.useMemo(() => {
    if ("light" === arg0) {
      let hexToRgbaStringResult = arg0(closure_2[4]).hexToRgbaString(closure_6);
      const obj2 = arg0(closure_2[4]);
    } else {
      hexToRgbaStringResult = arg0(closure_2[4]).hexToRgbaString(closure_8);
      const obj = arg0(closure_2[4]);
    }
    return hexToRgbaStringResult;
  }, items);
  if (null != blurTintRgba) {
    memo = blurTintRgba;
  }
  return memo;
}
function useBlurFallback(blurTheme, android_fallbackColor) {
  let token = android_fallbackColor(dependencyMap[6]).useToken(importDefault(dependencyMap[3]).colors.BACKGROUND_SCRIM, blurTheme);
  if (null != android_fallbackColor) {
    token = android_fallbackColor;
  }
  return token;
}
let closure_3 = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const jsx = arg1(dependencyMap[2]).jsx;
const BLACK = importDefault(dependencyMap[3]).unsafe_rawColors.BLACK;
let closure_6 = arg1(dependencyMap[4]).hexWithOpacity(BLACK, 0);
const obj = arg1(dependencyMap[4]);
let closure_7 = arg1(dependencyMap[4]).hexWithOpacity(BLACK, 0.2);
const obj2 = arg1(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[4]).hexWithOpacity(BLACK, 0.4);
const obj3 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[4]).hexWithOpacity(BLACK, 0.5);
let closure_10 = { code: "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
let closure_11 = { code: "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,blurTint,blurTintPressed,ON_PRESS_SPRING}=this.__closure;return{blurTintRgba:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[blurTint,blurTintPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const obj4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx");

export const BlurTheme = arg1(dependencyMap[7]).BlurTheme;
export const BlurStyle = arg1(dependencyMap[7]).BlurStyle;
export const BackgroundBlurFill = function BackgroundBlurFill(blurTheme) {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let blurAmount;
  let blurStyle;
  let blurTintRgba;
  let style;
  ({ style, blurStyle, blurAmount, blurTintRgba, android_fallbackColor, android_blurTargetViewNativeId } = blurTheme);
  blurTheme = useBlurTheme(blurTheme.blurTheme);
  blurStyle = useBlurStyle(blurTheme, blurStyle);
  blurTintRgba = useBlurTintRgba(blurTheme, blurTintRgba);
  android_fallbackColor = useBlurFallback(blurTheme, android_fallbackColor);
  style = [StyleSheet.absoluteFill, ];
  style[1] = style;
  return jsx(importDefault(dependencyMap[7]), { blurTheme, blurStyle, blurAmount, blurTintRgba, android_fallbackColor, android_blurTargetViewNativeId, style });
};
export const BackgroundBlurFillAnimated = function BackgroundBlurFillAnimated(animatedProps) {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let blurAmount;
  let blurStyle;
  let blurTintRgba;
  let style;
  animatedProps = animatedProps.animatedProps;
  ({ style, blurStyle, blurAmount, blurTintRgba, android_fallbackColor, android_blurTargetViewNativeId } = animatedProps);
  const tmp = useBlurTheme(animatedProps.blurTheme);
  const tmp2 = useBlurStyle(tmp, blurStyle);
  const tmp3 = useBlurTintRgba(tmp, blurTintRgba);
  let obj = { blurTheme: tmp, blurStyle: tmp2, blurAmount, blurTintRgba: tmp3, android_fallbackColor: useBlurFallback(tmp, android_fallbackColor), android_blurTargetViewNativeId, style: items };
  const items = [StyleSheet.absoluteFill, style];
  let tmp7 = null != animatedProps;
  const tmp4 = useBlurFallback(tmp, android_fallbackColor);
  const tmp5 = jsx;
  if (tmp7) {
    obj = { animatedProps };
    tmp7 = obj;
  }
  const merged = Object.assign(tmp7);
  return tmp5(importDefault(dependencyMap[8]), obj);
};
export const BackgroundBlurFillWithPress = function BackgroundBlurFillWithPress(pressed) {
  let blurTheme;
  let style;
  pressed = pressed.pressed;
  const arg1 = pressed;
  let obj = { muted: "spring", paused: "linear", preventsDisplaySleepDuringVideoPlayback: "easeInEaseOut" };
  ({ style, blurTheme } = pressed);
  Object.setPrototypeOf(null);
  let importDefault;
  let dependencyMap;
  let closure_3;
  let StyleSheet;
  let jsx;
  const merged = Object.assign(pressed, obj);
  const tmp3 = useBlurTheme(blurTheme);
  const tmp6 = "light" === tmp3 ? closure_6 : closure_8;
  importDefault = tmp6;
  const tmp7 = "light" === tmp3 ? closure_7 : closure_9;
  dependencyMap = tmp7;
  let obj1 = arg1(dependencyMap[6]);
  const token = obj1.useToken(importDefault(dependencyMap[3]).colors.BACKGROUND_SCRIM, tmp3);
  closure_3 = token;
  let obj2 = arg1(dependencyMap[6]);
  const token1 = obj2.useToken(importDefault(dependencyMap[3]).colors.BACKGROUND_SCRIM_LIGHTBOX, tmp3);
  StyleSheet = token1;
  const tmp4 = useBlurStyle(tmp3, undefined);
  const isBlurDisabledResult = arg1(dependencyMap[7]).isBlurDisabled(merged);
  jsx = isBlurDisabledResult;
  const obj4 = arg1(dependencyMap[7]);
  class T {
    constructor() {
      obj = {};
      obj2 = pressed(closure_2[10]);
      obj3 = pressed(closure_2[9]);
      items = [, ];
      items[0] = closure_3;
      items[1] = closure_4;
      interpolateColorResult = obj3.interpolateColor(pressed.get(), ["Text", "lc"], items);
      obj.backgroundColor = obj2.withSpring(interpolateColorResult, pressed(closure_2[11]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[10]).withSpring, interpolateColor: arg1(dependencyMap[9]).interpolateColor, pressed, fallbackColor: token, fallbackColorPressed: token1, ON_PRESS_SPRING: arg1(dependencyMap[11]).ON_PRESS_SPRING };
  T.__closure = obj;
  T.__workletHash = 10497618157620;
  T.__initData = closure_10;
  let animatedStyle = arg1(dependencyMap[9]).useAnimatedStyle(T);
  const obj5 = arg1(dependencyMap[9]);
  const fn = function p() {
    const obj = {};
    let withSpringResult;
    if (!isBlurDisabledResult) {
      const obj2 = pressed(tmp7[10]);
      const items = [tmp6, tmp7];
      const obj3 = pressed(tmp7[9]);
      withSpringResult = obj2.withSpring(pressed(tmp7[9]).interpolateColor(pressed.get(), ["Text", "lc"], items), pressed(tmp7[11]).ON_PRESS_SPRING, "animate-always");
      const interpolateColorResult = pressed(tmp7[9]).interpolateColor(pressed.get(), ["Text", "lc"], items);
    }
    obj.blurTintRgba = withSpringResult;
    return obj;
  };
  obj = { shouldUseFallback: isBlurDisabledResult, withSpring: arg1(dependencyMap[10]).withSpring, interpolateColor: arg1(dependencyMap[9]).interpolateColor, pressed, blurTint: tmp6, blurTintPressed: tmp7, ON_PRESS_SPRING: arg1(dependencyMap[11]).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 3902745666351;
  fn.__initData = closure_11;
  const animatedProps = arg1(dependencyMap[9]).useAnimatedProps(fn);
  obj1 = { blurTheme: tmp3, blurStyle: tmp4 };
  const items = [StyleSheet.absoluteFill, style, ];
  const obj8 = arg1(dependencyMap[9]);
  const tmp12 = jsx;
  if (!isBlurDisabledResult) {
    animatedStyle = {};
  }
  items[2] = animatedStyle;
  obj1.style = items;
  let tmp14 = !isBlurDisabledResult;
  if (tmp14) {
    obj2 = { animatedProps };
    tmp14 = obj2;
  }
  const merged1 = Object.assign(tmp14);
  return tmp12(importDefault(dependencyMap[8]), obj1);
};
