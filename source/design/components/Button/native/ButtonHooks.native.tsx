// Module ID: 4544
// Function ID: 39843
// Name: useProfileThemedButtonStyles
// Dependencies: []
// Exports: useButtonPillStyles, useButtonPressAnimationProps, useGradientPillStyles, useIconSizeStyles, useIconTintStyles

// Module 4544 (useProfileThemedButtonStyles)
function useProfileThemedButtonStyles(variant) {
  const arg1 = variant;
  const themeContext = arg1(dependencyMap[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  const importDefault = primaryColor;
  const theme = themeContext.theme;
  const dependencyMap = theme;
  const items = [theme, primaryColor, variant];
  return React.useMemo(() => {
    if (null == primaryColor) {
      return null;
    } else if ("primary" === arg0) {
      const WHITE = primaryColor(theme[3]).unsafe_rawColors.WHITE;
      let obj = { base: WHITE, contrastRatio: arg0(theme[2]).WCAGContrastRatios.HighContrastText };
      const contrastingColor = arg0(theme[2]).getContrastingColor(primaryColor, obj);
      const obj8 = arg0(theme[2]);
      const darkenColorResult = arg0(theme[2]).darkenColor(contrastingColor, 0.5);
      obj = {};
      const items = [contrastingColor, darkenColorResult];
      obj.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj.borderColor = items1;
      obj.color = WHITE;
      return obj;
    } else if ("secondary" === tmp43) {
      const obj1 = {};
      const obj6 = arg0(theme[4]);
      const isThemeLightResult = arg0(theme[4]).isThemeLight(theme);
      const setColorOpacity2 = arg0(theme[2]).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp25 = arg0(theme[2]);
      const obj7 = arg0(theme[4]);
      const isThemeLightResult1 = arg0(theme[4]).isThemeLight(theme);
      const setColorOpacity3 = arg0(theme[2]).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      items2[1] = setColorOpacity3Result;
      obj1.backgroundColor = items2;
      const items3 = [closure_4, closure_4];
      obj1.borderColor = items3;
      obj1.color = undefined;
      return obj1;
    } else if ("tertiary" === tmp43) {
      obj = arg0(theme[4]);
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = arg0(theme[2]).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(primaryColor, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      let obj2 = {};
      const items4 = [setColorOpacityResult, ];
      obj2 = arg0(theme[4]);
      const tmp7 = arg0(theme[2]);
      const obj4 = arg0(theme[2]);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj4.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj4.setColorOpacity("white", 0.2);
      }
      items4[1] = darkenColorResult1;
      obj2.backgroundColor = items4;
      const items5 = [closure_4, closure_4];
      obj2.borderColor = items5;
      obj2.color = undefined;
      return obj2;
    } else {
      return null;
    }
  }, items);
}
function useForegroundColor(variant) {
  const obj = arg1(dependencyMap[5]);
  return obj.useToken(obj[variant]);
}
function useButtonTextColorStyles(style) {
  let color;
  const tmp2 = useProfileThemedButtonStyles(style);
  let tmp3 = useForegroundColor(style);
  const obj = {};
  if (null != tmp2) {
    color = tmp2.color;
  }
  if (null != color) {
    tmp3 = color;
  }
  obj.color = tmp3;
  return obj;
}
function useButtonScaleStyles(sharedValue, sharedValue1, scaleAmountInPx) {
  sharedValue1 = sharedValue;
  const importDefault = sharedValue1;
  const dependencyMap = scaleAmountInPx;
  let obj = sharedValue1(dependencyMap[6]);
  const fn = function n() {
    let num = 1;
    if (arg1.get() > 0) {
      const diff = arg1.get() - arg2;
      num = diff / arg1.get();
    }
    let obj = {};
    obj = {};
    const obj3 = arg0(arg2[7]);
    const items = [false, num];
    const obj4 = arg0(arg2[6]);
    obj.scale = obj3.withSpring(arg0(arg2[6]).interpolate(arg0.get(), [77601039, 1612144654], items), arg0(arg2[8]).ON_PRESS_SPRING, "animate-always");
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj = { width: sharedValue1, scaleAmountInPx, withSpring: sharedValue1(dependencyMap[7]).withSpring, interpolate: sharedValue1(dependencyMap[6]).interpolate, pressed: sharedValue, ON_PRESS_SPRING: sharedValue1(dependencyMap[8]).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 17256006845494;
  fn.__initData = closure_10;
  return obj.useAnimatedStyle(fn);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = "rgba(0,0,0,0.001)";
let obj = arg1(dependencyMap[1]);
let closure_5 = obj.experimental_createToken(() => "#161CBB");
let closure_6 = arg1(dependencyMap[1]).experimental_createToken(() => "#1318A0");
obj = { primary: importDefault(dependencyMap[3]).colors.CONTROL_PRIMARY_TEXT_DEFAULT, experimental_welcome-secondary: importDefault(dependencyMap[3]).unsafe_rawColors.WHITE, secondary: importDefault(dependencyMap[3]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, tertiary: importDefault(dependencyMap[3]).colors.REDESIGN_BUTTON_TERTIARY_TEXT, destructive: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, critical-primary: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, critical-secondary: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, active: importDefault(dependencyMap[3]).colors.CONTROL_CONNECTED_TEXT_DEFAULT, primary-overlay: importDefault(dependencyMap[3]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, secondary-overlay: importDefault(dependencyMap[3]).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, experimental_premium-primary: importDefault(dependencyMap[3]).colors.WHITE, experimental_premium-basic: importDefault(dependencyMap[3]).colors.WHITE, experimental_premium-secondary: importDefault(dependencyMap[3]).colors.TEXT_BRAND, icon-only: importDefault(dependencyMap[3]).colors.CONTROL_ICON_ONLY_ICON_DEFAULT, expressive: importDefault(dependencyMap[3]).colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
const obj2 = arg1(dependencyMap[1]);
const styleProperties = arg1(dependencyMap[1]).createStyleProperties((arg0) => {
  if ("primary" === arg0) {
    let obj = { backgroundInactive: importDefault(dependencyMap[3]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(dependencyMap[3]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: importDefault(dependencyMap[3]).colors.CONTROL_PRIMARY_BORDER_DEFAULT, borderPressed: importDefault(dependencyMap[3]).colors.CONTROL_PRIMARY_BORDER_ACTIVE };
    return obj;
  } else if ("secondary" === arg0) {
    obj = { backgroundInactive: importDefault(dependencyMap[3]).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(dependencyMap[3]).colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: importDefault(dependencyMap[3]).colors.CONTROL_SECONDARY_BORDER_DEFAULT, borderPressed: importDefault(dependencyMap[3]).colors.CONTROL_SECONDARY_BORDER_ACTIVE };
    return obj;
  } else if ("tertiary" === arg0) {
    const obj1 = { backgroundInactive: importDefault(dependencyMap[3]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, backgroundPressed: importDefault(dependencyMap[3]).colors.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND, borderInactive: closure_4, borderPressed: closure_4 };
    return obj1;
  } else {
    if ("critical-primary" !== arg0) {
      if ("destructive" !== arg0) {
        if ("critical-secondary" === arg0) {
          const obj2 = { backgroundInactive: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_SECONDARY_BORDER_DEFAULT, borderPressed: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_SECONDARY_BORDER_ACTIVE };
          return obj2;
        } else if ("active" === arg0) {
          const obj3 = { backgroundInactive: importDefault(dependencyMap[3]).colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, backgroundPressed: importDefault(dependencyMap[3]).colors.CONTROL_CONNECTED_BACKGROUND_ACTIVE, borderInactive: importDefault(dependencyMap[3]).colors.CONTROL_CONNECTED_BORDER_DEFAULT, borderPressed: importDefault(dependencyMap[3]).colors.CONTROL_CONNECTED_BORDER_ACTIVE };
          return obj3;
        } else {
          if ("experimental_premium-secondary" !== arg0) {
            if ("primary-overlay" !== arg0) {
              if ("secondary-overlay" === arg0) {
                const obj4 = { backgroundInactive: importDefault(dependencyMap[3]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(dependencyMap[3]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, borderInactive: closure_4, borderPressed: closure_4 };
                return obj4;
              } else if ("experimental_welcome-secondary" === arg0) {
                const obj5 = { backgroundInactive: closure_5, backgroundPressed: closure_6, borderInactive: closure_4, borderPressed: closure_4 };
                return obj5;
              } else {
                if ("experimental_premium-primary" !== arg0) {
                  if ("experimental_premium-basic" !== arg0) {
                    if ("icon-only" === arg0) {
                      const obj6 = { backgroundInactive: closure_4, backgroundPressed: importDefault(dependencyMap[3]).colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: closure_4, borderPressed: closure_4 };
                      return obj6;
                    } else if ("expressive" === arg0) {
                      obj = { backgroundInactive: closure_4, backgroundPressed: closure_4, borderInactive: closure_4, borderPressed: closure_4 };
                      return obj;
                    }
                  }
                }
                const obj7 = { backgroundInactive: closure_4, backgroundPressed: importDefault(dependencyMap[3]).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND, borderInactive: closure_4, borderPressed: closure_4 };
                return obj7;
              }
            }
          }
          const obj8 = { backgroundInactive: importDefault(dependencyMap[3]).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(dependencyMap[3]).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE, borderInactive: closure_4, borderPressed: closure_4 };
          return obj8;
        }
      }
    }
    const obj9 = { backgroundInactive: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT, borderPressed: importDefault(dependencyMap[3]).colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE };
    return obj9;
  }
});
let closure_9 = { code: "function ButtonHooksNativeTsx1(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
let closure_10 = { code: "function ButtonHooksNativeTsx2(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
const obj4 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

export const SAFE_TRANSPARENT_COLOR = "rgba(0,0,0,0.001)";
export { useProfileThemedButtonStyles };
export { useForegroundColor };
export const useButtonColorStyles = styleProperties;
export { useButtonTextColorStyles };
export const useIconTintStyles = function useIconTintStyles(style) {
  return { tintColor: useButtonTextColorStyles(style).color };
};
export const useGradientPillStyles = function useGradientPillStyles(variant) {
  return { borderColor: styleProperties(variant).borderInactive };
};
export const useButtonPillStyles = function useButtonPillStyles(variant, pressed) {
  const tmp = useProfileThemedButtonStyles(variant);
  const importDefault = tmp;
  const tmp2 = styleProperties(variant);
  const dependencyMap = tmp2;
  let obj = pressed(dependencyMap[6]);
  const fn = function s() {
    let backgroundColor;
    if (null != tmp) {
      backgroundColor = tmp.backgroundColor;
    }
    if (null == backgroundColor) {
      const items = [, ];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = tmp2);
      backgroundColor = items;
    }
    let borderColor;
    if (null != tmp) {
      borderColor = tmp.borderColor;
    }
    if (null == borderColor) {
      const items1 = [, ];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = tmp2);
      borderColor = items1;
    }
    const obj = { backgroundColor: arg1(tmp2[6]).interpolateColor(arg1.get(), [77601039, 1612144654], backgroundColor) };
    const obj2 = arg1(tmp2[6]);
    obj.borderColor = arg1(tmp2[6]).interpolateColor(arg1.get(), [77601039, 1612144654], borderColor);
    return obj;
  };
  obj = { themedStyles: tmp, colors: tmp2, interpolateColor: pressed(dependencyMap[6]).interpolateColor, pressed };
  fn.__closure = obj;
  fn.__workletHash = 2383933325137;
  fn.__initData = closure_9;
  return obj.useAnimatedStyle(fn);
};
export { useButtonScaleStyles };
export const useButtonPressAnimationProps = function useButtonPressAnimationProps(sharedValue, scaleAmountInPx, onLayout, onPressIn, onPressOut) {
  let num = scaleAmountInPx;
  if (scaleAmountInPx === undefined) {
    num = 8;
  }
  scaleAmountInPx = onLayout;
  const importDefault = onPressIn;
  const dependencyMap = onPressOut;
  let React;
  let closure_4;
  let obj = scaleAmountInPx(dependencyMap[6]);
  sharedValue = obj.useSharedValue(0);
  React = sharedValue;
  const sharedValue1 = scaleAmountInPx(dependencyMap[6]).useSharedValue(0);
  closure_4 = sharedValue1;
  obj = {
    onPressIn: React.useCallback((arg0) => {
      const result = sharedValue.set(1);
      if (null != arg3) {
        arg3(arg0);
      }
    }, items),
    onPressOut: React.useCallback((arg0) => {
      const result = sharedValue.set(0);
      if (null != arg4) {
        arg4(arg0);
      }
    }, items1),
    onLayout: React.useCallback((nativeEvent) => {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      if (null != arg2) {
        arg2(nativeEvent);
      }
    }, items2)
  };
  const items = [sharedValue, onPressIn];
  const items1 = [sharedValue, onPressOut];
  const items2 = [sharedValue1, onLayout];
  obj.style = useButtonScaleStyles(sharedValue, sharedValue1, num);
  return obj;
};
export const useIconSizeStyles = (arg0) => {
  let flag = arg1;
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const importDefault = flag;
  if (BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER === undefined) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg1(dependencyMap[9]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const dependencyMap = BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  let React;
  const fontScale = arg1(dependencyMap[10]).useFontScale();
  React = fontScale;
  const items = [arg0, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
  return React.useMemo(() => {
    let obj = arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]);
    let iconSize = obj.getIconSize(arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]).MEDIUM_BUTTON_ICON_SIZE);
    if ("sm" === arg0) {
      iconSize = arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]).getIconSize(arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]).SMALL_BUTTON_ICON_SIZE);
      const obj3 = arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]);
    } else if ("lg" === tmp2) {
      iconSize = arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]).getIconSize(arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]).LARGE_BUTTON_ICON_SIZE);
      const obj2 = arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]);
    }
    let bound = iconSize;
    if (flag) {
      bound = iconSize;
      if (fontScale > 1) {
        const obj5 = arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]);
        const tmp17 = arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[12]).TextStyleSheet[obj5.getButtonDefaultTextVariant(obj5, closure_0)];
        const tmp9 = arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[13]).isAndroid() ? tmp17.fontSize : tmp17.lineHeight;
        bound = iconSize;
        if (null != iconSize) {
          bound = iconSize;
          if (null != tmp9) {
            const _Math = Math;
            const _Math2 = Math;
            bound = Math.max(iconSize, tmp9 * Math.min(fontScale, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
        const obj6 = arg0(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[13]);
      }
    }
    obj = { width: bound, height: bound };
    return obj;
  }, items);
};
