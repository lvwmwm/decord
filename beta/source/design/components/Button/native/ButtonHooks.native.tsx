// Module ID: 5287
// Function ID: 5288
// Name: ButtonHooks
// Dependencies: [19, 4836, 4540, 576, 4685, 4531, 4566, 5280, 5284, 5286, 5288, 5283, 4832, 1364, 2]
// Exports: useButtonPillStyles, useButtonPressAnimationProps, useButtonScaleStyles, useButtonTextColorStyles, useForegroundColor, useGradientPillStyles, useIconSizeStyles, useIconTintStyles, useProfileThemedButtonStyles

// Module 5287 (ButtonHooks)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useToken from "useToken" /* 4531 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import Icon from "Icon" /* 5283 */;
import springPresets from "springPresets" /* 5284 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

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
let c4 = "rgba(0,0,0,0.001)";
let createStyles = createStyles_mod;
const backgroundInactive = createStyles.experimental_createToken(() => "#161CBB");
createStyles = createStyles_mod;
const backgroundPressed = createStyles.experimental_createToken(() => "#1318A0");
createStyles = createStyles_mod;
const styleProperties = createStyles.createStyleProperties(getButtonColorTokens);
const __initData = { code: "function ButtonHooksNativeTsx1(){const{interpolateColor,pressed,inactiveColor,pressedColor}=this.__closure;return{tintColor:interpolateColor(pressed.get(),[0,1],[inactiveColor,pressedColor])};}" };
const __initData2 = { code: "function ButtonHooksNativeTsx2(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
const __initData3 = { code: "function ButtonHooksNativeTsx3(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
let result = size.fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

export const SAFE_TRANSPARENT_COLOR = "rgba(0,0,0,0.001)";
export const useProfileThemedButtonStyles = function useProfileThemedButtonStyles(arg0) {
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
    } else if ("primary" === closure_0) {
      const WHITE = memo(theme[3]).unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: closure_0(theme[2]).WCAGContrastRatios.HighContrastText };
      const getContrastingColor = closure_0(theme[2]).getContrastingColor;
      closure_0(theme[2]);
      const contrastingColor = getContrastingColor(tmp, obj4);
      const obj9 = closure_0(theme[2]);
      const darkenColorResult = obj9.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: items, borderColor: items1, color: WHITE };
      items = [contrastingColor, darkenColorResult];
      items1 = [contrastingColor, darkenColorResult];
      return obj7;
    } else if ("secondary" === closure_0) {
      let setColorOpacity2Result;
      let setColorOpacity3Result;
      const obj5 = closure_0(theme[4]);
      const isThemeLightResult = obj5.isThemeLight(theme);
      const setColorOpacity2 = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      const tmp20 = theme;
      if (isThemeLightResult) {
        setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const obj6 = closure_0(theme[4]);
      const isThemeLightResult1 = obj6.isThemeLight(tmp20);
      const setColorOpacity3 = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      if (isThemeLightResult1) {
        setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj8 = { backgroundColor: items2, borderColor: items3, color: "Array" };
      items2[1] = setColorOpacity3Result;
      items3 = [rgba0000001, rgba0000001];
      return obj8;
    } else if ("tertiary" === closure_0) {
      let setColorOpacityResult;
      let darkenColorResult1;
      const obj = closure_0(theme[4]);
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      const tmp4 = theme;
      if (isThemeLightResult2) {
        setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj2 = closure_0(theme[4]);
      const isThemeLightResult3 = obj2.isThemeLight(tmp4);
      const obj3 = closure_0(theme[2]);
      if (isThemeLightResult3) {
        darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj10 = { backgroundColor: items4, borderColor: items5, color: "Array" };
      items4[1] = darkenColorResult1;
      items5 = [rgba0000001, rgba0000001];
      return obj10;
    } else {
      return null;
    }
  }, items);
};
export const useForegroundColor = function useForegroundColor(variant) {
  const obj = useToken;
  return obj.useToken(getButtonColorTokens(variant).foregroundInactive);
};
export const useButtonColorStyles = styleProperties;
export const useButtonTextColorStyles = function useButtonTextColorStyles(active) {
  let theme;
  _require = active;
  const obj = require("native");
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, active];
  const memo = react.useMemo(() => {
    let items;
    let items1;
    let items3;
    let items5;
    if (null == primaryColor) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = memo(theme[3]).unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: closure_0(theme[2]).WCAGContrastRatios.HighContrastText };
      const getContrastingColor = closure_0(theme[2]).getContrastingColor;
      closure_0(theme[2]);
      const contrastingColor = getContrastingColor(tmp, obj4);
      const obj9 = closure_0(theme[2]);
      const darkenColorResult = obj9.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: items, borderColor: items1, color: WHITE };
      items = [contrastingColor, darkenColorResult];
      items1 = [contrastingColor, darkenColorResult];
      return obj7;
    } else if ("secondary" === closure_0) {
      let setColorOpacity2Result;
      let setColorOpacity3Result;
      const obj5 = closure_0(theme[4]);
      const isThemeLightResult = obj5.isThemeLight(theme);
      const setColorOpacity2 = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      const tmp20 = theme;
      if (isThemeLightResult) {
        setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const obj6 = closure_0(theme[4]);
      const isThemeLightResult1 = obj6.isThemeLight(tmp20);
      const setColorOpacity3 = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      if (isThemeLightResult1) {
        setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj8 = { backgroundColor: items2, borderColor: items3, color: "Array" };
      items2[1] = setColorOpacity3Result;
      items3 = [rgba0000001, rgba0000001];
      return obj8;
    } else if ("tertiary" === closure_0) {
      let setColorOpacityResult;
      let darkenColorResult1;
      const obj = closure_0(theme[4]);
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      const tmp4 = theme;
      if (isThemeLightResult2) {
        setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj2 = closure_0(theme[4]);
      const isThemeLightResult3 = obj2.isThemeLight(tmp4);
      const obj3 = closure_0(theme[2]);
      if (isThemeLightResult3) {
        darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj10 = { backgroundColor: items4, borderColor: items5, color: "Array" };
      items4[1] = darkenColorResult1;
      items5 = [rgba0000001, rgba0000001];
      return obj10;
    } else {
      return null;
    }
  }, items);
  let color;
  const obj2 = require("useToken");
  const token = obj2.useToken(getButtonColorTokens(active).foregroundInactive);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  return { color };
};
export const useIconTintStyles = function useIconTintStyles(variant, sharedValue) {
  let token1;
  _require = variant;
  let obj = require("native");
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  const theme = themeContext.theme;
  let items = [theme, primaryColor, variant];
  const memo = react.useMemo(() => {
    let items;
    let items1;
    let items3;
    let items5;
    if (null == primaryColor) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = memo(theme[3]).unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: closure_0(theme[2]).WCAGContrastRatios.HighContrastText };
      const getContrastingColor = closure_0(theme[2]).getContrastingColor;
      closure_0(theme[2]);
      const contrastingColor = getContrastingColor(tmp, obj4);
      const obj9 = closure_0(theme[2]);
      const darkenColorResult = obj9.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: items, borderColor: items1, color: WHITE };
      items = [contrastingColor, darkenColorResult];
      items1 = [contrastingColor, darkenColorResult];
      return obj7;
    } else if ("secondary" === closure_0) {
      let setColorOpacity2Result;
      let setColorOpacity3Result;
      const obj5 = closure_0(theme[4]);
      const isThemeLightResult = obj5.isThemeLight(theme);
      const setColorOpacity2 = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      const tmp20 = theme;
      if (isThemeLightResult) {
        setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const obj6 = closure_0(theme[4]);
      const isThemeLightResult1 = obj6.isThemeLight(tmp20);
      const setColorOpacity3 = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      if (isThemeLightResult1) {
        setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj8 = { backgroundColor: items2, borderColor: items3, color: "Array" };
      items2[1] = setColorOpacity3Result;
      items3 = [rgba0000001, rgba0000001];
      return obj8;
    } else if ("tertiary" === closure_0) {
      let setColorOpacityResult;
      let darkenColorResult1;
      const obj = closure_0(theme[4]);
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      const tmp4 = theme;
      if (isThemeLightResult2) {
        setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj2 = closure_0(theme[4]);
      const isThemeLightResult3 = obj2.isThemeLight(tmp4);
      const obj3 = closure_0(theme[2]);
      if (isThemeLightResult3) {
        darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj10 = { backgroundColor: items4, borderColor: items5, color: "Array" };
      items4[1] = darkenColorResult1;
      items5 = [rgba0000001, rgba0000001];
      return obj10;
    } else {
      return null;
    }
  }, items);
  let obj2 = require("useToken");
  let color;
  const token = obj2.useToken(getButtonColorTokens(variant).foregroundInactive);
  const tmp5 = getButtonColorTokens;
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  const tmpResult = require("useToken");
  token1 = tmpResult.useToken(tmp5(variant).foregroundPressed);
  const fn = function t() {
    let items;
    let obj2;
    const obj = { tintColor: obj2.interpolateColor(sharedValue.get(), [0, 1], items) };
    items = [color, token1];
    obj2 = ReanimatedRexport;
    return obj;
  };
  const tmpResult2 = require("ReanimatedRexport");
  fn.__closure = { interpolateColor: require("ReanimatedRexport").interpolateColor, pressed: sharedValue, inactiveColor: color, pressedColor: token1 };
  fn.__workletHash = 10122935395765;
  fn.__initData = __initData;
  ({ interpolateColor: require("ReanimatedRexport").interpolateColor, pressed: sharedValue, inactiveColor: color, pressedColor: token1 });
  return tmpResult2.useAnimatedStyle(fn);
};
export const useGradientPillStyles = function useGradientPillStyles(variant) {
  const obj = { borderColor: styleProperties(variant).borderInactive };
  return obj;
};
export const useButtonPillStyles = function useButtonPillStyles(variant, pressed) {
  let closure_2;
  _require = variant;
  let obj = require("native");
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  const theme = themeContext.theme;
  let items = [theme, primaryColor, variant];
  const memo = react.useMemo(() => {
    let items;
    let items1;
    let items3;
    let items5;
    if (null == primaryColor) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = memo(theme[3]).unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: closure_0(theme[2]).WCAGContrastRatios.HighContrastText };
      const getContrastingColor = closure_0(theme[2]).getContrastingColor;
      closure_0(theme[2]);
      const contrastingColor = getContrastingColor(tmp, obj4);
      const obj9 = closure_0(theme[2]);
      const darkenColorResult = obj9.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: items, borderColor: items1, color: WHITE };
      items = [contrastingColor, darkenColorResult];
      items1 = [contrastingColor, darkenColorResult];
      return obj7;
    } else if ("secondary" === closure_0) {
      let setColorOpacity2Result;
      let setColorOpacity3Result;
      const obj5 = closure_0(theme[4]);
      const isThemeLightResult = obj5.isThemeLight(theme);
      const setColorOpacity2 = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      const tmp20 = theme;
      if (isThemeLightResult) {
        setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const obj6 = closure_0(theme[4]);
      const isThemeLightResult1 = obj6.isThemeLight(tmp20);
      const setColorOpacity3 = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      if (isThemeLightResult1) {
        setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj8 = { backgroundColor: items2, borderColor: items3, color: "Array" };
      items2[1] = setColorOpacity3Result;
      items3 = [rgba0000001, rgba0000001];
      return obj8;
    } else if ("tertiary" === closure_0) {
      let setColorOpacityResult;
      let darkenColorResult1;
      const obj = closure_0(theme[4]);
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = closure_0(theme[2]).setColorOpacity;
      closure_0(theme[2]);
      const tmp4 = theme;
      if (isThemeLightResult2) {
        setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      const obj2 = closure_0(theme[4]);
      const isThemeLightResult3 = obj2.isThemeLight(tmp4);
      const obj3 = closure_0(theme[2]);
      if (isThemeLightResult3) {
        darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj10 = { backgroundColor: items4, borderColor: items5, color: "Array" };
      items4[1] = darkenColorResult1;
      items5 = [rgba0000001, rgba0000001];
      return obj10;
    } else {
      return null;
    }
  }, items);
  const tmp3 = styleProperties(variant);
  dependencyMap = tmp3;
  let obj2 = require("ReanimatedRexport");
  const fn = function t() {
    let obj2;
    let obj3;
    let backgroundColor;
    if (memo != null) {
      backgroundColor = tmp.backgroundColor;
    }
    if (backgroundColor == null) {
      const items = [, ];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = closure_2);
      backgroundColor = items;
    }
    let borderColor;
    if (memo != null) {
      borderColor = tmp.borderColor;
    }
    if (borderColor == null) {
      const items1 = [, ];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = closure_2);
      borderColor = items1;
    }
    const obj = { backgroundColor: obj2.interpolateColor(pressed.get(), [0, 1], backgroundColor), borderColor: obj3.interpolateColor(pressed.get(), [0, 1], borderColor) };
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    return obj;
  };
  let obj3 = { themedStyles: memo, colors: tmp3, interpolateColor: require("ReanimatedRexport").interpolateColor, pressed };
  fn.__closure = obj3;
  fn.__workletHash = 6773022706866;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
};
export const useButtonScaleStyles = function useButtonScaleStyles(pressed, width, scaleAmountInPx) {
  _require = pressed;
  let closure_1 = width;
  dependencyMap = scaleAmountInPx;
  const fn = function n() {
    let interpolateResult;
    let items1;
    let withSpring;
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    const obj2 = { transform: items1 };
    const obj3 = { scale: withSpring(interpolateResult, springPresets.ON_PRESS_SPRING, "animate-always") };
    withSpring = spring.withSpring;
    spring;
    const items = [1, num];
    const obj4 = ReanimatedRexport;
    items1 = [obj3];
    interpolateResult = obj4.interpolate(sharedValue.get(), [0, 1], items);
    return obj2;
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { width, scaleAmountInPx, withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, pressed, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING };
  fn.__workletHash = 11512187496215;
  fn.__initData = __initData3;
  ({ width, scaleAmountInPx, withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, pressed, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING });
  return obj.useAnimatedStyle(fn);
};
export const useButtonPressAnimationProps = function useButtonPressAnimationProps(sharedValue, scaleAmountInPx, onLayout, onPressIn, onPressOut) {
  let fn;
  let items;
  let items1;
  let items2;
  let tmpResult2;
  let num = scaleAmountInPx;
  if (scaleAmountInPx === undefined) {
    num = 8;
  }
  let closure_0 = onLayout;
  let closure_1 = onPressIn;
  let closure_2 = onPressOut;
  sharedValue = undefined;
  const tmp2 = num;
  const obj = sharedValue(num[6]);
  sharedValue = obj.useSharedValue(0);
  const tmpResult = sharedValue(tmp2[6]);
  const sharedValue1 = tmpResult.useSharedValue(0);
  let obj2 = {
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
    style: tmpResult2.useAnimatedStyle(fn)
  };
  items = [sharedValue, onPressIn];
  items1 = [sharedValue, onPressOut];
  items2 = [sharedValue1, onLayout];
  fn = function n() {
    let interpolateResult;
    let items1;
    let withSpring;
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    const obj2 = { transform: items1 };
    const obj3 = { scale: withSpring(interpolateResult, springPresets.ON_PRESS_SPRING, "animate-always") };
    withSpring = spring.withSpring;
    spring;
    const items = [1, num];
    const obj4 = ReanimatedRexport;
    items1 = [obj3];
    interpolateResult = obj4.interpolate(sharedValue.get(), [0, 1], items);
    return obj2;
  };
  tmpResult2 = sharedValue(tmp2[6]);
  let obj3 = { width: sharedValue1, scaleAmountInPx: num, withSpring: tmp(tmp2[7]).withSpring, interpolate: tmp(tmp2[6]).interpolate, pressed: sharedValue, ON_PRESS_SPRING: tmp(tmp2[8]).ON_PRESS_SPRING };
  fn.__closure = obj3;
  fn.__workletHash = 11512187496215;
  fn.__initData = __initData3;
  return obj2;
};
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
      iconSize = tmpResult.getIconSize(tmp(5286).SMALL_BUTTON_ICON_SIZE);
    } else {
      iconSize = tmp4;
      if ("lg" === closure_0) {
        const tmpResult4 = Icon;
        iconSize = tmpResult4.getIconSize(tmp(5286).LARGE_BUTTON_ICON_SIZE);
      }
    }
    let width = iconSize;
    if (flag) {
      width = iconSize;
      if (fontScale > 1) {
        const TextStyleSheet = tmp(4832).TextStyleSheet;
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
