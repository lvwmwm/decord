// Module ID: 14820
// Function ID: 14821
// Name: SettingsAppearanceThemeSelectorItem
// Dependencies: [19, 17, 1182, 14819, 1085, 21, 4836, 576, 4684, 4538, 5437, 1177, 14821, 563, 4531, 14822, 1230, 4548, 5435, 1115, 2]
// Exports: default

// Module 14820 (SettingsAppearanceThemeSelectorItem)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1230 */;
import useToken from "useToken" /* 4531 */;
import themes from "themes" /* 4538 */;
import react_native2 from "react-native" /* 4548 */;
import utils_ColorDefault from "utils/Color" /* 4684 */;
import ThemedGradientDefault from "ThemedGradient" /* 5437 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 14819 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let tmp;
let tmp5;
let tmp8;
const native = tmp(1177);
const AssetRegistryDefault = tmp8(14821);
const SynchronizeIconNativeDefault = tmp5(14822);
function GradientThemeBackground(arg0) {
  let isThemeLocked;
  let item;
  let items1;
  let obj5;
  ({ item, isThemeLocked } = arg0);
  const obj = themes;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp4 = closure_9(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground, ];
  let obj2 = isThemeLocked;
  const tmp5 = metroImportDefault;
  const tmp6 = View;
  if (isThemeLocked) {
    obj2 = { opacity: 0.5 };
  }
  const obj3 = { style: items, children: items1 };
  items[1] = obj2;
  const obj4 = { componentStyles: obj5, gradientOverride: item, mix: true, mixColorOverride: isThemeDarkResult ? closure_10 : closure_11 };
  obj5 = { borderRadius: nativeDefault.radii.sm };
  const tmp9 = ThemedGradientDefault;
  items1 = [metroRequire(tmp9, obj4), ];
  if (isThemeLocked) {
    const obj6 = { source: AssetRegistryDefault, style: tmp4.lock };
    const Icon = native.Icon;
    isThemeLocked = tmp7(Icon, obj6);
  }
  items1[1] = isThemeLocked;
  return tmp5(tmp6, obj3);
}
function DefaultThemeBackground(item) {
  let obj4;
  let systemTheme;
  let theme;
  let tmp9Result;
  item = item.item;
  useStateFromStores;
  [][0] = ThemeStore;
  const obj = ThemeStore;
  if ("system" === item.theme) {
    theme = obj.themePreferenceForSystemTheme(tmp4);
  } else {
    theme = item.theme;
  }
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, theme);
  const tmpResult3 = useToken;
  const token1 = tmpResult3.useToken(nativeDefault.colors.BORDER_STRONG, theme);
  const obj2 = { style: size, children: tmp9Result };
  size = { width: "100%", height: "100%", backgroundColor: token, borderColor: token1, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
  const tmpResult4 = useToken;
  const token2 = tmpResult4.useToken(nativeDefault.colors.ICON_STRONG, theme);
  tmp9Result = null;
  if ("system" === item.theme) {
    const obj3 = { style: { alignSelf: "center", justifyContent: "center", flex: 1 }, children: metroRequire(SynchronizeIconNativeDefault, obj4) };
    obj4 = { fill: token2 };
    tmp9Result = tmp9(tmp10, obj3);
  }
  return metroRequire(View, obj2);
}
function CustomThemeBackground(arg0) {
  let isThemeLocked;
  let item;
  let items1;
  let obj5;
  ({ item, isThemeLocked } = arg0);
  const obj = themes;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp4 = closure_9(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground, ];
  let obj2 = isThemeLocked;
  const tmp5 = metroImportDefault;
  const tmp6 = View;
  if (isThemeLocked) {
    obj2 = { opacity: 0.5 };
  }
  const obj3 = { style: items, children: items1 };
  items[1] = obj2;
  const obj4 = { componentStyles: obj5, mix: true, mixColorOverride: isThemeDarkResult ? closure_10 : closure_11, customTheme: item };
  obj5 = { borderRadius: nativeDefault.radii.sm };
  const CustomThemedGradient = tmp(5437).CustomThemedGradient;
  items1 = [metroRequire(CustomThemedGradient, obj4), ];
  if (isThemeLocked) {
    const obj6 = { source: AssetRegistryDefault, style: tmp4.lock };
    const Icon = tmp(1177).Icon;
    isThemeLocked = tmp7(Icon, obj6);
  }
  items1[1] = isThemeLocked;
  return tmp5(tmp6, obj3);
}
const View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { rippleColor: obj2, themeSelectorItemContainer: { width: SettingsAppearanceConstants.THEME_ITEM_WIDTH, height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT }, themeSelectorItem: obj3, newRedCircle: size };
obj2 = { color: nativeDefault.unsafe_rawColors.TRANSPARENT };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, padding: SettingsAppearanceConstants.THEME_ITEM_PADDING };
size = { backgroundColor: nativeDefault.unsafe_rawColors.RED_430, width: 12, height: 12, borderRadius: nativeDefault.radii.sm, position: "absolute", top: 0, right: 0 };
let closure_8 = createStyles(obj);
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0) => {
  let semanticColor;
  const obj = { themeSelectorGradientBackground: { justifyContent: "center", width: "100%", height: "100%" }, lock: { position: "absolute", alignSelf: "center", opacity: 0.6, tintColor: semanticColor } };
  const internal = nativeDefault.internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  const tmp4 = arg0;
  if (tmp4) {
    semanticColor = resolveSemanticColor(tmp3.DARK, tmp(576).colors.INTERACTIVE_TEXT_DEFAULT);
  } else {
    semanticColor = resolveSemanticColor(tmp3.LIGHT, tmp(576).colors.INTERACTIVE_TEXT_DEFAULT);
  }
  return obj;
});
let tmp6 = new utils_ColorDefault(0, 0, 0, 0.2);
let closure_10 = tmp6;
const tmp7 = new utils_ColorDefault(255, 255, 255, 0.5);
let closure_11 = tmp7;
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx");

export default function ThemeSelectorItem(onPress) {
  let accessibilityRole;
  let accessibilityState;
  let isNew;
  let isPreview;
  let isSelected;
  let items;
  let obj5;
  let stringResult;
  let themePreset;
  let tmp16;
  let tmp8;
  let tmp9;
  ({ themePreset, isPreview, isSelected, isNew } = onPress);
  onPress = onPress.onPress;
  const tmp = closure_8();
  if (isPreview) {
    isPreview = themePreset.type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  if (themePreset.type === ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME) {
    const obj2 = { item: themePreset };
    tmp8 = metroRequire(DefaultThemeBackground, obj2);
    tmp9 = metroRequire;
  } else if (themePreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj3 = { item: themePreset, isThemeLocked: isPreview };
    tmp8 = metroRequire(CustomThemeBackground, obj3);
    tmp9 = metroRequire;
  } else {
    const obj = { isThemeLocked: isPreview, item: themePreset };
    tmp8 = metroRequire(GradientThemeBackground, obj);
    tmp9 = metroRequire;
  }
  const tmp4Result = react_native2;
  const radioA11yNative = tmp4Result.useRadioA11yNative({ selected: isSelected, disabled: isPreview });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj4 = { style: tmp.themeSelectorItemContainer, androidRippleConfig: tmp.rippleColor, onPress, accessibilityRole, accessibilityLabel: themePreset.getName(), accessibilityState, accessibilityHint: stringResult, children: tmp16(View, obj5) };
  const PressableOpacity = tmp4(5435).PressableOpacity;
  stringResult = undefined;
  if (isPreview) {
    const intl = tmp4(1115).intl;
    stringResult = intl.string(tmp4(1115).t.VqGKm0);
  }
  obj5 = { style: tmp.themeSelectorItem, children: items };
  items = [tmp8, ];
  tmp16 = metroImportDefault;
  if (isNew) {
    isNew = !isSelected;
  }
  if (isNew) {
    const obj6 = { style: tmp.newRedCircle };
    isNew = tmp9(tmp17, obj6);
  }
  items[1] = isNew;
  return tmp9(PressableOpacity, obj4);
};
