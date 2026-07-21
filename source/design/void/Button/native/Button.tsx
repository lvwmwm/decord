// Module ID: 1276
// Function ID: 14390
// Name: getButtonColorsToTextStyles
// Dependencies: []

// Module 1276 (getButtonColorsToTextStyles)
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
    const obj = button(dependencyMap[9]);
  }
  const items = [button.button, , , , , , ];
  let buttonShrink = null;
  if (flag) {
    buttonShrink = button.buttonShrink;
  }
  items[1] = buttonShrink;
  items[2] = button(dependencyMap[10]).getClass(button, "button", combined, disabled ? closure_14.DISABLED : closure_14.DEFAULT);
  const obj2 = button(dependencyMap[10]);
  const tmp2 = disabled ? closure_14.DISABLED : closure_14.DEFAULT;
  items[3] = button(dependencyMap[10]).getClass(button, "button", size);
  const obj3 = button(dependencyMap[10]);
  items[4] = button(dependencyMap[10]).getClass(button, "button", look);
  let faded;
  if (!flag3) {
    if (!obj5.isAndroid()) {
      if (flag2) {
        faded = button.faded;
      }
    }
    const obj5 = button(dependencyMap[9]);
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
      tmp7 = importDefault;
      tmp8 = dependencyMap;
      num = 11;
      obj = { 1665765569: "\u{1F4A0}", 1419417945: 6 };
      tmp10 = getTextStyles;
      obj1 = {};
      obj1.color = color;
      obj1.look = look;
      obj1.size = size;
      obj1.disabled = disabled;
      tmp9 = importDefault(dependencyMap[11]);
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
      tmp = Object;
      FILLED = Object.FILLED;
    }
    arg1 = FILLED;
    BRAND = global.color;
    if (BRAND === undefined) {
      tmp2 = closure_13;
      BRAND = closure_13.BRAND;
    }
    importDefault = BRAND;
    MEDIUM = global.size;
    if (MEDIUM === undefined) {
      tmp3 = closure_15;
      MEDIUM = closure_15.MEDIUM;
    }
    dependencyMap = MEDIUM;
    text = global.text;
    importAll = text;
    flag = global.shrink;
    if (flag === undefined) {
      flag = false;
    }
    closure_4 = flag;
    flag2 = global.disabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    closure_5 = flag2;
    flag3 = global.loading;
    if (flag3 === undefined) {
      flag3 = false;
    }
    closure_6 = flag3;
    WHITE = global.loadingColorDark;
    if (WHITE === undefined) {
      tmp4 = importDefault;
      tmp5 = dependencyMap;
      num = 6;
      WHITE = importDefault(dependencyMap[6]).unsafe_rawColors.WHITE;
    }
    getThemedRippleConfig = WHITE;
    PRIMARY_500 = global.loadingColorLight;
    if (PRIMARY_500 === undefined) {
      tmp6 = importDefault;
      tmp7 = dependencyMap;
      num2 = 6;
      PRIMARY_500 = importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500;
    }
    jsx = PRIMARY_500;
    textStyle = global.textStyle;
    Fragment = textStyle;
    style = global.style;
    jsxs = style;
    str = global.accessibilityRole;
    if (str === undefined) {
      str = "button";
    }
    ({ accessibilityLabel, accessibilityHint, accessibilityState } = global);
    ({ accessibilityActions, onAccessibilityAction, darkenOnPress } = global);
    Object = darkenOnPress;
    ({ renderIcon, renderRightIcon, renderShine, renderLinearGradient, onPress, onPressIn, onPressOut, onTouchStart, foregroundRipple } = global);
    closure_13 = foregroundRipple;
    cornerRadius = global.cornerRadius;
    closure_14 = cornerRadius;
    closure_15 = undefined;
    getButtonColorsToTextStyles = undefined;
    ({ accessibilityValue, testID, onTouchEnd, onLongPress } = global);
    tmp8 = accessibilityState();
    closure_15 = tmp8;
    obj = arg1(dependencyMap[12]);
    theme = obj.useThemeContext().theme;
    getButtonColorsToTextStyles = theme;
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
    memo = importAll.useMemo(() => {
      if (flag3) {
        let obj = { color: FILLED(MEDIUM[12]).isThemeDark(theme) ? WHITE : PRIMARY_500 };
        tmp(flag, obj);
        const obj3 = FILLED(MEDIUM[12]);
        const tmp9 = flag;
      } else {
        obj = { color: BRAND, look: FILLED, size: MEDIUM, disabled: flag2, style: textStyle, children: text };
        return tmp(closure_21, obj);
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
    memo1 = importAll.useMemo(() => {
      const obj = {};
      const merged = Object.assign(accessibilityState);
      obj["disabled"] = flag2;
      return obj;
    }, items1);
    items3 = [, ];
    items3[0] = foregroundRipple;
    items3[1] = cornerRadius;
    callback = importAll.useCallback((pressed) => callback({ color: BRAND, size: MEDIUM, disabled: flag2, look: FILLED, shrink: flag, pressed: pressed.pressed, darkenOnPress, style }, tmp8), items2);
    memo2 = importAll.useMemo(() => {
      const obj = { foreground: foregroundRipple };
      let num = 3;
      if (null != cornerRadius) {
        num = cornerRadius;
      }
      obj.cornerRadius = num;
      return WHITE(obj);
    }, items3);
    if (importAll.useContext(arg1(dependencyMap[13]).RedesignCompatContext)) {
      tmp13 = Object;
      if (FILLED !== Object.LINK) {
        obj = {};
        obj.style = style;
        tmp29 = arg1;
        tmp30 = dependencyMap;
        num3 = 14;
        tmp26 = jsx;
        tmp27 = closure_6;
        tmp28 = jsx;
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
        obj.children = tmp28(arg1(dependencyMap[14]).Button, obj1);
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
    tmp14 = jsxs;
    tmp15 = closure_5;
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
let closure_3 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[1]));
const getThemedRippleConfig = arg1(dependencyMap[3]).getThemedRippleConfig;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { button: {}, buttonShrink: {} };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND };
obj.buttonBrandDefault = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.buttonBrandDarkDefault = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.BRAND_600 };
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.BRAND_600 };
obj.buttonRedDefault = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.RED_400 };
const obj2 = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.RED_400 };
obj.buttonRedDarkDefault = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.RED_500 };
const obj3 = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.RED_500 };
obj.buttonGreenDefault = { backgroundColor: importDefault(dependencyMap[6]).colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const obj4 = { backgroundColor: importDefault(dependencyMap[6]).colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
obj.buttonGreenDarkDefault = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.GREEN_500 };
const obj5 = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.GREEN_500 };
obj.buttonGreyDarkDefault = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500 };
const obj6 = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500 };
obj.buttonLightgreyDefault = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500 };
const obj7 = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500 };
obj.buttonLightgreyDarkDefault = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500 };
const obj9 = {};
let obj12 = arg1(dependencyMap[7]);
obj9.backgroundColor = obj12.hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.BRAND_500, 0.5);
obj.buttonBrandDisabled = obj9;
const obj10 = {};
let obj14 = arg1(dependencyMap[7]);
obj10.backgroundColor = obj14.hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.BRAND_600, 0.5);
obj.buttonBrandDarkDisabled = obj10;
const obj11 = {};
let obj16 = arg1(dependencyMap[7]);
obj11.backgroundColor = obj16.hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.RED_400, 0.5);
obj.buttonRedDisabled = obj11;
obj12 = {};
let obj18 = arg1(dependencyMap[7]);
obj12.backgroundColor = obj18.hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.RED_500, 0.5);
obj.buttonRedDarkDisabled = obj12;
const obj13 = {};
let obj20 = arg1(dependencyMap[7]);
obj13.backgroundColor = obj20.hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.GREEN_360, 0.5);
obj.buttonGreenDisabled = obj13;
obj14 = {};
let obj22 = arg1(dependencyMap[7]);
obj14.backgroundColor = obj22.hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.GREEN_500, 0.5);
obj.buttonGreenDarkDisabled = obj14;
const obj15 = {};
let obj24 = arg1(dependencyMap[7]);
obj15.backgroundColor = obj24.hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500, 0.5);
obj.buttonGreyDarkDisabled = obj15;
obj16 = {};
let obj26 = arg1(dependencyMap[7]);
obj16.backgroundColor = obj26.hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500, 0.5);
obj.buttonLightgreyDisabled = obj16;
const obj17 = {};
let obj28 = arg1(dependencyMap[7]);
obj17.backgroundColor = obj28.hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500, 0.5);
obj.buttonLightgreyDarkDisabled = obj17;
obj.buttonTransparentDefault = { backgroundColor: "transparent" };
obj.buttonTransparentDarkDefault = { backgroundColor: "transparent" };
obj.buttonTransparentDisabled = { backgroundColor: "transparent" };
obj.buttonTransparentDarkDisabled = { backgroundColor: "transparent" };
obj18 = { backgroundColor: importDefault(dependencyMap[6]).colors.WHITE };
obj.buttonWhiteDefault = obj18;
const obj19 = {};
let obj31 = arg1(dependencyMap[7]);
obj19.backgroundColor = obj31.hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.WHITE, 0.5);
obj.buttonWhiteDisabled = obj19;
obj.buttonFilled = {};
obj.buttonLink = {};
obj.buttonLinkDefault = {};
obj20 = { 9223372036854775807: "<string:1153585667>", 9223372036854775807: "<string:41007478>", 0: "<string:1090519040>", borderColor: arg1(dependencyMap[8]).BUTTON_OUTLINED_BORDER };
obj.buttonOutlined = obj20;
obj.buttonXsmall = { minHeight: 24 };
obj.buttonSmall = { minHeight: 32 };
obj.buttonMedium = { minHeight: 40 };
obj.buttonLarge = { minHeight: 46 };
const obj8 = { backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_500 };
obj.text = { color: importDefault(dependencyMap[6]).colors.WHITE, fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
obj.textXsmall = { fontSize: 12 };
obj.textSmall = { fontSize: 14 };
obj.textMedium = { fontSize: 14 };
obj.textLarge = { fontSize: 20 };
obj.textDisabled = { opacity: 0.6 };
obj.textDefault = { opacity: 1 };
obj22 = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj.textBrand = obj22;
const obj21 = { color: importDefault(dependencyMap[6]).colors.WHITE, fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_SEMIBOLD, flexShrink: 1 };
obj.textRed = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj24 = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj.textGreen = obj24;
const obj23 = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj.textGrey = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj26 = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj.textLightgrey = obj26;
const obj25 = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj.textWhite = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj.textFilled = {};
obj28 = { color: arg1(dependencyMap[8]).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj.textOutlined = obj28;
obj.faded = { opacity: 0.5 };
const obj27 = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj.buttonWhiteDarkDefault = { backgroundColor: importDefault(dependencyMap[6]).colors.WHITE };
const obj29 = { backgroundColor: importDefault(dependencyMap[6]).colors.WHITE };
obj.textLink = { color: importDefault(dependencyMap[6]).colors.TEXT_LINK };
obj31 = { backgroundColor: arg1(dependencyMap[8]).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj.buttonPrimaryDefault = obj31;
const obj30 = { color: importDefault(dependencyMap[6]).colors.TEXT_LINK };
obj.buttonPrimaryDarkDefault = { backgroundColor: arg1(dependencyMap[8]).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj32 = { backgroundColor: arg1(dependencyMap[8]).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj.buttonGreyDefault = { backgroundColor: arg1(dependencyMap[8]).DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
const obj33 = { backgroundColor: arg1(dependencyMap[8]).DARK_PRIMARY_500_LIGHT_PRIMARY_430 };
obj.textPrimary = { color: arg1(dependencyMap[8]).DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
const obj34 = { color: arg1(dependencyMap[8]).DARK_PRIMARY_500_LIGHT_PRIMARY_100 };
obj.textTransparent = { color: arg1(dependencyMap[8]).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
const obj35 = { color: arg1(dependencyMap[8]).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj.buttonPrimaryDisabled = { backgroundColor: arg1(dependencyMap[8]).BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj36 = { backgroundColor: arg1(dependencyMap[8]).BUTTON_PRIMARY_DISABLED_BACKGROUND };
obj.buttonPrimaryDarkDisabled = { backgroundColor: arg1(dependencyMap[8]).BUTTON_PRIMARY_DISABLED_BACKGROUND };
const obj37 = { backgroundColor: arg1(dependencyMap[8]).BUTTON_PRIMARY_DISABLED_BACKGROUND };
obj.buttonGreyDisabled = { backgroundColor: arg1(dependencyMap[8]).BUTTON_GREY_DISABLED_BACKGROUND };
const styles = obj.createStyles(obj);
const obj39 = { FILLED: "filled", LINK: "link", OUTLINED: "outlined" };
const obj40 = { BRAND: "brand", RED: "red", GREEN: "green", PRIMARY: "primary", TRANSPARENT: "transparent", GREY: "grey", LIGHTGREY: "lightgrey", WHITE: "white", LINK: "link" };
let closure_14 = { DEFAULT: "Default", DISABLED: "Disabled" };
const obj41 = { XSMALL: "xsmall", SMALL: "small", MEDIUM: "medium", LARGE: "large" };
Button.Looks = obj39;
Button.Colors = obj40;
Button.Sizes = obj41;
const obj38 = { backgroundColor: arg1(dependencyMap[8]).BUTTON_GREY_DISABLED_BACKGROUND };
const result = arg1(dependencyMap[15]).fileFinishedImporting("design/void/Button/native/Button.tsx");

export default Button;
export const BUTTON_CORNER_RADIUS = 3;
export const useButtonStyles = styles;
export const ButtonLooks = obj39;
export const ButtonColors = obj40;
export const ButtonSizes = obj41;
export { getButtonStyles };
export { ButtonText };
export { getRedesignVariant };
export { getRedesignSize };
