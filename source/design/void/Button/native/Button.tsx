// Module ID: 1276
// Function ID: 14392
// Name: getButtonColorsToTextStyles
// Dependencies: [31, 27, 653, 1277, 33, 4130, 689, 3974, 4973, 477, 11719, 7668, 3976, 5164, 4543, 2]

// Module 1276 (getButtonColorsToTextStyles)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { getThemedRippleConfig } from "semanticColor";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";

let closure_10;
let closure_4;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function getButtonColorsToTextStyles(textBrand) {
  return { [closure_13.BRAND]: textBrand.textBrand, [closure_13.RED]: textBrand.textRed, [closure_13.GREEN]: textBrand.textGreen, [closure_13.PRIMARY]: textBrand.textPrimary, [closure_13.TRANSPARENT]: textBrand.textTransparent, [closure_13.GREY]: textBrand.textGrey, [closure_13.LIGHTGREY]: textBrand.textLightgrey, [closure_13.WHITE]: textBrand.textWhite, [closure_13.LINK]: textBrand.textLink };
}
function getButtonSizesToTextStyles(textXsmall) {
  return { [closure_15.XSMALL]: textXsmall.textXsmall, [closure_15.SMALL]: textXsmall.textSmall, [closure_15.MEDIUM]: textXsmall.textMedium, [closure_15.LARGE]: textXsmall.textLarge };
}
function getButtonLooksToTextStyles(textFilled) {
  return { [closure_12.FILLED]: textFilled.textFilled, [closure_12.LINK]: textFilled.textLink, [closure_12.OUTLINED]: textFilled.textOutlined };
}
function getTextStyles(disabled, text) {
  let color;
  let look;
  let size;
  let flag = disabled.disabled;
  ({ color, look, size } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const items = [text.text, getButtonColorsToTextStyles(text)[color], getButtonLooksToTextStyles(text)[look], flag ? text.textDisabled : text.textDefault, getButtonSizesToTextStyles(text)[size]];
  return items;
}
function getButtonStyles(shrink, button) {
  let color;
  let disabled;
  let look;
  let size;
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
  if (flag2) {
    combined = color;
    if (!obj.isAndroid()) {
      const _HermesInternal = HermesInternal;
      combined = "" + color + "Dark";
    }
    obj = require(477) /* set */;
  }
  const items = [button.button, , , , , , ];
  let buttonShrink = null;
  if (flag) {
    buttonShrink = button.buttonShrink;
  }
  items[1] = buttonShrink;
  items[2] = require(11719) /* getClass */.getClass(button, "button", combined, disabled ? closure_14.DISABLED : closure_14.DEFAULT);
  const obj2 = require(11719) /* getClass */;
  const tmp2 = disabled ? closure_14.DISABLED : closure_14.DEFAULT;
  items[3] = require(11719) /* getClass */.getClass(button, "button", size);
  const obj3 = require(11719) /* getClass */;
  items[4] = require(11719) /* getClass */.getClass(button, "button", look);
  let faded;
  if (!flag3) {
    if (!obj5.isAndroid()) {
      if (flag2) {
        faded = button.faded;
      }
    }
    obj5 = require(477) /* set */;
  }
  items[5] = faded;
  items[6] = shrink.style;
  return items;
}
class ButtonText {
  constructor(arg0) {
    ({ children, color, look, size, disabled, style } = global);
    tmp = closure_11();
    if ("function" !== typeof children) {
      tmp6 = jsx;
      tmp7 = closure_1;
      tmp8 = closure_2;
      num = 11;
      obj = { maxFontSizeMultiplier: 2, numberOfLines: 1 };
      tmp10 = getTextStyles;
      obj1 = {};
      obj1.color = color;
      obj1.look = look;
      obj1.size = size;
      obj1.disabled = disabled;
      tmp9 = require("module_7668");
      items = [, ];
      items[0] = getTextStyles(obj1, tmp);
      items[1] = style;
      obj.style = items;
      obj.children = children;
      tmp5 = jsx(tmp9, obj);
    } else {
      tmp2 = jsx;
      tmp3 = Fragment;
      obj = {};
      obj2 = {};
      tmp4 = getTextStyles;
      obj3 = {};
      obj3.color = color;
      obj3.look = look;
      obj3.size = size;
      obj3.disabled = disabled;
      items1 = [, ];
      items1[0] = getTextStyles(obj3, tmp);
      items1[1] = style;
      obj2.style = items1;
      obj.children = children(obj2);
      tmp5 = jsx(Fragment, obj);
    }
    return tmp5;
  }
}
function getRedesignVariant(BRAND) {
  if (obj40.GREEN === BRAND) {
    return "active";
  } else if (obj40.RED === BRAND) {
    return "destructive";
  } else {
    if (obj40.GREY !== BRAND) {
      if (obj40.LIGHTGREY !== BRAND) {
        if (obj40.TRANSPARENT !== BRAND) {
          if (obj40.WHITE === BRAND) {
            return "primary-overlay";
          } else {
            return "primary";
          }
        }
      }
    }
    return "secondary";
  }
}
function getRedesignSize(MEDIUM) {
  if (obj41.LARGE === MEDIUM) {
    return "lg";
  } else if (obj41.MEDIUM === MEDIUM) {
    return "md";
  } else {
    return "sm";
  }
}
class Button {
  constructor(arg0) {
    FILLED = global.look;
    if (FILLED === undefined) {
      tmp = darkenOnPress;
      FILLED = darkenOnPress.FILLED;
    }
    BRAND = global.color;
    if (BRAND === undefined) {
      tmp2 = foregroundRipple;
      BRAND = foregroundRipple.BRAND;
    }
    MEDIUM = global.size;
    if (MEDIUM === undefined) {
      tmp3 = closure_15;
      MEDIUM = closure_15.MEDIUM;
    }
    text = global.text;
    result = text;
    flag = global.shrink;
    if (flag === undefined) {
      flag = false;
    }
    c4 = flag;
    flag2 = global.disabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    c5 = flag2;
    flag3 = global.loading;
    if (flag3 === undefined) {
      flag3 = false;
    }
    c6 = flag3;
    WHITE = global.loadingColorDark;
    if (WHITE === undefined) {
      tmp4 = BRAND;
      tmp5 = MEDIUM;
      num = 6;
      WHITE = require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE;
    }
    PRIMARY_500 = global.loadingColorLight;
    if (PRIMARY_500 === undefined) {
      tmp6 = BRAND;
      tmp7 = MEDIUM;
      num2 = 6;
      PRIMARY_500 = require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500;
    }
    textStyle = global.textStyle;
    style = global.style;
    str = global.accessibilityRole;
    if (str === undefined) {
      str = "button";
    }
    ({ accessibilityLabel, accessibilityHint, accessibilityState } = global);
    ({ accessibilityActions, onAccessibilityAction, darkenOnPress } = global);
    ({ renderIcon, renderRightIcon, renderShine, renderLinearGradient, onPress, onPressIn, onPressOut, onTouchStart, foregroundRipple } = global);
    cornerRadius = global.cornerRadius;
    closure_15 = undefined;
    theme = undefined;
    ({ accessibilityValue, testID, onTouchEnd, onLongPress } = global);
    tmp8 = accessibilityState();
    closure_15 = tmp8;
    obj = require("AccessibilityAnnouncer");
    theme = obj.useThemeContext().theme;
    items = [, , , , , , , , , ];
    items[0] = BRAND;
    items[1] = flag2;
    items[2] = flag3;
    items[3] = FILLED;
    items[4] = MEDIUM;
    items[5] = text;
    items[6] = textStyle;
    items[7] = WHITE;
    items[8] = PRIMARY_500;
    items[9] = theme;
    items1 = [, ];
    items1[0] = flag2;
    items1[1] = accessibilityState;
    memo = result.useMemo(() => {
      if (flag3) {
        let obj = { color: FILLED(MEDIUM[12]).isThemeDark(theme) ? WHITE : PRIMARY_500 };
        tmp(flag, obj);
        const obj3 = FILLED(MEDIUM[12]);
        const tmp9 = flag;
      } else {
        obj = { color: BRAND, look: FILLED, size: MEDIUM, disabled: flag2, style: textStyle, children: result };
        return tmp(outer1_21, obj);
      }
    }, items);
    items2 = [, , , , , , , ];
    items2[0] = BRAND;
    items2[1] = darkenOnPress;
    items2[2] = MEDIUM;
    items2[3] = FILLED;
    items2[4] = flag2;
    items2[5] = flag;
    items2[6] = style;
    items2[7] = tmp8;
    memo1 = result.useMemo(() => {
      const obj = {};
      const merged = Object.assign(accessibilityState);
      obj["disabled"] = flag2;
      return obj;
    }, items1);
    items3 = [, ];
    items3[0] = foregroundRipple;
    items3[1] = cornerRadius;
    callback = result.useCallback((pressed) => outer1_20({ color: BRAND, size: MEDIUM, disabled: flag2, look: FILLED, shrink: flag, pressed: pressed.pressed, darkenOnPress, style }, c15), items2);
    memo2 = result.useMemo(() => {
      const obj = { foreground: foregroundRipple };
      let num = 3;
      if (null != cornerRadius) {
        num = cornerRadius;
      }
      obj.cornerRadius = num;
      return WHITE(obj);
    }, items3);
    if (result.useContext(require("context").RedesignCompatContext)) {
      tmp13 = darkenOnPress;
      if (FILLED !== darkenOnPress.LINK) {
        obj = {};
        obj.style = style;
        tmp29 = FILLED;
        tmp30 = MEDIUM;
        num3 = 14;
        tmp26 = PRIMARY_500;
        tmp27 = c6;
        tmp28 = PRIMARY_500;
        obj1 = {};
        obj1.text = text;
        tmp31 = getRedesignVariant;
        obj1.variant = getRedesignVariant(BRAND);
        tmp32 = getRedesignSize;
        obj1.size = getRedesignSize(MEDIUM);
        obj1.accessibilityLabel = accessibilityLabel;
        obj1.accessibilityHint = accessibilityHint;
        obj1.accessibilityActions = accessibilityActions;
        obj1.onAccessibilityAction = onAccessibilityAction;
        obj1.onPress = onPress;
        obj1.onPressIn = onPressIn;
        obj1.onPressOut = onPressOut;
        obj1.onTouchStart = onTouchStart;
        if (!flag2) {
          flag2 = flag3;
        }
        obj1.disabled = flag2;
        tmp33 = null;
        renderIconResult = undefined;
        if (null != renderIcon) {
          renderIconResult = renderIcon();
        }
        if (null == renderIconResult) {
          renderRightIconResult = undefined;
          if (null != renderRightIcon) {
            renderRightIconResult = renderRightIcon();
          }
          renderIconResult = renderRightIconResult;
        }
        tmp36 = null;
        if (null != renderIconResult) {
          tmp36 = renderIconResult;
        }
        obj1.icon = tmp36;
        str2 = "start";
        if (null == renderIcon) {
          str3 = undefined;
          if (null != renderRightIcon) {
            str3 = "end";
          }
          str2 = str3;
        }
        obj1.iconPosition = str2;
        obj1.grow = !flag;
        obj.children = tmp28(require("Button").Button, obj1);
        tmp26Result = tmp26(tmp27, obj);
      }
      return tmp26Result;
    }
    obj2 = {};
    obj2.accessibilityRole = str;
    obj2.accessibilityState = memo1;
    obj2.accessibilityLabel = accessibilityLabel;
    obj2.accessibilityHint = accessibilityHint;
    obj2.accessibilityActions = accessibilityActions;
    obj2.onAccessibilityAction = onAccessibilityAction;
    obj2.accessibilityValue = accessibilityValue;
    obj2.onPress = onPress;
    obj2.onPressIn = onPressIn;
    obj2.onPressOut = onPressOut;
    obj2.onTouchStart = onTouchStart;
    obj2.onTouchEnd = onTouchEnd;
    obj2.onLongPress = onLongPress;
    tmp16 = flag2;
    tmp14 = style;
    tmp15 = c5;
    if (!flag2) {
      tmp16 = flag3;
    }
    obj2.disabled = tmp16;
    obj2.android_ripple = memo2;
    obj2.testID = testID;
    obj2.style = callback;
    renderLinearGradientResult = undefined;
    if (null != renderLinearGradient) {
      renderLinearGradientResult = renderLinearGradient();
    }
    tmp18 = null;
    if (null != renderLinearGradientResult) {
      tmp18 = renderLinearGradientResult;
    }
    items4 = [, , , , ];
    items4[0] = tmp18;
    renderIconResult1 = undefined;
    if (null != renderIcon) {
      renderIconResult1 = renderIcon();
    }
    tmp20 = null;
    if (null != renderIconResult1) {
      tmp20 = renderIconResult1;
    }
    items4[1] = tmp20;
    items4[2] = memo;
    renderRightIconResult1 = undefined;
    if (null != renderRightIcon) {
      renderRightIconResult1 = renderRightIcon();
    }
    tmp22 = null;
    if (null != renderRightIconResult1) {
      tmp22 = renderRightIconResult1;
    }
    items4[3] = tmp22;
    renderShineResult = undefined;
    if (null != renderShine) {
      renderShineResult = renderShine();
    }
    tmp24 = null;
    if (null != renderShineResult) {
      tmp24 = renderShineResult;
    }
    items4[4] = tmp24;
    obj2.children = items4;
    tmp26Result = tmp14(tmp15, obj2);
    return;
  }
}
({ ActivityIndicator: closure_4, Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { button: { flexDirection: "row", flexGrow: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch", borderRadius: 3 }, buttonShrink: { flexGrow: 0, alignSelf: "flex-start", paddingHorizontal: 10 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.buttonBrandDefault = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.buttonBrandDarkDefault = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_600 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_600 };
_createForOfIteratorHelperLoose.buttonRedDefault = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose.buttonRedDarkDefault = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_500 };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_500 };
_createForOfIteratorHelperLoose.buttonGreenDefault = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.buttonGreenDarkDefault = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_500 };
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_500 };
_createForOfIteratorHelperLoose.buttonGreyDarkDefault = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500 };
const obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500 };
_createForOfIteratorHelperLoose.buttonLightgreyDefault = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500 };
const obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500 };
_createForOfIteratorHelperLoose.buttonLightgreyDarkDefault = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500 };
const obj9 = {};
obj9.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500, 0.5);
_createForOfIteratorHelperLoose.buttonBrandDisabled = obj9;
const obj10 = {};
obj10.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_600, 0.5);
_createForOfIteratorHelperLoose.buttonBrandDarkDisabled = obj10;
const obj11 = {};
obj11.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, 0.5);
_createForOfIteratorHelperLoose.buttonRedDisabled = obj11;
hexToRgb = {};
hexToRgb.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_500, 0.5);
_createForOfIteratorHelperLoose.buttonRedDarkDisabled = hexToRgb;
const obj13 = {};
obj13.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, 0.5);
_createForOfIteratorHelperLoose.buttonGreenDisabled = obj13;
hexToRgb = {};
hexToRgb.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_500, 0.5);
_createForOfIteratorHelperLoose.buttonGreenDarkDisabled = hexToRgb;
const obj15 = {};
obj15.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500, 0.5);
_createForOfIteratorHelperLoose.buttonGreyDarkDisabled = obj15;
hexToRgb = {};
hexToRgb.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500, 0.5);
_createForOfIteratorHelperLoose.buttonLightgreyDisabled = hexToRgb;
const obj17 = {};
obj17.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500, 0.5);
_createForOfIteratorHelperLoose.buttonLightgreyDarkDisabled = obj17;
_createForOfIteratorHelperLoose.buttonTransparentDefault = { backgroundColor: "transparent" };
_createForOfIteratorHelperLoose.buttonTransparentDarkDefault = { backgroundColor: "transparent" };
_createForOfIteratorHelperLoose.buttonTransparentDisabled = { backgroundColor: "transparent" };
_createForOfIteratorHelperLoose.buttonTransparentDarkDisabled = { backgroundColor: "transparent" };
hexToRgb = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.buttonWhiteDefault = hexToRgb;
const obj19 = {};
obj19.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 0.5);
_createForOfIteratorHelperLoose.buttonWhiteDisabled = obj19;
_createForOfIteratorHelperLoose.buttonFilled = {};
_createForOfIteratorHelperLoose.buttonLink = {};
_createForOfIteratorHelperLoose.buttonLinkDefault = {};
hexToRgb = { backgroundColor: "transparent", borderWidth: 1, borderStyle: "solid", borderColor: require("result").BUTTON_OUTLINED_BORDER };
_createForOfIteratorHelperLoose.buttonOutlined = hexToRgb;
_createForOfIteratorHelperLoose.buttonXsmall = { minHeight: 24 };
_createForOfIteratorHelperLoose.buttonSmall = { minHeight: 32 };
_createForOfIteratorHelperLoose.buttonMedium = { minHeight: 40 };
_createForOfIteratorHelperLoose.buttonLarge = { minHeight: 46 };
const obj8 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500 };
_createForOfIteratorHelperLoose.text = { color: require("_createForOfIteratorHelperLoose").colors.WHITE, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
_createForOfIteratorHelperLoose.textXsmall = { fontSize: 12 };
_createForOfIteratorHelperLoose.textSmall = { fontSize: 14 };
_createForOfIteratorHelperLoose.textMedium = { fontSize: 14 };
_createForOfIteratorHelperLoose.textLarge = { fontSize: 20 };
_createForOfIteratorHelperLoose.textDisabled = { opacity: 0.6 };
_createForOfIteratorHelperLoose.textDefault = { opacity: 1 };
hexToRgb = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.textBrand = hexToRgb;
const obj21 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
_createForOfIteratorHelperLoose.textRed = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
hexToRgb = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.textGreen = hexToRgb;
const obj23 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.textGrey = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
hexToRgb = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.textLightgrey = hexToRgb;
const obj25 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.textWhite = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.textFilled = {};
hexToRgb = { color: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
_createForOfIteratorHelperLoose.textOutlined = hexToRgb;
_createForOfIteratorHelperLoose.faded = { opacity: 0.5 };
const obj27 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.buttonWhiteDarkDefault = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
const obj29 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.textLink = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_LINK };
hexToRgb = { backgroundColor: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
_createForOfIteratorHelperLoose.buttonPrimaryDefault = hexToRgb;
const obj30 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_LINK };
_createForOfIteratorHelperLoose.buttonPrimaryDarkDefault = { backgroundColor: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj32 = { backgroundColor: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
_createForOfIteratorHelperLoose.buttonGreyDefault = { backgroundColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
const obj33 = { backgroundColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
_createForOfIteratorHelperLoose.textPrimary = { color: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
const obj34 = { color: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
_createForOfIteratorHelperLoose.textTransparent = { color: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj35 = { color: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
_createForOfIteratorHelperLoose.buttonPrimaryDisabled = { backgroundColor: require("result").BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj36 = { backgroundColor: require("result").BUTTON_PRIMARY_DISABLED_BACKGROUND };
_createForOfIteratorHelperLoose.buttonPrimaryDarkDisabled = { backgroundColor: require("result").BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj37 = { backgroundColor: require("result").BUTTON_PRIMARY_DISABLED_BACKGROUND };
_createForOfIteratorHelperLoose.buttonGreyDisabled = { backgroundColor: require("result").BUTTON_GREY_DISABLED_BACKGROUND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj39 = { FILLED: "filled", LINK: "link", OUTLINED: "outlined" };
const obj40 = { BRAND: "brand", RED: "red", GREEN: "green", PRIMARY: "primary", TRANSPARENT: "transparent", GREY: "grey", LIGHTGREY: "lightgrey", WHITE: "white", LINK: "link" };
let closure_14 = { DEFAULT: "Default", DISABLED: "Disabled" };
let obj41 = { XSMALL: "xsmall", SMALL: "small", MEDIUM: "medium", LARGE: "large" };
Button.Looks = obj39;
Button.Colors = obj40;
Button.Sizes = obj41;
const obj38 = { backgroundColor: require("result").BUTTON_GREY_DISABLED_BACKGROUND };
const result = require("ME").fileFinishedImporting("design/void/Button/native/Button.tsx");

export default Button;
export const BUTTON_CORNER_RADIUS = 3;
export const useButtonStyles = _createForOfIteratorHelperLoose;
export const ButtonLooks = obj39;
export const ButtonColors = obj40;
export const ButtonSizes = obj41;
export { getButtonStyles };
export { ButtonText };
export { getRedesignVariant };
export { getRedesignSize };
