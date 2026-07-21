// Module ID: 14038
// Function ID: 106736
// Name: GradientThemeBackground
// Dependencies: []
// Exports: default

// Module 14038 (GradientThemeBackground)
function GradientThemeBackground(arg0) {
  let isThemeLocked;
  let item;
  ({ item, isThemeLocked } = arg0);
  let obj = arg1(dependencyMap[9]);
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp2 = callback3(isThemeDarkResult);
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
  const obj2 = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
  obj1.componentStyles = obj2;
  obj1.gradientOverride = item;
  obj1.mix = true;
  obj1.mixColorOverride = isThemeDarkResult ? importDefaultResult1 : importDefaultResult2;
  const items1 = [callback(importDefault(dependencyMap[10]), obj1), ];
  if (isThemeLocked) {
    const obj3 = { source: importDefault(dependencyMap[12]), style: tmp2.lock };
    isThemeLocked = callback(arg1(dependencyMap[11]).Icon, obj3);
  }
  items1[1] = isThemeLocked;
  obj.children = items1;
  return closure_7(View, obj);
}
function DefaultThemeBackground(item) {
  item = item.item;
  arg1(dependencyMap[13]);
  [][0] = closure_4;
  if ("system" === item.theme) {
    let theme = closure_4.themePreferenceForSystemTheme(tmp2);
  } else {
    theme = item.theme;
  }
  let obj = arg1(dependencyMap[14]);
  const token = obj.useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER, theme);
  let obj1 = arg1(dependencyMap[14]);
  const token1 = obj1.useToken(importDefault(dependencyMap[7]).colors.BORDER_STRONG, theme);
  let obj2 = arg1(dependencyMap[14]);
  obj = {};
  obj = { <string:1364261335>: "png", <string:2489582596>: true, <string:391555643>: "/assets/images/native/avatars", <string:1051593134>: 161, <string:1021069251>: 160, backgroundColor: token, borderColor: token1 };
  const token2 = obj2.useToken(importDefault(dependencyMap[7]).colors.ICON_STRONG, theme);
  obj.borderRadius = importDefault(dependencyMap[7]).radii.sm;
  obj.style = obj;
  let tmp9 = null;
  if ("system" === item.theme) {
    obj1 = { style: { "Bool(true)": "gr", "Bool(true)": null, "Bool(true)": "Group 3" } };
    obj2 = { fill: token2 };
    obj1.children = callback(importDefault(dependencyMap[15]), obj2);
    tmp9 = callback(View, obj1);
  }
  obj.children = tmp9;
  return callback(View, obj);
}
function CustomThemeBackground(arg0) {
  let isThemeLocked;
  let item;
  ({ item, isThemeLocked } = arg0);
  let obj = arg1(dependencyMap[9]);
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp2 = callback3(isThemeDarkResult);
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
  const obj2 = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
  obj1.componentStyles = obj2;
  obj1.mix = true;
  obj1.mixColorOverride = isThemeDarkResult ? importDefaultResult1 : importDefaultResult2;
  obj1.customTheme = item;
  const items1 = [callback(arg1(dependencyMap[10]).CustomThemedGradient, obj1), ];
  if (isThemeLocked) {
    const obj3 = { source: importDefault(dependencyMap[12]), style: tmp2.lock };
    isThemeLocked = callback(arg1(dependencyMap[11]).Icon, obj3);
  }
  items1[1] = isThemeLocked;
  obj.children = items1;
  return closure_7(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
const ThemeTypes = arg1(dependencyMap[4]).ThemeTypes;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { color: importDefault(dependencyMap[7]).unsafe_rawColors.TRANSPARENT };
obj.rippleColor = obj;
obj.themeSelectorItemContainer = { width: importDefaultResult.THEME_ITEM_WIDTH, height: importDefaultResult.THEME_ITEM_HEIGHT };
const tmp4 = arg1(dependencyMap[5]);
obj.themeSelectorItem = { borderRadius: importDefault(dependencyMap[7]).radii.sm, padding: importDefaultResult.THEME_ITEM_PADDING };
const obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.sm, padding: importDefaultResult.THEME_ITEM_PADDING };
obj.newRedCircle = { backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.RED_430, borderRadius: importDefault(dependencyMap[7]).radii.sm };
let closure_8 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.RED_430, borderRadius: importDefault(dependencyMap[7]).radii.sm };
let closure_9 = arg1(dependencyMap[6]).createStyles((arg0) => {
  let obj = { themeSelectorGradientBackground: {} };
  obj = {};
  const internal = importDefault(dependencyMap[7]).internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  if (arg0) {
    let semanticColor = resolveSemanticColor(tmp3.DARKER, tmp(tmp2[7]).colors.INTERACTIVE_TEXT_DEFAULT);
  } else {
    semanticColor = resolveSemanticColor(tmp3.LIGHT, tmp(tmp2[7]).colors.INTERACTIVE_TEXT_DEFAULT);
  }
  obj.tintColor = semanticColor;
  obj.lock = obj;
  return obj;
});
let importDefaultResult1 = importDefault(dependencyMap[8]);
importDefaultResult1 = new importDefaultResult1(0, 0, 0, 0.2);
let importDefaultResult2 = importDefault(dependencyMap[8]);
importDefaultResult2 = new importDefaultResult2(255, 255, 255, 0.5);
const obj6 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx");

export default function ThemeSelectorItem(onPress) {
  let accessibilityRole;
  let accessibilityState;
  let isNew;
  let isPreview;
  let isSelected;
  let themePreset;
  ({ themePreset, isPreview, isSelected, isNew } = onPress);
  const tmp = callback2();
  if (isPreview) {
    isPreview = themePreset.type !== arg1(dependencyMap[16]).ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  if (themePreset.type === arg1(dependencyMap[16]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
    let obj = { item: themePreset };
    let tmp8 = callback(DefaultThemeBackground, obj);
  } else if (themePreset.type === arg1(dependencyMap[16]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    obj = { item: themePreset, isThemeLocked: isPreview };
    tmp8 = callback(CustomThemeBackground, obj);
  } else {
    obj = { isThemeLocked: isPreview, item: themePreset };
    tmp8 = callback(GradientThemeBackground, obj);
  }
  let obj3 = arg1(dependencyMap[17]);
  const obj1 = { selected: isSelected, disabled: isPreview };
  const radioA11yNative = obj3.useRadioA11yNative(obj1);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = { style: tmp.themeSelectorItemContainer, androidRippleConfig: tmp.rippleColor, onPress: onPress.onPress, accessibilityRole, accessibilityLabel: themePreset.getName(), accessibilityState };
  let stringResult;
  if (isPreview) {
    const intl = arg1(dependencyMap[19]).intl;
    stringResult = intl.string(arg1(dependencyMap[19]).t.VqGKm0);
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
  return callback(arg1(dependencyMap[18]).PressableOpacity, obj2);
};
