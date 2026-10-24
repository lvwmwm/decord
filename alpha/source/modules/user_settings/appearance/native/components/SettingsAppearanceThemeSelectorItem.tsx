// Module ID: 16627
// Function ID: 16628
// Name: SettingsAppearanceThemeSelectorItem
// Dependencies: [19, 17, 1207, 16626, 1098, 21, 4971, 587, 4969, 558, 576, 4993, 10625, 1202, 16628, 573, 5252, 16629, 5202, 1256, 5039, 1128, 6908, 2]

// Module 16627 (SettingsAppearanceThemeSelectorItem)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1256 */;
import utils_ColorDefault from "utils/Color" /* 4969 */;
import themes from "themes" /* 4993 */;
import react_native2 from "react-native" /* 5039 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5202 */;
import useToken from "useToken" /* 5252 */;
import Pressables from "Pressables" /* 6908 */;
import ThemedGradient from "ThemedGradient" /* 10625 */;
import AssetRegistryDefault from "AssetRegistry" /* 16628 */;
import SynchronizeIconNativeDefault from "SynchronizeIconNative" /* 16629 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 16626 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ThemedGradientDefault = ThemedGradient;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let tmp;
const native = tmp(1202);
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
    semanticColor = resolveSemanticColor(tmp3.DARK, tmp(587).colors.INTERACTIVE_TEXT_DEFAULT);
  } else {
    semanticColor = resolveSemanticColor(tmp3.LIGHT, tmp(587).colors.INTERACTIVE_TEXT_DEFAULT);
  }
  return obj;
});
let tmp6 = new utils_ColorDefault(0, 0, 0, 0.2);
let closure_10 = tmp6;
let tmp7 = new utils_ColorDefault(255, 255, 255, 0.5);
let closure_11 = tmp7;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GradientThemeBackground(arg0) {
  let isThemeLocked;
  let item;
  let items;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(18);
  ({ item, isThemeLocked } = arg0);
  if (cResult[0] !== item.theme) {
    const tmpResult = themes;
    const isThemeDarkResult = tmpResult.isThemeDark(item.theme);
    cResult[0] = item.theme;
    cResult[1] = isThemeDarkResult;
    tmp4 = isThemeDarkResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_9(tmp4);
  if (cResult[2] !== isThemeLocked) {
    const tmp8 = isThemeLocked && { opacity: 0.5 };
    cResult[2] = isThemeLocked;
    cResult[3] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp6.themeSelectorGradientBackground) {
    let tmp9;
    let tmp11;
    if (cResult[5] === tmp7) {
      tmp9 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { borderRadius: nativeDefault.radii.sm };
      cResult[7] = obj2;
      tmp11 = obj2;
    } else {
      tmp11 = cResult[7];
    }
    const tmp13 = tmp4 ? closure_10 : closure_11;
    if (cResult[8] === item) {
      let tmp14;
      if (cResult[9] === tmp13) {
        tmp14 = cResult[10];
      }
      if (cResult[11] === isThemeLocked) {
        let tmp18;
        if (cResult[12] === tmp6.lock) {
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp9) {
          if (cResult[15] === tmp14) {
            let tmp22;
            if (cResult[16] === tmp18) {
              tmp22 = cResult[17];
            }
            return tmp22;
          }
        }
        const obj3 = { style: tmp9, children: items };
        items = [tmp14, tmp18];
        const tmp25 = metroImportDefault(View, obj3);
        cResult[14] = tmp9;
        cResult[15] = tmp14;
        cResult[16] = tmp18;
        cResult[17] = tmp25;
        tmp22 = tmp25;
      }
      let tmp19 = isThemeLocked;
      if (tmp19) {
        const obj4 = { source: AssetRegistryDefault, style: tmp6.lock };
        const Icon = tmp(1202).Icon;
        tmp19 = metroRequire(Icon, obj4);
      }
      cResult[11] = isThemeLocked;
      cResult[12] = tmp6.lock;
      cResult[13] = tmp19;
      tmp18 = tmp19;
    }
    const obj5 = { componentStyles: tmp11, gradientOverride: item, mix: true, mixColorOverride: tmp13 };
    const tmp17 = metroRequire(ThemedGradientDefault, obj5);
    cResult[8] = item;
    cResult[9] = tmp13;
    cResult[10] = tmp17;
    tmp14 = tmp17;
  }
  const items1 = [tmp6.themeSelectorGradientBackground, tmp7];
  cResult[4] = tmp6.themeSelectorGradientBackground;
  cResult[5] = tmp7;
  cResult[6] = items1;
  tmp9 = items1;
}) : (function GradientThemeBackground(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function DefaultThemeBackground(item) {
  let obj4;
  let systemTheme;
  let theme;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(14);
  item = item.item;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function c() {
      return systemTheme.systemTheme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === item.theme) {
    let tmp8;
    if (cResult[3] === stateFromStores) {
      tmp8 = cResult[4];
    }
    const tmpResult4 = useToken;
    const token = tmpResult4.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp8);
    const tmpResult5 = useToken;
    const token1 = tmpResult5.useToken(nativeDefault.colors.BORDER_STRONG, tmp8);
    const tmpResult6 = useToken;
    const token2 = tmpResult6.useToken(nativeDefault.colors.ICON_STRONG, tmp8);
    if (cResult[5] === token) {
      let tmp14;
      if (cResult[6] === token1) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === token2) {
        let tmp15;
        if (cResult[9] === item.theme) {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp14) {
          let tmp19;
          if (cResult[12] === tmp15) {
            tmp19 = cResult[13];
          }
          return tmp19;
        }
        const obj2 = { style: tmp14, children: tmp15 };
        const tmp22 = metroRequire(View, obj2);
        cResult[11] = tmp14;
        cResult[12] = tmp15;
        cResult[13] = tmp22;
        tmp19 = tmp22;
      }
      let tmp16 = null;
      if ("system" === item.theme) {
        const obj3 = { style: { alignSelf: "center", justifyContent: "center", flex: 1 }, children: metroRequire(SynchronizeIconNativeDefault, obj4) };
        obj4 = { fill: token2 };
        tmp16 = metroRequire(View, obj3);
      }
      cResult[8] = token2;
      cResult[9] = item.theme;
      cResult[10] = tmp16;
      tmp15 = tmp16;
    }
    size = { width: "100%", height: "100%", backgroundColor: token, borderColor: token1, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
    cResult[5] = token;
    cResult[6] = token1;
    cResult[7] = size;
    tmp14 = size;
  }
  if ("system" === item.theme) {
    theme = ThemeStore.themePreferenceForSystemTheme(stateFromStores);
  } else {
    theme = item.theme;
  }
  cResult[2] = item.theme;
  cResult[3] = stateFromStores;
  cResult[4] = theme;
  tmp8 = theme;
}) : (function DefaultThemeBackground(item) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomThemeBackground(arg0) {
  let isThemeLocked;
  let item;
  let items;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(18);
  ({ item, isThemeLocked } = arg0);
  if (cResult[0] !== item.theme) {
    const tmpResult = themes;
    const isThemeDarkResult = tmpResult.isThemeDark(item.theme);
    cResult[0] = item.theme;
    cResult[1] = isThemeDarkResult;
    tmp4 = isThemeDarkResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_9(tmp4);
  if (cResult[2] !== isThemeLocked) {
    const tmp8 = isThemeLocked && { opacity: 0.5 };
    cResult[2] = isThemeLocked;
    cResult[3] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp6.themeSelectorGradientBackground) {
    let tmp9;
    let tmp11;
    if (cResult[5] === tmp7) {
      tmp9 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { borderRadius: nativeDefault.radii.sm };
      cResult[7] = obj2;
      tmp11 = obj2;
    } else {
      tmp11 = cResult[7];
    }
    const tmp13 = tmp4 ? closure_10 : closure_11;
    if (cResult[8] === item) {
      let tmp14;
      if (cResult[9] === tmp13) {
        tmp14 = cResult[10];
      }
      if (cResult[11] === isThemeLocked) {
        let tmp17;
        if (cResult[12] === tmp6.lock) {
          tmp17 = cResult[13];
        }
        if (cResult[14] === tmp9) {
          if (cResult[15] === tmp14) {
            let tmp21;
            if (cResult[16] === tmp17) {
              tmp21 = cResult[17];
            }
            return tmp21;
          }
        }
        const obj3 = { style: tmp9, children: items };
        items = [tmp14, tmp17];
        const tmp24 = metroImportDefault(View, obj3);
        cResult[14] = tmp9;
        cResult[15] = tmp14;
        cResult[16] = tmp17;
        cResult[17] = tmp24;
        tmp21 = tmp24;
      }
      let tmp18 = isThemeLocked;
      if (tmp18) {
        const obj4 = { source: AssetRegistryDefault, style: tmp6.lock };
        const Icon = tmp(1202).Icon;
        tmp18 = metroRequire(Icon, obj4);
      }
      cResult[11] = isThemeLocked;
      cResult[12] = tmp6.lock;
      cResult[13] = tmp18;
      tmp17 = tmp18;
    }
    const obj5 = { componentStyles: tmp11, mix: true, mixColorOverride: tmp13, customTheme: item };
    const tmp16 = metroRequire(ThemedGradient.CustomThemedGradient, obj5);
    cResult[8] = item;
    cResult[9] = tmp13;
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  const items1 = [tmp6.themeSelectorGradientBackground, tmp7];
  cResult[4] = tmp6.themeSelectorGradientBackground;
  cResult[5] = tmp7;
  cResult[6] = items1;
  tmp9 = items1;
}) : (function CustomThemeBackground(arg0) {
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
  const CustomThemedGradient = tmp(10625).CustomThemedGradient;
  items1 = [metroRequire(CustomThemedGradient, obj4), ];
  if (isThemeLocked) {
    const obj6 = { source: AssetRegistryDefault, style: tmp4.lock };
    const Icon = tmp(1202).Icon;
    isThemeLocked = tmp7(Icon, obj6);
  }
  items1[1] = isThemeLocked;
  return tmp5(tmp6, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemeSelectorItem(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let isNew;
  let isPreview;
  let isSelected;
  let items;
  let onPress;
  let rippleColor;
  let themePreset;
  let themeSelectorItemContainer;
  const obj = react2;
  const cResult = obj.c(30);
  ({ themePreset, isPreview, isSelected, onPress, isNew } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === isPreview) {
    let tmp5;
    let tmp10;
    if (cResult[1] === themePreset) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      let tmp7;
      if (cResult[4] === themePreset) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === isSelected) {
        let tmp15;
        let tmp17;
        let tmp19;
        if (cResult[7] === tmp5) {
          tmp15 = cResult[8];
        }
        const tmpResult = react_native2;
        const radioA11yNative = tmpResult.useRadioA11yNative(tmp15);
        ({ accessibilityRole, accessibilityState } = radioA11yNative);
        ({ themeSelectorItemContainer, rippleColor } = tmp4);
        if (cResult[9] !== themePreset) {
          const name = themePreset.getName();
          cResult[9] = themePreset;
          cResult[10] = name;
          tmp17 = name;
        } else {
          tmp17 = cResult[10];
        }
        if (cResult[11] !== tmp5) {
          let stringResult;
          if (tmp5) {
            const intl = tmp(1128).intl;
            stringResult = intl.string(tmp(1128).t.VqGKm0);
          }
          cResult[11] = tmp5;
          cResult[12] = stringResult;
          tmp19 = stringResult;
        } else {
          tmp19 = cResult[12];
        }
        if (cResult[13] === isNew) {
          if (cResult[14] === isSelected) {
            let tmp21;
            if (cResult[15] === tmp4.newRedCircle) {
              tmp21 = cResult[16];
            }
            if (cResult[17] === tmp7) {
              if (cResult[18] === tmp4.themeSelectorItem) {
                let tmp25;
                if (cResult[19] === tmp21) {
                  tmp25 = cResult[20];
                }
                if (cResult[21] === accessibilityRole) {
                  if (cResult[22] === accessibilityState) {
                    if (cResult[23] === onPress) {
                      if (cResult[24] === tmp4.rippleColor) {
                        if (cResult[25] === tmp4.themeSelectorItemContainer) {
                          if (cResult[26] === tmp17) {
                            if (cResult[27] === tmp19) {
                              let tmp29;
                              if (cResult[28] === tmp25) {
                                tmp29 = cResult[29];
                              }
                              return tmp29;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj2 = { style: themeSelectorItemContainer, androidRippleConfig: rippleColor, onPress, accessibilityRole, accessibilityLabel: tmp17, accessibilityState, accessibilityHint: tmp19, children: tmp25 };
                const tmp31 = metroRequire(Pressables.PressableOpacity, obj2);
                cResult[21] = accessibilityRole;
                cResult[22] = accessibilityState;
                cResult[23] = onPress;
                cResult[24] = tmp4.rippleColor;
                cResult[25] = tmp4.themeSelectorItemContainer;
                cResult[26] = tmp17;
                cResult[27] = tmp19;
                cResult[28] = tmp25;
                cResult[29] = tmp31;
                tmp29 = tmp31;
              }
            }
            const obj3 = { style: tmp4.themeSelectorItem, children: items };
            items = [tmp7, tmp21];
            const tmp28 = metroImportDefault(View, obj3);
            cResult[17] = tmp7;
            cResult[18] = tmp4.themeSelectorItem;
            cResult[19] = tmp21;
            cResult[20] = tmp28;
            tmp25 = tmp28;
          }
        }
        let tmp22 = isNew && !isSelected;
        if (tmp22) {
          const obj4 = { style: tmp4.newRedCircle };
          tmp22 = metroRequire(View, obj4);
        }
        cResult[13] = isNew;
        cResult[14] = isSelected;
        cResult[15] = tmp4.newRedCircle;
        cResult[16] = tmp22;
        tmp21 = tmp22;
      }
      const obj5 = { selected: isSelected, disabled: tmp5 };
      cResult[6] = isSelected;
      cResult[7] = tmp5;
      cResult[8] = obj5;
      tmp15 = obj5;
    }
    if (themePreset.type === ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME) {
      const obj6 = { item: themePreset };
      tmp10 = metroRequire(closure_13, obj6);
    } else if (themePreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const obj7 = { item: themePreset, isThemeLocked: tmp5 };
      tmp10 = metroRequire(closure_14, obj7);
    } else {
      const obj8 = { isThemeLocked: tmp5, item: themePreset };
      tmp10 = metroRequire(closure_12, obj8);
    }
    cResult[3] = tmp5;
    cResult[4] = themePreset;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  let result = isPreview;
  if (result) {
    const tmpResult2 = MobileThemesUtils;
    result = tmpResult2.isNitroGatedMobileTheme(themePreset);
  }
  cResult[0] = isPreview;
  cResult[1] = themePreset;
  cResult[2] = result;
  tmp5 = result;
}) : (function ThemeSelectorItem(onPress) {
  let accessibilityRole;
  let accessibilityState;
  let isNew;
  let isPreview;
  let isSelected;
  let items;
  let obj6;
  let stringResult;
  let themePreset;
  let tmp16;
  let tmp8;
  let tmp9;
  ({ themePreset, isPreview, isSelected, isNew } = onPress);
  onPress = onPress.onPress;
  const tmp = closure_8();
  if (isPreview) {
    const obj = MobileThemesUtils;
    isPreview = obj.isNitroGatedMobileTheme(themePreset);
  }
  if (themePreset.type === ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME) {
    const obj2 = { item: themePreset };
    tmp8 = metroRequire(closure_13, obj2);
    tmp9 = metroRequire;
  } else if (themePreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj3 = { item: themePreset, isThemeLocked: isPreview };
    tmp8 = metroRequire(closure_14, obj3);
    tmp9 = metroRequire;
  } else {
    const obj4 = { isThemeLocked: isPreview, item: themePreset };
    tmp8 = metroRequire(closure_12, obj4);
    tmp9 = metroRequire;
  }
  const tmp4Result = react_native2;
  const radioA11yNative = tmp4Result.useRadioA11yNative({ selected: isSelected, disabled: isPreview });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj5 = { style: tmp.themeSelectorItemContainer, androidRippleConfig: tmp.rippleColor, onPress, accessibilityRole, accessibilityLabel: themePreset.getName(), accessibilityState, accessibilityHint: stringResult, children: tmp16(View, obj6) };
  const PressableOpacity = tmp4(6908).PressableOpacity;
  stringResult = undefined;
  if (isPreview) {
    const intl = tmp4(1128).intl;
    stringResult = intl.string(tmp4(1128).t.VqGKm0);
  }
  obj6 = { style: tmp.themeSelectorItem, children: items };
  items = [tmp8, ];
  tmp16 = metroImportDefault;
  if (isNew) {
    isNew = !isSelected;
  }
  if (isNew) {
    const obj7 = { style: tmp.newRedCircle };
    isNew = tmp9(tmp17, obj7);
  }
  items[1] = isNew;
  return tmp9(PressableOpacity, obj5);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx");

export default tmp8;
