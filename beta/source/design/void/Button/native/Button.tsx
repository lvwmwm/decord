// Module ID: 1180
// Function ID: 1181
// Name: Button/Button
// Dependencies: [19, 17, 1074, 1181, 21, 4836, 576, 4683, 5753, 1364, 12157, 8072, 4685, 5998, 5281, 2]
// Exports: getRedesignSize, getRedesignVariant

// Module 1180 (Button/Button)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import FormConstants from "FormConstants" /* 1181 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import shared from "shared" /* 4685 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8072 */;
import StylesheetUtils from "StylesheetUtils" /* 12157 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj2;
let obj21;
let obj3;
let obj4;
let obj5;
function getTextStyles(disabled, text) {
  let color;
  let look;
  let flag = disabled.disabled;
  ({ color, look, size } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const items = [text.text, , , , ];
  const obj = { [closure_1_13.BRAND]: text.textBrand, [closure_1_13.RED]: text.textRed, [closure_1_13.GREEN]: text.textGreen, [closure_1_13.PRIMARY]: text.textPrimary, [closure_1_13.TRANSPARENT]: text.textTransparent, [closure_1_13.GREY]: text.textGrey, [closure_1_13.LIGHTGREY]: text.textLightgrey, [closure_1_13.WHITE]: text.textWhite, [closure_1_13.LINK]: text.textLink };
  items[1] = obj[color];
  const obj2 = { [closure_1_12.FILLED]: text.textFilled, [closure_1_12.LINK]: text.textLink, [closure_1_12.OUTLINED]: text.textOutlined };
  items[2] = obj2[look];
  items[3] = flag ? text.textDisabled : text.textDefault;
  const obj3 = { [closure_1_15.XSMALL]: text.textXsmall, [closure_1_15.SMALL]: text.textSmall, [closure_1_15.MEDIUM]: text.textMedium, [closure_1_15.LARGE]: text.textLarge };
  items[4] = obj3[size];
  return items;
}
function getButtonStyles(shrink, button) {
  let color;
  let disabled;
  let look;
  ({ color, disabled } = shrink);
  ({ size, look } = shrink);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = shrink.shrink;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = shrink.pressed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = shrink.darkenOnPress;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let combined = color;
  const style = shrink.style;
  const tmp2 = disabled ? constants.DISABLED : constants.DEFAULT;
  if (flag2) {
    combined = color;
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const _HermesInternal = HermesInternal;
      combined = "" + color + "Dark";
    }
  }
  const items = [button.button, , , , , , ];
  let buttonShrink = null;
  if (flag) {
    buttonShrink = button.buttonShrink;
  }
  items[1] = buttonShrink;
  const obj2 = StylesheetUtils;
  items[2] = obj2.getClass(button, "button", combined, tmp2);
  const obj3 = StylesheetUtils;
  items[3] = obj3.getClass(button, "button", size);
  const obj4 = StylesheetUtils;
  items[4] = obj4.getClass(button, "button", look);
  let faded;
  if (!flag3) {
    const tmp8Result = PlatformUtils;
    if (!tmp8Result.isAndroid()) {
      if (flag2) {
        faded = button.faded;
      }
    }
  }
  items[5] = faded;
  items[6] = style;
  return items;
}
class ButtonText {
  constructor(arg0) {
    let children;
    let color;
    let disabled;
    let items;
    let items1;
    let look;
    let obj4;
    let style;
    let tmp7;
    ({ children, color, look, size, disabled, style } = arg0);
    const tmp = styles();
    if (typeof children !== "function") {
      const obj = { maxFontSizeMultiplier: 2, numberOfLines: 1, style: items, children };
      items = [, ];
      const obj2 = { color, look, size, disabled };
      const tmp5 = LegacyText_LegacyTextDefault;
      items[0] = getTextStyles(obj2, tmp);
      items[1] = style;
      tmp7 = metroImportAll(tmp5, obj);
    } else {
      const obj3 = { children: children(obj4) };
      obj4 = { style: items1 };
      const obj5 = { color, look, size, disabled };
      items1 = [getTextStyles(obj5, tmp), style];
      tmp7 = metroImportAll(React4, obj3);
    }
    return tmp7;
  }
}
class Button {
  constructor(look) {
    let Button;
    let accessibilityActions;
    let accessibilityHint;
    let accessibilityLabel;
    let accessibilityState;
    let accessibilityValue;
    let closure_15;
    let darkenOnPress;
    let foregroundRipple;
    let items4;
    let obj3;
    let onAccessibilityAction;
    let onLongPress;
    let onPress;
    let onPressIn;
    let onPressOut;
    let onTouchEnd;
    let onTouchStart;
    let renderIcon;
    let renderIconResult;
    let renderLinearGradient;
    let renderRightIcon;
    let renderShine;
    let str2;
    let str4;
    let str5;
    let testID;
    let tmp18;
    let FILLED = look.look;
    if (FILLED === undefined) {
      let tmp = darkenOnPress;
      FILLED = darkenOnPress.FILLED;
    }
    let BRAND = look.color;
    if (BRAND === undefined) {
      BRAND = foregroundRipple.BRAND;
    }
    let MEDIUM = look.size;
    if (MEDIUM === undefined) {
      MEDIUM = constants.MEDIUM;
    }
    const text = look.text;
    react = text;
    let flag = look.shrink;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = look.disabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = look.loading;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let WHITE = look.loadingColorDark;
    if (WHITE === undefined) {
      WHITE = BRAND(MEDIUM[6]).unsafe_rawColors.WHITE;
    }
    let PRIMARY_500 = look.loadingColorLight;
    if (PRIMARY_500 === undefined) {
      PRIMARY_500 = BRAND(MEDIUM[6]).unsafe_rawColors.PRIMARY_500;
    }
    const textStyle = look.textStyle;
    const style = look.style;
    let str = look.accessibilityRole;
    if (str === undefined) {
      str = "button";
    }
    ({ accessibilityLabel, accessibilityHint, accessibilityState } = look);
    ({ accessibilityActions, onAccessibilityAction, darkenOnPress } = look);
    ({ renderIcon, renderRightIcon, renderShine, renderLinearGradient, onPress, onPressIn, onPressOut, onTouchStart, foregroundRipple } = look);
    const cornerRadius = look.cornerRadius;
    ({ accessibilityValue, testID, onTouchEnd, onLongPress } = look);
    const tmp8 = accessibilityState();
    constants = tmp8;
    const tmp10 = MEDIUM;
    let obj = FILLED(MEDIUM[12]);
    const theme = obj.useThemeContext().theme;
    const items = [BRAND, flag2, flag3, FILLED, MEDIUM, text, textStyle, WHITE, PRIMARY_500, theme];
    const items1 = [flag2, accessibilityState];
    const memo = react.useMemo(() => {
      let obj2;
      let tmpResult;
      if (flag3) {
        const obj3 = { color: obj2.isThemeDark(theme) ? WHITE : PRIMARY_500 };
        obj2 = shared;
        tmpResult = tmp(React3, obj3);
      } else {
        const obj = { color: BRAND, look: FILLED, size: MEDIUM, disabled: flag2, style: textStyle, children: react };
        tmpResult = tmp(ButtonText, obj);
      }
      return tmpResult;
    }, items);
    const items2 = [BRAND, darkenOnPress, MEDIUM, FILLED, flag2, flag, style, tmp8];
    const memo1 = react.useMemo(() => {
      const obj = { disabled: flag2 };
      const merged = Object.assign(accessibilityState);
      return obj;
    }, items1);
    const items3 = [foregroundRipple, cornerRadius];
    const callback = react.useCallback((pressed) => {
      const obj = { color: BRAND, size: MEDIUM, disabled: flag2, look: FILLED, shrink: flag, pressed: pressed.pressed, darkenOnPress, style };
      return getButtonStyles(obj, closure_15);
    }, items2);
    const memo2 = react.useMemo(() => {
      let num;
      const obj = { foreground: foregroundRipple, cornerRadius: num };
      num = cornerRadius;
      const tmp = getThemedRippleConfig;
      if (cornerRadius == null) {
        num = 3;
      }
      return tmp(obj);
    }, items3);
    const tmp9 = FILLED;
    if (react.useContext(FILLED(MEDIUM[13]).RedesignCompatContext)) {
      let tmp16Result;
      if (FILLED !== darkenOnPress.LINK) {
        let obj2 = { style, children: PRIMARY_500(Button, obj3) };
        obj3 = { text, variant: str2, size: str4, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, onPress, onPressIn, onPressOut, onTouchStart, disabled: flag2, icon: renderIconResult, iconPosition: str5, grow: !flag };
        str2 = "active";
        Button = tmp9(tmp10[14]).Button;
        const tmp25 = flag3;
        if (foregroundRipple.GREEN !== BRAND) {
          str2 = "destructive";
          if (foregroundRipple.RED !== BRAND) {
            str2 = "secondary";
            if (foregroundRipple.GREY !== BRAND) {
              str2 = "secondary";
              if (foregroundRipple.LIGHTGREY !== BRAND) {
                str2 = "secondary";
                if (foregroundRipple.TRANSPARENT !== BRAND) {
                  str2 = "primary";
                  if (foregroundRipple.WHITE === BRAND) {
                    str2 = "primary-overlay";
                  }
                }
              }
            }
          }
        }
        str4 = "lg";
        if (constants.LARGE !== MEDIUM) {
          str4 = "md";
          if (constants.MEDIUM !== MEDIUM) {
            if (constants.SMALL === MEDIUM) {
              str4 = "sm";
            }
          }
        }
        if (!flag2) {
          flag2 = flag3;
        }
        renderIconResult = undefined;
        if (renderIcon != null) {
          renderIconResult = renderIcon();
        }
        if (renderIconResult == null) {
          let renderRightIconResult;
          if (renderRightIcon != null) {
            renderRightIconResult = renderRightIcon();
          }
          renderIconResult = renderRightIconResult;
        }
        if (renderIconResult == null) {
          renderIconResult = null;
        }
        str5 = "start";
        if (null == renderIcon) {
          let str6;
          if (null != renderRightIcon) {
            str6 = "end";
          }
          str5 = str6;
        }
        tmp16Result = tmp24(tmp25, obj2);
      }
      return tmp16Result;
    }
    const obj4 = { accessibilityRole: str, accessibilityState: memo1, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, accessibilityValue, onPress, onPressIn, onPressOut, onTouchStart, onTouchEnd, onLongPress, disabled: tmp18, android_ripple: memo2, testID, style: callback, children: items4 };
    tmp18 = flag2;
    const tmp16 = style;
    if (!flag2) {
      tmp18 = flag3;
    }
    let renderLinearGradientResult;
    if (renderLinearGradient != null) {
      renderLinearGradientResult = renderLinearGradient();
    }
    if (renderLinearGradientResult == null) {
      renderLinearGradientResult = null;
    }
    items4 = [renderLinearGradientResult, , , , ];
    let renderIconResult1;
    if (renderIcon != null) {
      renderIconResult1 = renderIcon();
    }
    if (renderIconResult1 == null) {
      renderIconResult1 = null;
    }
    items4[1] = renderIconResult1;
    items4[2] = memo;
    let renderRightIconResult1;
    if (renderRightIcon != null) {
      renderRightIconResult1 = renderRightIcon();
    }
    if (renderRightIconResult1 == null) {
      renderRightIconResult1 = null;
    }
    items4[3] = renderRightIconResult1;
    let renderShineResult;
    if (renderShine != null) {
      renderShineResult = renderShine();
    }
    if (renderShineResult == null) {
      renderShineResult = null;
    }
    items4[4] = renderShineResult;
    tmp16Result = tmp16(tmp17, obj4);
  }
}
let react = react_mod;
({ ActivityIndicator: closure_4, Pressable: hasOwnProperty, View: metroRequire } = react_native);
const Fonts = Constants.Fonts;
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: { flexDirection: "row", flexGrow: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch", borderRadius: 3 }, buttonShrink: { flexGrow: 0, alignSelf: "flex-start", paddingHorizontal: 10 }, buttonBrandDefault: obj2, buttonBrandDarkDefault: obj3, buttonRedDefault: obj4, buttonRedDarkDefault: obj5, buttonGreenDefault: { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }, buttonGreenDarkDefault: { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_500 }, buttonGreyDarkDefault: { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 }, buttonLightgreyDefault: { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 }, buttonLightgreyDarkDefault: { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 }, buttonBrandDisabled: obj11, buttonBrandDarkDisabled: obj12, buttonRedDisabled: obj13, buttonRedDarkDisabled: obj14, buttonGreenDisabled: obj15, buttonGreenDarkDisabled: obj16, buttonGreyDarkDisabled: obj17, buttonLightgreyDisabled: obj18, buttonLightgreyDarkDisabled: obj19, buttonTransparentDefault: { backgroundColor: "transparent" }, buttonTransparentDarkDefault: { backgroundColor: "transparent" }, buttonTransparentDisabled: { backgroundColor: "transparent" }, buttonTransparentDarkDisabled: { backgroundColor: "transparent" }, buttonWhiteDefault: { backgroundColor: nativeDefault.colors.WHITE }, buttonWhiteDisabled: obj21, buttonFilled: {}, buttonLink: {}, buttonLinkDefault: {}, buttonOutlined: { backgroundColor: "transparent", borderWidth: 1, borderStyle: "solid", borderColor: LegacyTokens.BUTTON_OUTLINED_BORDER }, buttonXsmall: { minHeight: 24 }, buttonSmall: { minHeight: 32 }, buttonMedium: { minHeight: 40 }, buttonLarge: { minHeight: 46 }, text: { color: nativeDefault.colors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 }, textXsmall: { fontSize: 12 }, textSmall: { fontSize: 14 }, textMedium: { fontSize: 14 }, textLarge: { fontSize: 20 }, textDisabled: { opacity: 0.6 }, textDefault: { opacity: 1 }, textBrand: { color: nativeDefault.colors.WHITE }, textRed: { color: nativeDefault.colors.WHITE }, textGreen: { color: nativeDefault.colors.WHITE }, textGrey: { color: nativeDefault.colors.WHITE }, textLightgrey: { color: nativeDefault.colors.WHITE }, textWhite: { color: nativeDefault.colors.WHITE }, textFilled: {}, textOutlined: { color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, faded: { opacity: 0.5 }, buttonWhiteDarkDefault: { backgroundColor: nativeDefault.colors.WHITE }, textLink: { color: nativeDefault.colors.TEXT_LINK }, buttonPrimaryDefault: { backgroundColor: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, buttonPrimaryDarkDefault: { backgroundColor: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, buttonGreyDefault: { backgroundColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_430 }, textPrimary: { color: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_100 }, textTransparent: { color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, buttonPrimaryDisabled: { backgroundColor: LegacyTokens.BUTTON_PRIMARY_DISABLED_BACKGROUND }, buttonPrimaryDarkDisabled: { backgroundColor: LegacyTokens.BUTTON_PRIMARY_DISABLED_BACKGROUND }, buttonGreyDisabled: { backgroundColor: LegacyTokens.BUTTON_GREY_DISABLED_BACKGROUND } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_600 };
obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400 };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.RED_500 };
({ backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT });
({ backgroundColor: nativeDefault.unsafe_rawColors.GREEN_500 });
({ backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 });
({ backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 });
obj11 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.5) };
({ backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 });
ColorUtils = ColorUtils_mod;
obj12 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_600, 0.5) };
ColorUtils = ColorUtils_mod;
obj13 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_400, 0.5) };
ColorUtils = ColorUtils_mod;
obj14 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.RED_500, 0.5) };
ColorUtils = ColorUtils_mod;
obj15 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.GREEN_360, 0.5) };
ColorUtils = ColorUtils_mod;
obj16 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.GREEN_500, 0.5) };
ColorUtils = ColorUtils_mod;
obj17 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5) };
ColorUtils = ColorUtils_mod;
obj18 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5) };
ColorUtils = ColorUtils_mod;
obj19 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.5) };
ColorUtils = ColorUtils_mod;
obj21 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.5) };
({ backgroundColor: nativeDefault.colors.WHITE });
ColorUtils = ColorUtils_mod;
({ backgroundColor: "transparent", borderWidth: 1, borderStyle: "solid", borderColor: LegacyTokens.BUTTON_OUTLINED_BORDER });
({ color: nativeDefault.colors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 });
({ backgroundColor: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.TEXT_LINK });
({ backgroundColor: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 });
({ backgroundColor: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 });
({ backgroundColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_430 });
({ color: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_100 });
({ color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 });
({ backgroundColor: LegacyTokens.BUTTON_PRIMARY_DISABLED_BACKGROUND });
({ backgroundColor: LegacyTokens.BUTTON_PRIMARY_DISABLED_BACKGROUND });
({ backgroundColor: LegacyTokens.BUTTON_GREY_DISABLED_BACKGROUND });
const styles = createStyles(obj);
const obj41 = { FILLED: "filled", LINK: "link", OUTLINED: "outlined" };
const obj42 = { BRAND: "brand", RED: "red", GREEN: "green", PRIMARY: "primary", TRANSPARENT: "transparent", GREY: "grey", LIGHTGREY: "lightgrey", WHITE: "white", LINK: "link" };
let constants = { DEFAULT: "Default", DISABLED: "Disabled" };
const obj43 = { XSMALL: "xsmall", SMALL: "small", MEDIUM: "medium", LARGE: "large" };
Button.Looks = obj41;
Button.Colors = obj42;
Button.Sizes = obj43;
const result = size.fileFinishedImporting("design/void/Button/native/Button.tsx");

export default Button;
export const BUTTON_CORNER_RADIUS = 3;
export const useButtonStyles = styles;
export const ButtonLooks = obj41;
export const ButtonColors = obj42;
export const ButtonSizes = obj43;
export { getButtonStyles };
export { ButtonText };
export const getRedesignVariant = function getRedesignVariant(color) {
  if (obj42.GREEN === color) {
    return "active";
  } else if (obj42.RED === color) {
    return "destructive";
  } else {
    if (obj42.GREY !== color) {
      if (obj42.LIGHTGREY !== color) {
        if (obj42.TRANSPARENT !== color) {
          if (obj42.WHITE === color) {
            return "primary-overlay";
          } else {
            return "primary";
          }
        }
      }
    }
    return "secondary";
  }
};
export const getRedesignSize = function getRedesignSize(arg0) {
  if (obj43.LARGE === arg0) {
    return "lg";
  } else if (obj43.MEDIUM === arg0) {
    return "md";
  } else {
    return "sm";
  }
};
