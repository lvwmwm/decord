// Module ID: 7641
// Function ID: 60795
// Name: useBlurTheme
// Dependencies: [31, 27, 33, 689, 3974, 3842, 3834, 4533, 4532, 3991, 4542, 4546, 2]
// Exports: BackgroundBlurFill, BackgroundBlurFillAnimated, BackgroundBlurFillWithPress

// Module 7641 (useBlurTheme)
import result from "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";

const require = arg1;
function useBlurTheme(blurTheme) {
  let theme = require(3842) /* ManaContext */.useThemeContext().theme;
  if (null != blurTheme) {
    theme = blurTheme;
  }
  return theme;
}
function useBlurStyle(blurTheme, blurStyle) {
  let closure_0 = blurTheme;
  const items = [blurTheme];
  let memo = React.useMemo(() => {
    let str = "ultra-thin";
    if ("light" === closure_0) {
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
  let closure_0 = blurTheme;
  const items = [blurTheme];
  let memo = React.useMemo(() => {
    if ("light" === blurTheme) {
      let hexToRgbaStringResult = blurTheme(outer1_2[4]).hexToRgbaString(outer1_6);
      const obj2 = blurTheme(outer1_2[4]);
    } else {
      hexToRgbaStringResult = blurTheme(outer1_2[4]).hexToRgbaString(outer1_8);
      const obj = blurTheme(outer1_2[4]);
    }
    return hexToRgbaStringResult;
  }, items);
  if (null != blurTintRgba) {
    memo = blurTintRgba;
  }
  return memo;
}
function useBlurFallback(blurTheme, android_fallbackColor) {
  let token = require(3834) /* map */.useToken(importDefault(689).colors.BACKGROUND_SCRIM, blurTheme);
  if (null != android_fallbackColor) {
    token = android_fallbackColor;
  }
  return token;
}
const BLACK = require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK;
let closure_6 = hexToRgb.hexWithOpacity(BLACK, 0);
let closure_7 = hexToRgb.hexWithOpacity(BLACK, 0.2);
let closure_8 = hexToRgb.hexWithOpacity(BLACK, 0.4);
let closure_9 = hexToRgb.hexWithOpacity(BLACK, 0.5);
let closure_10 = { code: "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
let closure_11 = { code: "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,blurTint,blurTintPressed,ON_PRESS_SPRING}=this.__closure;return{blurTintRgba:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[blurTint,blurTintPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const result = require("jsxProd").fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx");

export const BlurTheme = require("getIOSBlurEffect").BlurTheme;
export const BlurStyle = require("getIOSBlurEffect").BlurStyle;
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
  return jsx(importDefault(4533), { blurTheme, blurStyle, blurAmount, blurTintRgba, android_fallbackColor, android_blurTargetViewNativeId, style });
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
  items = [StyleSheet.absoluteFill, style];
  let tmp7 = null != animatedProps;
  const tmp4 = useBlurFallback(tmp, android_fallbackColor);
  const tmp5 = jsx;
  if (tmp7) {
    obj = { animatedProps };
    tmp7 = obj;
  }
  const merged = Object.assign(tmp7);
  return tmp5(importDefault(4532), obj);
};
export const BackgroundBlurFillWithPress = function BackgroundBlurFillWithPress(pressed) {
  let blurTheme;
  let style;
  pressed = pressed.pressed;
  let obj = { style: 0, blurTheme: 0, pressed: 0 };
  ({ style, blurTheme } = pressed);
  Object.setPrototypeOf(null);
  let importDefault;
  let dependencyMap;
  let token;
  let token1;
  let c5;
  const merged = Object.assign(pressed, obj);
  const tmp3 = useBlurTheme(blurTheme);
  const tmp6 = "light" === tmp3 ? closure_6 : closure_8;
  importDefault = tmp6;
  const tmp7 = "light" === tmp3 ? closure_7 : closure_9;
  dependencyMap = tmp7;
  let obj1 = pressed(3834);
  token = obj1.useToken(importDefault(689).colors.BACKGROUND_SCRIM, tmp3);
  let obj2 = pressed(3834);
  token1 = obj2.useToken(importDefault(689).colors.BACKGROUND_SCRIM_LIGHTBOX, tmp3);
  const tmp4 = useBlurStyle(tmp3, undefined);
  const isBlurDisabledResult = pressed(4533).isBlurDisabled(merged);
  c5 = isBlurDisabledResult;
  const obj4 = pressed(4533);
  class T {
    constructor() {
      obj = {};
      obj2 = pressed(c2[10]);
      obj3 = pressed(c2[9]);
      items = [, ];
      items[0] = c3;
      items[1] = c4;
      interpolateColorResult = obj3.interpolateColor(pressed.get(), [0, 1], items);
      obj.backgroundColor = obj2.withSpring(interpolateColorResult, pressed(c2[11]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: pressed(4542).withSpring, interpolateColor: pressed(3991).interpolateColor, pressed, fallbackColor: token, fallbackColorPressed: token1, ON_PRESS_SPRING: pressed(4546).ON_PRESS_SPRING };
  T.__closure = obj;
  T.__workletHash = 10497618157620;
  T.__initData = closure_10;
  let animatedStyle = pressed(3991).useAnimatedStyle(T);
  const obj5 = pressed(3991);
  const fn = function p() {
    const obj = {};
    let withSpringResult;
    if (!c5) {
      const obj2 = pressed(_undefined[10]);
      const items = [c1, _undefined];
      const obj3 = pressed(_undefined[9]);
      withSpringResult = obj2.withSpring(pressed(_undefined[9]).interpolateColor(pressed.get(), [0, 1], items), pressed(_undefined[11]).ON_PRESS_SPRING, "animate-always");
      const interpolateColorResult = pressed(_undefined[9]).interpolateColor(pressed.get(), [0, 1], items);
    }
    obj.blurTintRgba = withSpringResult;
    return obj;
  };
  obj = { shouldUseFallback: isBlurDisabledResult, withSpring: pressed(4542).withSpring, interpolateColor: pressed(3991).interpolateColor, pressed, blurTint: tmp6, blurTintPressed: tmp7, ON_PRESS_SPRING: pressed(4546).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 3902745666351;
  fn.__initData = closure_11;
  const animatedProps = pressed(3991).useAnimatedProps(fn);
  obj1 = { blurTheme: tmp3, blurStyle: tmp4 };
  let items = [token1.absoluteFill, style, ];
  const obj8 = pressed(3991);
  const tmp12 = c5;
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
  return tmp12(importDefault(4532), obj1);
};
