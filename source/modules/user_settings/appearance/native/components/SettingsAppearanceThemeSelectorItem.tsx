// Module ID: 14162
// Function ID: 108964
// Name: GradientThemeBackground
// Dependencies: [31, 27, 1278, 14161, 482, 33, 4130, 689, 3975, 3840, 4662, 1273, 14163, 624, 3834, 14164, 3944, 3848, 4660, 1212, 2]
// Exports: default

// Module 14162 (GradientThemeBackground)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "THEME_ITEM_WIDTH";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult1 from "hslToRgb";
import importDefaultResult2 from "hslToRgb";

let closure_6;
let closure_7;
const require = arg1;
function GradientThemeBackground(arg0) {
  let isThemeLocked;
  let item;
  ({ item, isThemeLocked } = arg0);
  let obj = require(3840) /* isThemeLight */;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp2 = callback2(isThemeDarkResult);
  obj = {};
  const items = [tmp2.themeSelectorGradientBackground, ];
  let tmp5 = isThemeLocked;
  if (isThemeLocked) {
    obj = { opacity: 0.5 };
    tmp5 = obj;
  }
  items[1] = tmp5;
  obj.style = items;
  const obj1 = {};
  const obj2 = { borderRadius: importDefault(689).radii.sm };
  obj1.componentStyles = obj2;
  obj1.gradientOverride = item;
  obj1.mix = true;
  obj1.mixColorOverride = isThemeDarkResult ? importDefaultResult1 : importDefaultResult2;
  const items1 = [callback(importDefault(4662), obj1), ];
  if (isThemeLocked) {
    const obj3 = { source: importDefault(14163), style: tmp2.lock };
    isThemeLocked = callback(require(1273) /* Button */.Icon, obj3);
  }
  items1[1] = isThemeLocked;
  obj.children = items1;
  return closure_7(View, obj);
}
function DefaultThemeBackground(item) {
  item = item.item;
  require(624) /* defaultAreStatesEqual */;
  [][0] = _isNativeReflectConstruct;
  if ("system" === item.theme) {
    let theme = _isNativeReflectConstruct.themePreferenceForSystemTheme(tmp2);
  } else {
    theme = item.theme;
  }
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.BACKGROUND_BASE_LOWER, theme);
  let obj1 = require(3834) /* map */;
  const token1 = obj1.useToken(importDefault(689).colors.BORDER_STRONG, theme);
  let obj2 = require(3834) /* map */;
  obj = {};
  obj = { width: "100%", height: "100%", backgroundColor: token, borderColor: token1, borderWidth: 1 };
  const token2 = obj2.useToken(importDefault(689).colors.ICON_STRONG, theme);
  obj.borderRadius = importDefault(689).radii.sm;
  obj.style = obj;
  let tmp9 = null;
  if ("system" === item.theme) {
    obj1 = { style: { alignSelf: "center", justifyContent: "center", flex: 1 } };
    obj2 = { fill: token2 };
    obj1.children = callback(importDefault(14164), obj2);
    tmp9 = callback(View, obj1);
  }
  obj.children = tmp9;
  return callback(View, obj);
}
function CustomThemeBackground(arg0) {
  let isThemeLocked;
  let item;
  ({ item, isThemeLocked } = arg0);
  let obj = require(3840) /* isThemeLight */;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp2 = callback2(isThemeDarkResult);
  obj = {};
  const items = [tmp2.themeSelectorGradientBackground, ];
  let tmp5 = isThemeLocked;
  if (isThemeLocked) {
    obj = { opacity: 0.5 };
    tmp5 = obj;
  }
  items[1] = tmp5;
  obj.style = items;
  const obj1 = {};
  const obj2 = { borderRadius: importDefault(689).radii.sm };
  obj1.componentStyles = obj2;
  obj1.mix = true;
  obj1.mixColorOverride = isThemeDarkResult ? importDefaultResult1 : importDefaultResult2;
  obj1.customTheme = item;
  const items1 = [callback(require(4662) /* getThemeMixColor */.CustomThemedGradient, obj1), ];
  if (isThemeLocked) {
    const obj3 = { source: importDefault(14163), style: tmp2.lock };
    isThemeLocked = callback(require(1273) /* Button */.Icon, obj3);
  }
  items1[1] = isThemeLocked;
  obj.children = items1;
  return closure_7(View, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.TRANSPARENT };
_createForOfIteratorHelperLoose.rippleColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.themeSelectorItemContainer = { width: importDefaultResult.THEME_ITEM_WIDTH, height: importDefaultResult.THEME_ITEM_HEIGHT };
_createForOfIteratorHelperLoose.themeSelectorItem = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: importDefaultResult.THEME_ITEM_PADDING };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_430, width: 12, height: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, position: "absolute", top: 0, right: 0 };
_createForOfIteratorHelperLoose.newRedCircle = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { themeSelectorGradientBackground: { justifyContent: "center", width: "100%", height: "100%" } };
  obj = { position: "absolute", alignSelf: "center", opacity: 0.6 };
  const internal = importDefault(689).internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  if (arg0) {
    let semanticColor = resolveSemanticColor(tmp3.DARKER, tmp(689).colors.INTERACTIVE_TEXT_DEFAULT);
  } else {
    semanticColor = resolveSemanticColor(tmp3.LIGHT, tmp(689).colors.INTERACTIVE_TEXT_DEFAULT);
  }
  obj.tintColor = semanticColor;
  obj.lock = obj;
  return obj;
});
importDefaultResult1 = new importDefaultResult1(0, 0, 0, 0.2);
importDefaultResult2 = new importDefaultResult2(255, 255, 255, 0.5);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: importDefaultResult.THEME_ITEM_PADDING };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx");

export default function ThemeSelectorItem(onPress) {
  let accessibilityRole;
  let accessibilityState;
  let isNew;
  let isPreview;
  let isSelected;
  let themePreset;
  ({ themePreset, isPreview, isSelected, isNew } = onPress);
  const tmp = _createForOfIteratorHelperLoose();
  if (isPreview) {
    isPreview = themePreset.type !== require(3944) /* ClientThemeType */.ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  if (themePreset.type === require(3944) /* ClientThemeType */.ClientThemeType.STANDARD_BACKGROUND_THEME) {
    let obj = { item: themePreset };
    let tmp8 = callback(DefaultThemeBackground, obj);
  } else if (themePreset.type === require(3944) /* ClientThemeType */.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    obj = { item: themePreset, isThemeLocked: isPreview };
    tmp8 = callback(CustomThemeBackground, obj);
  } else {
    obj = { isThemeLocked: isPreview, item: themePreset };
    tmp8 = callback(GradientThemeBackground, obj);
  }
  let obj3 = require(3848) /* useCheckboxA11yNative */;
  const obj1 = { selected: isSelected, disabled: isPreview };
  const radioA11yNative = obj3.useRadioA11yNative(obj1);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = { style: tmp.themeSelectorItemContainer, androidRippleConfig: tmp.rippleColor, onPress: onPress.onPress, accessibilityRole, accessibilityLabel: themePreset.getName(), accessibilityState };
  let stringResult;
  if (isPreview) {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.VqGKm0);
  }
  obj2.accessibilityHint = stringResult;
  obj3 = { style: tmp.themeSelectorItem };
  const items = [tmp8, ];
  if (isNew) {
    isNew = !isSelected;
  }
  if (isNew) {
    const obj4 = { style: tmp.newRedCircle };
    isNew = callback(View, obj4);
  }
  items[1] = isNew;
  obj3.children = items;
  obj2.children = closure_7(View, obj3);
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj2);
};
