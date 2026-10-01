// Module ID: 5291
// Function ID: 5292
// Name: ButtonPill
// Dependencies: [32, 19, 17, 21, 5286, 4836, 576, 5287, 4540, 4531, 5292, 5293, 4566, 4685, 5297, 4550, 5280, 5284, 2]
// Exports: ButtonPill

// Module 5291 (ButtonPill)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import shared from "shared" /* 4685 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import ButtonHooks from "ButtonHooks" /* 5287 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import ButtonEllipsis from "ButtonEllipsis" /* 5297 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ButtonConstants_mod from "ButtonConstants" /* 5286 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let _require;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function PillWrapper(pressed) {
  let ExpressiveButtonRive;
  let children;
  let expressiveRiveRef;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj9;
  let shiny;
  let str;
  let style;
  let variant;
  ({ children, variant, style, shiny } = pressed);
  pressed = pressed.pressed;
  if (shiny === undefined) {
    shiny = false;
  }
  const expressivePressState = pressed.expressivePressState;
  ({ expressiveRiveRef, size } = pressed);
  const obj = ButtonHooks;
  const buttonPillStyles = obj.useButtonPillStyles(variant, pressed);
  const obj2 = ButtonHooks;
  const gradientPillStyles = obj2.useGradientPillStyles(variant);
  const obj3 = native;
  const theme = obj3.useThemeContext().theme;
  const tmp5 = closure_14(variant, size);
  let items = [, , ];
  const obj4 = useToken;
  items[0] = obj4.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT);
  const obj5 = useToken;
  items[1] = obj5.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj6 = useToken;
  items[2] = obj6.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  const items1 = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2, nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
  let tmp7 = null;
  if (shiny) {
    const obj7 = { variant };
    tmp7 = metroImportDefault(tmp(5292).ButtonShine, obj7);
  }
  if ("experimental_premium-primary" !== variant) {
    let obj11;
    if ("experimental_premium-basic" !== variant) {
      let tmp11Result = "expressive" === variant;
      if (tmp11Result) {
        const obj8 = { style: items2, children: metroImportDefault(ExpressiveButtonRive, obj9) };
        items2 = [metroRequire.absoluteFill, tmp5.expressivePill];
        obj9 = { withReducedMotion: "short-loop", ref: expressiveRiveRef, fit: "layout", artboard: str, dataBinding: obj10 };
        ExpressiveButtonRive = tmp(4540).ExpressiveButtonRive;
        str = "Mobile Expressive Button Dark Mode";
        const tmp12 = hasOwnProperty;
        const tmpResult = shared;
        if (tmpResult.isThemeLight(theme)) {
          str = "Mobile Expressive Button Lightmode";
        }
        obj10 = { buttonColor: tmp5.expressiveRiveFill.color, cornerRadius: tmp5.expressivePill.borderRadius };
        const merged = Object.assign(expressivePressState);
        tmp11Result = tmp11(tmp12, obj8);
      }
      obj11 = { children: items3 };
      items3 = [tmp11Result, ];
      const obj12 = { style: items4, children: items5 };
      items4 = [style, buttonPillStyles];
      items5 = [children, tmp7];
      items3[1] = metroImportAll(ReanimatedRexportDefault.View, obj12);
    }
    return metroImportAll(tmp10, obj11);
  }
  const obj13 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: items6, colors: items };
  items6 = [style, gradientPillStyles, metroRequire.absoluteFill];
  const tmp18 = metroImportDefault;
  const tmp6Result = LinearGradientDefault;
  if ("experimental_premium-basic" === variant) {
    items = items1;
  }
  const obj14 = { children: items7 };
  items7 = [tmp18(tmp6Result, obj13), ];
  const obj15 = { style: items8, children: items9 };
  items8 = [style, buttonPillStyles];
  items9 = [children, tmp7];
  items7[1] = metroImportAll(ReanimatedRexportDefault.View, obj15);
  obj11 = obj14;
}
class BasicButtonPill {
  constructor(variant) {
    let children;
    let expressivePressState;
    let expressiveRiveRef;
    let items;
    let obj2;
    let pressed;
    let style;
    let str = variant.variant;
    ({ children, style, pressed } = variant);
    if (str === undefined) {
      str = "primary";
    }
    let DEFAULT_BUTTON_SIZE = variant.size;
    if (DEFAULT_BUTTON_SIZE === undefined) {
      DEFAULT_BUTTON_SIZE = ButtonConstants.DEFAULT_BUTTON_SIZE;
    }
    let flag = variant.shiny;
    if (flag === undefined) {
      flag = false;
    }
    ({ expressiveRiveRef, expressivePressState } = variant);
    const tmp3 = closure_14(str, DEFAULT_BUTTON_SIZE);
    const obj = { variant: str, size: DEFAULT_BUTTON_SIZE, style: items, pressed, shiny: flag, expressiveRiveRef, expressivePressState, children: metroImportDefault(hasOwnProperty, obj2) };
    items = [tmp3.pill, style];
    obj2 = { style: tmp3.childContainer, children };
    return metroImportDefault(PillWrapper, obj);
  }
}
class LoadingButtonPill {
  constructor(variant) {
    let c2;
    let children;
    let expressivePressState;
    let expressiveRiveRef;
    let items1;
    let items2;
    let items3;
    let items4;
    let pressed;
    let style;
    let tmp12Result;
    let tmp5;
    let tmp8;
    let tmp9;
    let str = variant.variant;
    ({ children, style, pressed } = variant);
    if (str === undefined) {
      str = "primary";
    }
    let DEFAULT_BUTTON_SIZE = variant.size;
    if (DEFAULT_BUTTON_SIZE === undefined) {
      DEFAULT_BUTTON_SIZE = ButtonConstants.DEFAULT_BUTTON_SIZE;
    }
    let flag = variant.loading;
    if (flag === undefined) {
      flag = false;
    }
    let loaderSize = variant.loaderSize;
    c2 = undefined;
    ({ expressiveRiveRef, expressivePressState } = variant);
    const tmp3 = closure_14(str, DEFAULT_BUTTON_SIZE);
    let closure_1 = react.useRef(null);
    let tmp4 = _slicedToArray(react.useState(flag), 2);
    [tmp5, c2] = tmp4;
    const items = [flag];
    const effect = react.useEffect(() => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      const tmp4 = flag;
      if (tmp4) {
        _undefined(true);
      } else {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          _undefined(false);
        }, 500);
      }
    }, items);
    const obj = { variant: str, size: DEFAULT_BUTTON_SIZE, style: items1, pressed, expressiveRiveRef, expressivePressState, children: items3 };
    items1 = [tmp3.pill, style];
    [tmp8, tmp9] = _slicedToArray(useLoadingStyles(flag, DEFAULT_BUTTON_SIZE), 2);
    const obj2 = { style: items2, children };
    items2 = [tmp3.childContainer, tmp8];
    const tmp7 = _slicedToArray(useLoadingStyles(flag, DEFAULT_BUTTON_SIZE), 2);
    items3 = [metroImportDefault(ReanimatedRexportDefault.View, obj2), ];
    const obj3 = { style: items4, children: tmp12Result };
    items4 = [tmp3.ellipsis, tmp9];
    const View = ReanimatedRexportDefault.View;
    const tmp10 = metroImportAll;
    const tmp11 = PillWrapper;
    if (tmp12Result) {
      const obj4 = { variant: str, size: loaderSize };
      const Ellipsis = ButtonEllipsis.Ellipsis;
      if (loaderSize == null) {
        loaderSize = DEFAULT_BUTTON_SIZE;
      }
      tmp12Result = metroImportDefault(Ellipsis, obj4);
    }
    items3[1] = metroImportDefault(View, obj3);
    return tmp10(tmp11, obj);
  }
}
function useLoadingStyles(flag, DEFAULT_BUTTON_SIZE) {
  let num;
  _require = flag;
  const enabled = react.useContext(require("react").AccessibilityPreferencesContext).reducedMotion.enabled;
  num = 12;
  if ("lg" === DEFAULT_BUTTON_SIZE) {
    num = 18;
  }
  let tmpResult = tmp(tmp2[12]);
  const fn = function o() {
    let tmp8;
    num = 1;
    const withSpring = spring.withSpring;
    spring;
    if (flag) {
      num = 0;
    }
    const withSpringResult = withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    const obj = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (!flag) {
        const tmpResult = ReanimatedRexport;
        withDelayResult = tmpResult.withDelay(c10, withSpringResult);
      }
      obj.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj.transform = items;
      tmp8 = obj;
    } else {
      obj.opacity = withSpringResult;
      let num2 = 0;
      const withSpring2 = spring.withSpring;
      spring;
      if (flag) {
        num2 = -1 * num;
      }
      const items1 = [{ translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) }];
      obj.transform = items1;
      tmp8 = obj;
      const obj2 = { translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) };
    }
    return tmp8;
  };
  let obj = { withSpring: tmp(tmp2[16]).withSpring, loading: flag, SUBTLE_SPRING: tmp(tmp2[17]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: tmp(tmp2[12]).withDelay, FADE_DELAY, offsetY: num };
  fn.__closure = obj;
  fn.__workletHash = 9388603334085;
  fn.__initData = __initData;
  let items = [tmpResult.useAnimatedStyle(fn), ];
  const tmpResult2 = tmp(tmp2[12]);
  const fn2 = function l() {
    let tmp7;
    num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (flag) {
      num = 1;
    }
    const withSpringResult = withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    const obj = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (flag) {
        const tmpResult = ReanimatedRexport;
        withDelayResult = tmpResult.withDelay(c10, withSpringResult);
      }
      obj.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj.transform = items;
      tmp7 = obj;
    } else {
      obj.opacity = withSpringResult;
      let num2 = 0;
      const withSpring2 = spring.withSpring;
      spring;
      if (!flag) {
        num2 = num;
      }
      const items1 = [{ translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) }];
      obj.transform = items1;
      tmp7 = obj;
      const obj2 = { translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) };
    }
    return tmp7;
  };
  let obj2 = { withSpring: tmp(tmp2[16]).withSpring, loading: flag, SUBTLE_SPRING: tmp(tmp2[17]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: tmp(tmp2[12]).withDelay, FADE_DELAY, offsetY: num };
  fn2.__closure = obj2;
  fn2.__workletHash = 8255420825872;
  fn2.__initData = __initData2;
  items[1] = tmpResult2.useAnimatedStyle(fn2);
  return items;
}
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = 300;
let ButtonConstants = ButtonConstants_mod;
const getButtonPadding = ButtonConstants.getButtonPadding;
const paddingVertical = getButtonPadding(ButtonConstants.SMALL_BUTTON_HEIGHT, ButtonConstants.SMALL_BUTTON_ICON_SIZE);
ButtonConstants = ButtonConstants_mod;
const getButtonPadding2 = ButtonConstants.getButtonPadding;
const paddingVertical2 = getButtonPadding2(ButtonConstants.MEDIUM_BUTTON_HEIGHT, ButtonConstants.MEDIUM_BUTTON_ICON_SIZE);
ButtonConstants = ButtonConstants_mod;
const getButtonPadding3 = ButtonConstants.getButtonPadding;
const paddingVertical3 = getButtonPadding3(ButtonConstants.LARGE_BUTTON_HEIGHT, ButtonConstants.LARGE_BUTTON_ICON_SIZE);
const authStore2 = createStyles.createStyles((arg0, arg1) => {
  let obj;
  let obj7;
  if ("sm" === arg1) {
    obj = { minHeight: ButtonConstants.SMALL_BUTTON_HEIGHT, minWidth: ButtonConstants.SMALL_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.SMALL_BUTTON_HORIZONTAL_PADDING, paddingVertical };
    const obj2 = { minHeight: ButtonConstants.SMALL_BUTTON_HEIGHT, minWidth: ButtonConstants.SMALL_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.SMALL_BUTTON_HORIZONTAL_PADDING, paddingVertical };
  } else if ("md" === arg1) {
    obj = { minHeight: ButtonConstants.MEDIUM_BUTTON_HEIGHT, minWidth: ButtonConstants.MEDIUM_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_HORIZONTAL_PADDING, paddingVertical: paddingVertical2 };
    const obj3 = { minHeight: ButtonConstants.MEDIUM_BUTTON_HEIGHT, minWidth: ButtonConstants.MEDIUM_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_HORIZONTAL_PADDING, paddingVertical: paddingVertical2 };
  } else {
    obj = {};
    if ("lg" === arg1) {
      obj = { minHeight: ButtonConstants.LARGE_BUTTON_HEIGHT, minWidth: ButtonConstants.LARGE_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.LARGE_BUTTON_HORIZONTAL_PADDING, paddingVertical: paddingVertical3 };
      const obj5 = { minHeight: ButtonConstants.LARGE_BUTTON_HEIGHT, minWidth: ButtonConstants.LARGE_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.LARGE_BUTTON_HORIZONTAL_PADDING, paddingVertical: paddingVertical3 };
    }
  }
  const obj4 = ButtonConstants;
  const buttonBorderRadius = obj4.getButtonBorderRadius(arg1);
  const obj6 = { pill: obj7, expressivePill: { overflow: "hidden", borderRadius: buttonBorderRadius }, expressiveRiveFill: { color: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT }, childContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", flexGrow: 1, maxWidth: "100%" }, ellipsis: { position: "absolute", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } };
  obj7 = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderWidth: ButtonConstants.BUTTON_BORDER_WIDTH, borderRadius: buttonBorderRadius };
  const merged = Object.assign(obj);
  ({ color: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT });
  return obj6;
});
const __initData = { code: "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}" };
const __initData2 = { code: "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition):opacityTransition,transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}" };
const result = size.fileFinishedImporting("design/components/Button/native/ButtonPill.native.tsx");

export const ButtonPill = function ButtonPill(loading) {
  let tmp6;
  if (null == loading.loading) {
    const obj2 = {};
    const merged = Object.assign(loading);
    tmp6 = metroImportDefault(BasicButtonPill, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(loading);
    tmp6 = metroImportDefault(LoadingButtonPill, obj);
  }
  return tmp6;
};
export { BasicButtonPill };
export { LoadingButtonPill };
export { useLoadingStyles };
