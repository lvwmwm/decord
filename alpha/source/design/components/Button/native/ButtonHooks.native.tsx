// Module ID: 5761
// Function ID: 5762
// Name: ButtonHooks
// Dependencies: [19, 5141, 5207, 575, 5148, 5719, 1652, 5757, 5758, 5760, 5762, 5756, 5747, 1377, 2]
// Exports: useButtonPillStyles, useButtonPressAnimationProps, useButtonTextColorStyles, useForegroundColor, useGradientPillStyles, useIconSizeStyles, useIconTintStyles, useProfileThemedButtonStyles

// Module 5761 (ButtonHooks)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod1652 from "module_1652" /* 1652 */;
import shared from "shared" /* 5148 */;
import native from "native" /* 5207 */;
import useToken from "useToken" /* 5719 */;
import Icon from "Icon" /* 5756 */;
import spring_spring from "spring/spring" /* 5757 */;
import springPresets from "springPresets" /* 5758 */;
import ButtonConstants from "ButtonConstants" /* 5760 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, diff, obj1;

function getButtonColorTokens(variant) {
  let obj13;
  let obj20;
  let tmp10;
  let tmp12;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp9;
  switch (variant) {
    case "primary":
    {
      const obj2 = { foregroundInactive: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_PRIMARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_PRIMARY_BORDER_ACTIVE };
      return obj2;
    }
    case "secondary":
    {
      const obj3 = { foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_SECONDARY_BORDER_ACTIVE };
      return obj3;
    }
    case "toggle-off":
    {
      const obj4 = { foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED };
      return obj4;
    }
    case "toggle-on":
    {
      const obj5 = { foregroundInactive: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED_ACTIVE, borderInactive: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED };
      return obj5;
    }
    case "toggle-icon-default-off":
    {
      const obj6 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ACTIVE, backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_ACTIVE };
      return obj6;
    }
    case "toggle-icon-default-on":
    {
      const obj7 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ACTIVE, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_BACKGROUND_SELECTED_HOVER, borderInactive: nativeDefault.colors.TOGGLEBUTTON_BORDER_SELECTED, borderPressed: nativeDefault.colors.TOGGLEBUTTON_BORDER_ACTIVE };
      return obj7;
    }
    case "toggle-icon-critical-off":
    {
      const obj8 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_ACTIVE, backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BORDER_ACTIVE };
      return obj8;
    }
    case "toggle-icon-critical-on":
    {
      const obj9 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_ICON_ACTIVE, backgroundInactive: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BACKGROUND_SELECTED, backgroundPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BACKGROUND_SELECTED_HOVER, borderInactive: rgba0000001, borderPressed: nativeDefault.colors.TOGGLEBUTTON_CRITICAL_BORDER_ACTIVE };
      return obj9;
    }
    case "toggle-icon-only-off":
    {
      const obj10 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_ACTIVE, backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BORDER_ACTIVE };
      return obj10;
    }
    case "toggle-icon-only-on":
    {
      const obj11 = { foregroundInactive: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_SELECTED, foregroundPressed: nativeDefault.colors.TOGGLEBUTTON_ICON_ONLY_ICON_ACTIVE, backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BORDER_ACTIVE };
      return obj11;
    }
    case "tertiary":
    {
      const obj12 = { foregroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, foregroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, backgroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, backgroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj12;
    }
    case "critical-primary":
    {
      obj13 = { foregroundInactive: tmp33.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, foregroundPressed: tmp34.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, backgroundInactive: tmp35.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: tmp36.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: tmp37.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT, borderPressed: tmp38.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE };
      tmp33 = nativeDefault;
      tmp34 = nativeDefault;
      tmp35 = nativeDefault;
      tmp36 = nativeDefault;
      tmp37 = nativeDefault;
      tmp38 = nativeDefault;
      return obj13;
    }
    case "destructive":
    {
      obj13 = { foregroundInactive: tmp33.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, foregroundPressed: tmp34.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, backgroundInactive: tmp35.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: tmp36.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: tmp37.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT, borderPressed: tmp38.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE };
      tmp33 = nativeDefault;
      tmp34 = nativeDefault;
      tmp35 = nativeDefault;
      tmp36 = nativeDefault;
      tmp37 = nativeDefault;
      tmp38 = nativeDefault;
      return obj13;
    }
    case "critical-secondary":
    {
      const obj14 = { foregroundInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_ACTIVE };
      return obj14;
    }
    case "active":
    {
      const obj15 = { foregroundInactive: nativeDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_CONNECTED_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_CONNECTED_BORDER_ACTIVE };
      return obj15;
    }
    case "experimental_premium-secondary":
    {
      const obj16 = { foregroundInactive: nativeDefault.colors.TEXT_BRAND, foregroundPressed: nativeDefault.colors.TEXT_BRAND, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj16;
    }
    case "primary-overlay":
    {
      const obj17 = { foregroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj17;
    }
    case "secondary-overlay":
    {
      const obj18 = { foregroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj18;
    }
    case "experimental_welcome-secondary":
    {
      const obj19 = { foregroundInactive: nativeDefault.unsafe_rawColors.WHITE, foregroundPressed: nativeDefault.unsafe_rawColors.WHITE, backgroundInactive, backgroundPressed, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj19;
    }
    case "experimental_premium-primary":
    {
      obj20 = { foregroundInactive: tmp9.colors.WHITE, foregroundPressed: tmp10.colors.WHITE, backgroundInactive: rgba0000001, backgroundPressed: tmp12.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      tmp9 = nativeDefault;
      tmp10 = nativeDefault;
      tmp12 = nativeDefault;
      return obj20;
    }
    case "experimental_premium-basic":
    {
      obj20 = { foregroundInactive: tmp9.colors.WHITE, foregroundPressed: tmp10.colors.WHITE, backgroundInactive: rgba0000001, backgroundPressed: tmp12.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      tmp9 = nativeDefault;
      tmp10 = nativeDefault;
      tmp12 = nativeDefault;
      return obj20;
    }
    case "icon-only":
    {
      const obj21 = { foregroundInactive: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj21;
    }
    case "expressive":
    {
      const obj = { foregroundInactive: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT, foregroundPressed: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT, backgroundInactive: rgba0000001, backgroundPressed: rgba0000001, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj;
    }
    default:
    {
      break;
    }
  }
}
function useButtonScaleStyles(sharedValue, sharedValue1, scaleAmountInPx) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let items = [closure_11, sharedValue1, scaleAmountInPx, , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items[3] = spring_spring.withSpring;
  items[4] = _mod1652.interpolate;
  items[5] = sharedValue;
  items[6] = springPresets.ON_PRESS_SPRING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class ButtonHooksNativeTsx3 {
    constructor() {
      obj = closure_0;
      num = 1;
      if (closure_0.get() > 0) {
        tmp = closure_1;
        diff = obj.get() - closure_1;
        num = diff / obj.get();
      }
      obj1 = { transform: null };
      obj4 = { scale: null };
      items = [1];
      items[1] = num;
      obj4.scale = closure_2(closure_3(closure_4.get(), [0, 1], items), closure_5, "animate-always");
      items1 = [];
      items1[0] = obj4;
      obj1.transform = items1;
      return obj1;
    }
  }
  let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
  ButtonHooksNativeTsx3.__closure = items1;
  ButtonHooksNativeTsx3.__workletHash = 6973813995182;
  ButtonHooksNativeTsx3.__initData = tmp2;
  return useAnimatedStyle(ButtonHooksNativeTsx3);
}
let c4 = "rgba(0,0,0,0.001)";
let createStyles = createStyles_mod;
const backgroundInactive = createStyles.experimental_createToken(() => "#161CBB");
createStyles = createStyles_mod;
const backgroundPressed = createStyles.experimental_createToken(() => "#1318A0");
createStyles = createStyles_mod;
const styleProperties = createStyles.createStyleProperties(getButtonColorTokens);
let closure_9 = { code: "(function ButtonHooksNativeTsx1(){let[interpolateColor,pressed,inactiveColor,pressedColor]=this.__closure;return{tintColor:interpolateColor(pressed.get(),[0,1],[inactiveColor,pressedColor])};})" };
let closure_10 = { code: "(function ButtonHooksNativeTsx2(){let[themedStyles,colors,interpolateColor,pressed]=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};})" };
let closure_11 = { code: "(function ButtonHooksNativeTsx3(){let[width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING]=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};})" };
let result = size.fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

export const SAFE_TRANSPARENT_COLOR = "rgba(0,0,0,0.001)";
export function useProfileThemedButtonStyles(arg0) {
  let closure_0;
  let theme;
  _require = arg0;
  const obj = require("native");
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, arg0];
  return react.useMemo(() => {
    let items;
    let items1;
    let items3;
    let items5;
    if (null == primaryColor) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const getContrastingColor = native.getContrastingColor;
      native;
      const contrastingColor = getContrastingColor(tmp, obj4);
      const obj9 = native;
      const darkenColorResult = obj9.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: items, borderColor: items1, color: WHITE };
      items = [contrastingColor, darkenColorResult];
      items1 = [contrastingColor, darkenColorResult];
      return obj7;
    } else if ("secondary" === variant) {
      let setColorOpacity2Result;
      let setColorOpacity3Result;
      const obj5 = shared;
      const isThemeLightResult = obj5.isThemeLight(theme);
      const setColorOpacity2 = native.setColorOpacity;
      native;
      const tmp20 = theme;
      if (isThemeLightResult) {
        setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const obj6 = shared;
      const isThemeLightResult1 = obj6.isThemeLight(tmp20);
      const setColorOpacity3 = native.setColorOpacity;
      native;
      if (isThemeLightResult1) {
        setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj8 = { backgroundColor: items2, borderColor: items3, color: "Array" };
      items2[1] = setColorOpacity3Result;
      items3 = [c4, c4];
      return obj8;
    } else if ("tertiary" === variant) {
      let setColorOpacityResult;
      let darkenColorResult1;
      const obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = native.setColorOpacity;
      native;
      const tmp4 = theme;
      if (isThemeLightResult2) {
        setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj2 = shared;
      const isThemeLightResult3 = obj2.isThemeLight(tmp4);
      const obj3 = native;
      if (isThemeLightResult3) {
        darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj10 = { backgroundColor: items4, borderColor: items5, color: "Array" };
      items4[1] = darkenColorResult1;
      items5 = [c4, c4];
      return obj10;
    } else {
      return null;
    }
  }, items);
}
export function useForegroundColor(variant) {
  const obj = useToken;
  return obj.useToken(getButtonColorTokens(variant).foregroundInactive);
}
export const useButtonColorStyles = styleProperties;
export function useButtonTextColorStyles(primary) {
  let theme;
  _require = primary;
  const obj = require("native");
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, primary];
  const memo = react.useMemo(() => {
    let items;
    let items1;
    let items3;
    let items5;
    if (null == primaryColor) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const getContrastingColor = native.getContrastingColor;
      native;
      const contrastingColor = getContrastingColor(tmp, obj4);
      const obj9 = native;
      const darkenColorResult = obj9.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: items, borderColor: items1, color: WHITE };
      items = [contrastingColor, darkenColorResult];
      items1 = [contrastingColor, darkenColorResult];
      return obj7;
    } else if ("secondary" === variant) {
      let setColorOpacity2Result;
      let setColorOpacity3Result;
      const obj5 = shared;
      const isThemeLightResult = obj5.isThemeLight(theme);
      const setColorOpacity2 = native.setColorOpacity;
      native;
      const tmp20 = theme;
      if (isThemeLightResult) {
        setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const obj6 = shared;
      const isThemeLightResult1 = obj6.isThemeLight(tmp20);
      const setColorOpacity3 = native.setColorOpacity;
      native;
      if (isThemeLightResult1) {
        setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj8 = { backgroundColor: items2, borderColor: items3, color: "Array" };
      items2[1] = setColorOpacity3Result;
      items3 = [c4, c4];
      return obj8;
    } else if ("tertiary" === variant) {
      let setColorOpacityResult;
      let darkenColorResult1;
      const obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = native.setColorOpacity;
      native;
      const tmp4 = theme;
      if (isThemeLightResult2) {
        setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj2 = shared;
      const isThemeLightResult3 = obj2.isThemeLight(tmp4);
      const obj3 = native;
      if (isThemeLightResult3) {
        darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj10 = { backgroundColor: items4, borderColor: items5, color: "Array" };
      items4[1] = darkenColorResult1;
      items5 = [c4, c4];
      return obj10;
    } else {
      return null;
    }
  }, items);
  let color;
  const obj2 = require("useToken");
  const token = obj2.useToken(getButtonColorTokens(primary).foregroundInactive);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  return { color };
}
export function useIconTintStyles(variant, sharedValue) {
  let theme;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  _require = variant;
  let obj = require("native");
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  let items = [theme, primaryColor, variant];
  const memo = react.useMemo(() => {
    let items;
    let items1;
    let items3;
    let items5;
    if (null == primaryColor) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const getContrastingColor = native.getContrastingColor;
      native;
      const contrastingColor = getContrastingColor(tmp, obj4);
      const obj9 = native;
      const darkenColorResult = obj9.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: items, borderColor: items1, color: WHITE };
      items = [contrastingColor, darkenColorResult];
      items1 = [contrastingColor, darkenColorResult];
      return obj7;
    } else if ("secondary" === variant) {
      let setColorOpacity2Result;
      let setColorOpacity3Result;
      const obj5 = shared;
      const isThemeLightResult = obj5.isThemeLight(theme);
      const setColorOpacity2 = native.setColorOpacity;
      native;
      const tmp20 = theme;
      if (isThemeLightResult) {
        setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const obj6 = shared;
      const isThemeLightResult1 = obj6.isThemeLight(tmp20);
      const setColorOpacity3 = native.setColorOpacity;
      native;
      if (isThemeLightResult1) {
        setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj8 = { backgroundColor: items2, borderColor: items3, color: "Array" };
      items2[1] = setColorOpacity3Result;
      items3 = [c4, c4];
      return obj8;
    } else if ("tertiary" === variant) {
      let setColorOpacityResult;
      let darkenColorResult1;
      const obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = native.setColorOpacity;
      native;
      const tmp4 = theme;
      if (isThemeLightResult2) {
        setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj2 = shared;
      const isThemeLightResult3 = obj2.isThemeLight(tmp4);
      const obj3 = native;
      if (isThemeLightResult3) {
        darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj10 = { backgroundColor: items4, borderColor: items5, color: "Array" };
      items4[1] = darkenColorResult1;
      items5 = [c4, c4];
      return obj10;
    } else {
      return null;
    }
  }, items);
  let color;
  const obj2 = require("useToken");
  const token = obj2.useToken(getButtonColorTokens(variant).foregroundInactive);
  const tmp5 = getButtonColorTokens;
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  const tmpResult = require("useToken");
  const token1 = tmpResult.useToken(tmp5(variant).foregroundPressed);
  const items1 = [closure_9, , , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items1[1] = require("module_1652").interpolateColor;
  items1[2] = sharedValue;
  items1[3] = color;
  items1[4] = token1;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items1;
  class ButtonHooksNativeTsx1 {
    constructor() {
      let items;
      const obj = { tintColor: _undefined(_undefined2.get(), [0, 1], items) };
      items = [c2, c3];
      return obj;
    }
  }
  const items2 = [tmp11, tmp12, tmp13, tmp14];
  ButtonHooksNativeTsx1.__closure = items2;
  ButtonHooksNativeTsx1.__workletHash = 12606114421900;
  ButtonHooksNativeTsx1.__initData = tmp10;
  return useAnimatedStyle(ButtonHooksNativeTsx1);
}
export function useGradientPillStyles(variant) {
  const obj = { borderColor: styleProperties(variant).borderInactive };
  return obj;
}
export function useButtonPillStyles(variant, pressed) {
  let theme;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  _require = variant;
  let obj = require("native");
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  let items = [theme, primaryColor, variant];
  const memo = react.useMemo(() => {
    let items;
    let items1;
    let items3;
    let items5;
    if (null == primaryColor) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const getContrastingColor = native.getContrastingColor;
      native;
      const contrastingColor = getContrastingColor(tmp, obj4);
      const obj9 = native;
      const darkenColorResult = obj9.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: items, borderColor: items1, color: WHITE };
      items = [contrastingColor, darkenColorResult];
      items1 = [contrastingColor, darkenColorResult];
      return obj7;
    } else if ("secondary" === variant) {
      let setColorOpacity2Result;
      let setColorOpacity3Result;
      const obj5 = shared;
      const isThemeLightResult = obj5.isThemeLight(theme);
      const setColorOpacity2 = native.setColorOpacity;
      native;
      const tmp20 = theme;
      if (isThemeLightResult) {
        setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const obj6 = shared;
      const isThemeLightResult1 = obj6.isThemeLight(tmp20);
      const setColorOpacity3 = native.setColorOpacity;
      native;
      if (isThemeLightResult1) {
        setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj8 = { backgroundColor: items2, borderColor: items3, color: "Array" };
      items2[1] = setColorOpacity3Result;
      items3 = [c4, c4];
      return obj8;
    } else if ("tertiary" === variant) {
      let setColorOpacityResult;
      let darkenColorResult1;
      const obj = shared;
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = native.setColorOpacity;
      native;
      const tmp4 = theme;
      if (isThemeLightResult2) {
        setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj2 = shared;
      const isThemeLightResult3 = obj2.isThemeLight(tmp4);
      const obj3 = native;
      if (isThemeLightResult3) {
        darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj10 = { backgroundColor: items4, borderColor: items5, color: "Array" };
      items4[1] = darkenColorResult1;
      items5 = [c4, c4];
      return obj10;
    } else {
      return null;
    }
  }, items);
  const tmp3 = styleProperties(variant);
  let tmp4 = require("module_1652");
  let items1 = [closure_10, memo, tmp3, , ];
  const useAnimatedStyle = tmp4.useAnimatedStyle;
  items1[3] = require("module_1652").interpolateColor;
  items1[4] = pressed;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items1;
  class ButtonHooksNativeTsx2 {
    constructor() {
      let backgroundColor;
      if (c0 != null) {
        backgroundColor = tmp.backgroundColor;
      }
      if (backgroundColor == null) {
        const items = [, ];
        ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = c1);
        backgroundColor = items;
      }
      let borderColor;
      if (c0 != null) {
        borderColor = tmp.borderColor;
      }
      if (borderColor == null) {
        const items1 = [, ];
        ({ borderInactive: arr2[0], borderPressed: arr2[1] } = c1);
        borderColor = items1;
      }
      const obj = { backgroundColor: _undefined(_undefined2.get(), [0, 1], backgroundColor), borderColor: _undefined(_undefined2.get(), [0, 1], borderColor) };
      return obj;
    }
  }
  let items2 = [tmp6, tmp7, tmp8, tmp9];
  ButtonHooksNativeTsx2.__closure = items2;
  ButtonHooksNativeTsx2.__workletHash = 15509392859051;
  ButtonHooksNativeTsx2.__initData = tmp5;
  return useAnimatedStyle(ButtonHooksNativeTsx2);
}
export { useButtonScaleStyles };
export function useButtonPressAnimationProps(sharedValue, scaleAmountInPx, onLayout, onPressIn, onPressOut) {
  let items;
  let items1;
  let items2;
  let num = scaleAmountInPx;
  if (scaleAmountInPx === undefined) {
    num = 8;
  }
  let closure_0 = onLayout;
  let closure_1 = onPressIn;
  let closure_2 = onPressOut;
  const tmp2 = dependencyMap;
  const obj = _mod1652;
  sharedValue = obj.useSharedValue(0);
  const tmpResult = _mod1652;
  const sharedValue1 = tmpResult.useSharedValue(0);
  const obj2 = {
    onPressIn: react.useCallback((arg0) => {
      const result = sharedValue.set(1);
      if (closure_1 != null) {
        tmp2(arg0);
      }
    }, items),
    onPressOut: react.useCallback((arg0) => {
      const result = sharedValue.set(0);
      if (closure_2 != null) {
        tmp2(arg0);
      }
    }, items1),
    onLayout: react.useCallback((nativeEvent) => {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      if (closure_0 != null) {
        tmp2(nativeEvent);
      }
    }, items2),
    style: useButtonScaleStyles(sharedValue, sharedValue1, num)
  };
  items = [sharedValue, onPressIn];
  items1 = [sharedValue, onPressOut];
  items2 = [sharedValue1, onLayout];
  return obj2;
}
export const useIconSizeStyles = (arg0) => {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  if (arg2 === undefined) {
    const tmp = _require;
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = require("ButtonConstants").BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const obj = require("useFontScale");
  const fontScale = obj.useFontScale();
  const items = [arg0, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
  return fontScale.useMemo(() => {
    let iconSize;
    Icon;
    if ("sm" === closure_0) {
      const tmpResult = Icon;
      iconSize = tmpResult.getIconSize(tmp(5760).SMALL_BUTTON_ICON_SIZE);
    } else {
      iconSize = tmp4;
      if ("lg" === closure_0) {
        const tmpResult4 = Icon;
        iconSize = tmpResult4.getIconSize(tmp(5760).LARGE_BUTTON_ICON_SIZE);
      }
    }
    let width = iconSize;
    if (flag) {
      width = iconSize;
      if (fontScale > 1) {
        const TextStyleSheet = tmp(5747).TextStyleSheet;
        const tmpResult5 = ButtonConstants;
        const tmp13 = TextStyleSheet[tmpResult5.getButtonDefaultTextVariant(tmpResult5, closure_0)];
        const tmpResult6 = PlatformUtils;
        const tmp9 = tmpResult6.isAndroid() ? tmp13.fontSize : tmp13.lineHeight;
        width = iconSize;
        if (null != iconSize) {
          width = iconSize;
          if (null != tmp9) {
            const _Math = Math;
            const _Math2 = Math;
            width = Math.max(iconSize, tmp9 * Math.min(tmp8, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
      }
    }
    return { width, height: width };
  }, items);
};
