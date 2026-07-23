// Module ID: 4548
// Function ID: 39875
// Name: useProfileThemedButtonStyles
// Dependencies: [31, 4130, 3842, 689, 3976, 3834, 3991, 4542, 4546, 4547, 4549, 4545, 4126, 477, 2]
// Exports: useButtonPillStyles, useButtonPressAnimationProps, useGradientPillStyles, useIconSizeStyles, useIconTintStyles

// Module 4548 (useProfileThemedButtonStyles)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function useProfileThemedButtonStyles(variant) {
  const _require = variant;
  const themeContext = _require(theme[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  let items = [theme, primaryColor, variant];
  return React.useMemo(() => {
    if (null == primaryColor) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = primaryColor(theme[3]).unsafe_rawColors.WHITE;
      let obj = { base: WHITE, contrastRatio: variant(theme[2]).WCAGContrastRatios.HighContrastText };
      const contrastingColor = variant(theme[2]).getContrastingColor(primaryColor, obj);
      const obj8 = variant(theme[2]);
      const darkenColorResult = variant(theme[2]).darkenColor(contrastingColor, 0.5);
      obj = {};
      const items = [contrastingColor, darkenColorResult];
      obj.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj.borderColor = items1;
      obj.color = WHITE;
      return obj;
    } else if ("secondary" === tmp43) {
      const obj1 = {};
      const obj6 = variant(theme[4]);
      const isThemeLightResult = variant(theme[4]).isThemeLight(theme);
      const setColorOpacity2 = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp25 = variant(theme[2]);
      const obj7 = variant(theme[4]);
      const isThemeLightResult1 = variant(theme[4]).isThemeLight(theme);
      const setColorOpacity3 = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      items2[1] = setColorOpacity3Result;
      obj1.backgroundColor = items2;
      const items3 = [outer1_4, outer1_4];
      obj1.borderColor = items3;
      obj1.color = undefined;
      return obj1;
    } else if ("tertiary" === tmp43) {
      obj = variant(theme[4]);
      const isThemeLightResult2 = obj.isThemeLight(theme);
      const setColorOpacity = variant(theme[2]).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(primaryColor, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      let obj2 = {};
      const items4 = [setColorOpacityResult, ];
      obj2 = variant(theme[4]);
      const tmp7 = variant(theme[2]);
      const obj4 = variant(theme[2]);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj4.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj4.setColorOpacity("white", 0.2);
      }
      items4[1] = darkenColorResult1;
      obj2.backgroundColor = items4;
      const items5 = [outer1_4, outer1_4];
      obj2.borderColor = items5;
      obj2.color = undefined;
      return obj2;
    } else {
      return null;
    }
  }, items);
}
function useForegroundColor(variant) {
  return require(3834) /* map */.useToken(_createForOfIteratorHelperLoose[variant]);
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
  const _require = sharedValue;
  let closure_1 = sharedValue1;
  const dependencyMap = scaleAmountInPx;
  let obj = _require(3991);
  const fn = function n() {
    let num = 1;
    if (sharedValue1.get() > 0) {
      const diff = sharedValue1.get() - scaleAmountInPx;
      num = diff / sharedValue1.get();
    }
    let obj = {};
    obj = {};
    const obj3 = sharedValue(scaleAmountInPx[7]);
    const items = [1, num];
    const obj4 = sharedValue(scaleAmountInPx[6]);
    obj.scale = obj3.withSpring(sharedValue(scaleAmountInPx[6]).interpolate(sharedValue.get(), [0, 1], items), sharedValue(scaleAmountInPx[8]).ON_PRESS_SPRING, "animate-always");
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj = { width: sharedValue1, scaleAmountInPx, withSpring: _require(4542).withSpring, interpolate: _require(3991).interpolate, pressed: sharedValue, ON_PRESS_SPRING: _require(4546).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 17256006845494;
  fn.__initData = closure_10;
  return obj.useAnimatedStyle(fn);
}
let c4 = "rgba(0,0,0,0.001)";
let closure_5 = _createForOfIteratorHelperLoose.experimental_createToken(() => "#161CBB");
let closure_6 = _createForOfIteratorHelperLoose.experimental_createToken(() => "#1318A0");
_createForOfIteratorHelperLoose = { primary: require("_createForOfIteratorHelperLoose").colors.CONTROL_PRIMARY_TEXT_DEFAULT, "experimental_welcome-secondary": require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, secondary: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_TEXT_DEFAULT, tertiary: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_TEXT, destructive: require("_createForOfIteratorHelperLoose").colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-primary": require("_createForOfIteratorHelperLoose").colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-secondary": require("_createForOfIteratorHelperLoose").colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, active: require("_createForOfIteratorHelperLoose").colors.CONTROL_CONNECTED_TEXT_DEFAULT, "primary-overlay": require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, "secondary-overlay": require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, "experimental_premium-primary": require("_createForOfIteratorHelperLoose").colors.WHITE, "experimental_premium-basic": require("_createForOfIteratorHelperLoose").colors.WHITE, "experimental_premium-secondary": require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND, "icon-only": require("_createForOfIteratorHelperLoose").colors.CONTROL_ICON_ONLY_ICON_DEFAULT, expressive: require("_createForOfIteratorHelperLoose").colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
const styleProperties = _createForOfIteratorHelperLoose.createStyleProperties((arg0) => {
  if ("primary" === arg0) {
    let obj = { backgroundInactive: importDefault(689).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(689).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: importDefault(689).colors.CONTROL_PRIMARY_BORDER_DEFAULT, borderPressed: importDefault(689).colors.CONTROL_PRIMARY_BORDER_ACTIVE };
    return obj;
  } else if ("secondary" === arg0) {
    obj = { backgroundInactive: importDefault(689).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(689).colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: importDefault(689).colors.CONTROL_SECONDARY_BORDER_DEFAULT, borderPressed: importDefault(689).colors.CONTROL_SECONDARY_BORDER_ACTIVE };
    return obj;
  } else if ("tertiary" === arg0) {
    const obj1 = { backgroundInactive: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, backgroundPressed: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND, borderInactive: c4, borderPressed: c4 };
    return obj1;
  } else {
    if ("critical-primary" !== arg0) {
      if ("destructive" !== arg0) {
        if ("critical-secondary" === arg0) {
          const obj2 = { backgroundInactive: importDefault(689).colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(689).colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: importDefault(689).colors.CONTROL_CRITICAL_SECONDARY_BORDER_DEFAULT, borderPressed: importDefault(689).colors.CONTROL_CRITICAL_SECONDARY_BORDER_ACTIVE };
          return obj2;
        } else if ("active" === arg0) {
          const obj3 = { backgroundInactive: importDefault(689).colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, backgroundPressed: importDefault(689).colors.CONTROL_CONNECTED_BACKGROUND_ACTIVE, borderInactive: importDefault(689).colors.CONTROL_CONNECTED_BORDER_DEFAULT, borderPressed: importDefault(689).colors.CONTROL_CONNECTED_BORDER_ACTIVE };
          return obj3;
        } else {
          if ("experimental_premium-secondary" !== arg0) {
            if ("primary-overlay" !== arg0) {
              if ("secondary-overlay" === arg0) {
                const obj4 = { backgroundInactive: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, borderInactive: c4, borderPressed: c4 };
                return obj4;
              } else if ("experimental_welcome-secondary" === arg0) {
                const obj5 = { backgroundInactive: closure_5, backgroundPressed: closure_6, borderInactive: c4, borderPressed: c4 };
                return obj5;
              } else {
                if ("experimental_premium-primary" !== arg0) {
                  if ("experimental_premium-basic" !== arg0) {
                    if ("icon-only" === arg0) {
                      const obj6 = { backgroundInactive: c4, backgroundPressed: importDefault(689).colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: c4, borderPressed: c4 };
                      return obj6;
                    } else if ("expressive" === arg0) {
                      obj = { backgroundInactive: c4, backgroundPressed: c4, borderInactive: c4, borderPressed: c4 };
                      return obj;
                    }
                  }
                }
                const obj7 = { backgroundInactive: c4, backgroundPressed: importDefault(689).colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND, borderInactive: c4, borderPressed: c4 };
                return obj7;
              }
            }
          }
          const obj8 = { backgroundInactive: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE, borderInactive: c4, borderPressed: c4 };
          return obj8;
        }
      }
    }
    const obj9 = { backgroundInactive: importDefault(689).colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: importDefault(689).colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: importDefault(689).colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT, borderPressed: importDefault(689).colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE };
    return obj9;
  }
});
let closure_9 = { code: "function ButtonHooksNativeTsx1(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
let closure_10 = { code: "function ButtonHooksNativeTsx2(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
let result = require("ManaContext").fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

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
  const _require = pressed;
  const tmp = useProfileThemedButtonStyles(variant);
  const importDefault = tmp;
  const tmp2 = styleProperties(variant);
  const dependencyMap = tmp2;
  let obj = _require(3991);
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
    const obj = { backgroundColor: pressed(tmp2[6]).interpolateColor(pressed.get(), [0, 1], backgroundColor) };
    const obj2 = pressed(tmp2[6]);
    obj.borderColor = pressed(tmp2[6]).interpolateColor(pressed.get(), [0, 1], borderColor);
    return obj;
  };
  obj = { themedStyles: tmp, colors: tmp2, interpolateColor: _require(3991).interpolateColor, pressed };
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
  const _require = onLayout;
  let closure_1 = onPressIn;
  const dependencyMap = onPressOut;
  sharedValue = undefined;
  let sharedValue1;
  let obj = _require(3991);
  sharedValue = obj.useSharedValue(0);
  sharedValue1 = _require(3991).useSharedValue(0);
  obj = {
    onPressIn: sharedValue.useCallback((arg0) => {
      const result = sharedValue.set(1);
      if (null != onPressIn) {
        onPressIn(arg0);
      }
    }, items),
    onPressOut: sharedValue.useCallback((arg0) => {
      const result = sharedValue.set(0);
      if (null != onPressOut) {
        onPressOut(arg0);
      }
    }, items1),
    onLayout: sharedValue.useCallback((nativeEvent) => {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      if (null != onLayout) {
        onLayout(nativeEvent);
      }
    }, items2)
  };
  items = [sharedValue, onPressIn];
  items1 = [sharedValue, onPressOut];
  items2 = [sharedValue1, onLayout];
  obj.style = useButtonScaleStyles(sharedValue, sharedValue1, num);
  return obj;
};
export const useIconSizeStyles = (arg0) => {
  let flag = arg1;
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  const _require = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  if (BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER === undefined) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = _require(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  let fontScale;
  fontScale = _require(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[10]).useFontScale();
  const items = [arg0, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
  return fontScale.useMemo(() => {
    let obj = callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]);
    let iconSize = obj.getIconSize(callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]).MEDIUM_BUTTON_ICON_SIZE);
    if ("sm" === callback) {
      iconSize = callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]).getIconSize(callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]).SMALL_BUTTON_ICON_SIZE);
      const obj3 = callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]);
    } else if ("lg" === tmp2) {
      iconSize = callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]).getIconSize(callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]).LARGE_BUTTON_ICON_SIZE);
      const obj2 = callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]);
    }
    let bound = iconSize;
    if (flag) {
      bound = iconSize;
      if (fontScale > 1) {
        const obj5 = callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]);
        const tmp17 = callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[12]).TextStyleSheet[obj5.getButtonDefaultTextVariant(obj5, callback)];
        const tmp9 = callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[13]).isAndroid() ? tmp17.fontSize : tmp17.lineHeight;
        bound = iconSize;
        if (null != iconSize) {
          bound = iconSize;
          if (null != tmp9) {
            const _Math = Math;
            const _Math2 = Math;
            bound = Math.max(iconSize, tmp9 * Math.min(fontScale, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
        const obj6 = callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[13]);
      }
    }
    obj = { width: bound, height: bound };
    return obj;
  }, items);
};
