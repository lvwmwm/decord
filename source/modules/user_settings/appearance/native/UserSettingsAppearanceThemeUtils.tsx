// Module ID: 14072
// Function ID: 108223
// Name: getThemeNameForAnalytics
// Dependencies: [3942, 1322, 1278, 1281, 653, 3943, 1851, 3944, 1282, 14073, 11092, 7955, 3840, 3972, 675, 2]
// Exports: disableSameAsDeviceTheme, enableSameAsDeviceTheme, getSyncedModeThemeIndex, getUserThemeIndex, handleSaveSyncedModeTheme, handleSaveTheme

// Module 14072 (getThemeNameForAnalytics)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import SystemThemeState from "SystemThemeState";
import ME from "ME";
import { BACKGROUND_GRADIENT_PRESETS_MOBILE as closure_10 } from "items1";
import { AnalyticsPremiumFeatureNames as closure_11 } from "GuildFeatures";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getThemeNameForAnalytics(type) {
  let id = type;
  if (type.type === require(3944) /* ClientThemeType */.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    return "custom theme";
  } else if (id.type === require(3944) /* ClientThemeType */.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    id = id.id;
    let combined = require(1282) /* _callSuper */.BackgroundGradientPresetId[id];
  } else {
    const _HermesInternal = HermesInternal;
    combined = "default " + id.theme;
  }
}
function trackClientThemeUpdated(arg0) {
  let analyticsLocations;
  let isPersisted;
  let isSynced;
  let themeName;
  ({ isPersisted, isSynced, themeName, analyticsLocations } = arg0);
  let obj = importDefault(675);
  obj = { feature_name: constants3.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations };
  obj.track(constants2.CLIENT_THEME_UPDATED, obj);
}
({ SystemTheme: closure_6, SystemThemeState: closure_7 } = SystemThemeState);
({ AnalyticEvents: closure_8, ThemeTypes: closure_9 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(found, analyticsLocations, isSynced) {
  let obj = { isPersisted: true, isSynced, themeName: getThemeNameForAnalytics(found), analyticsLocations };
  trackClientThemeUpdated(obj);
  if ("system" === found.theme) {
    const result = require(14073) /* updateBackgroundGradientPreset */.resetBackgroundGradientPreset();
    const obj15 = require(14073) /* updateBackgroundGradientPreset */;
    require(11092) /* updateCustomTheme */.resetCustomTheme();
    const obj16 = require(11092) /* updateCustomTheme */;
    obj = { theme: found.theme };
    let saveClientThemeResult = require(7955) /* convertThemeToProto */.saveClientTheme(obj);
    const obj17 = require(7955) /* convertThemeToProto */;
  } else if (found.type === require(3944) /* ClientThemeType */.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const result1 = require(14073) /* updateBackgroundGradientPreset */.resetBackgroundGradientPreset();
    const obj10 = require(14073) /* updateBackgroundGradientPreset */;
    require(11092) /* updateCustomTheme */.updateCustomTheme(found.customThemeSettings, found.theme);
    const obj11 = require(11092) /* updateCustomTheme */;
    obj = { customUserThemeSettings: found.customThemeSettings };
    const obj12 = require(7955) /* convertThemeToProto */;
    obj.theme = require(3840) /* isThemeLight */.isThemeDark(found.theme) ? closure_9.DARK : closure_9.LIGHT;
    obj12.saveClientTheme(obj);
    const obj14 = require(3840) /* isThemeLight */;
  } else if (found.type === require(3944) /* ClientThemeType */.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    const result2 = require(14073) /* updateBackgroundGradientPreset */.updateBackgroundGradientPreset(found.id);
    const obj6 = require(14073) /* updateBackgroundGradientPreset */;
    require(11092) /* updateCustomTheme */.resetCustomTheme();
    const obj7 = require(11092) /* updateCustomTheme */;
    let obj1 = {};
    ({ id: obj9.backgroundGradientPresetId, theme: obj9.theme } = found);
    saveClientThemeResult = require(7955) /* convertThemeToProto */.saveClientTheme(obj1);
    const obj8 = require(7955) /* convertThemeToProto */;
  } else {
    obj1 = require(14073) /* updateBackgroundGradientPreset */;
    const result3 = obj1.resetBackgroundGradientPreset();
    let obj2 = require(11092) /* updateCustomTheme */;
    obj2.resetCustomTheme();
    obj2 = { theme: found.theme };
    saveClientThemeResult = require(7955) /* convertThemeToProto */.saveClientTheme(obj2);
    const obj4 = require(7955) /* convertThemeToProto */;
  }
  return saveClientThemeResult;
};
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(theme, mode, analyticsLocations) {
  if ("system" !== theme.theme) {
    let obj = { isPersisted: true, isSynced: false, themeName: getThemeNameForAnalytics(theme), analyticsLocations };
    trackClientThemeUpdated(obj);
    obj = {};
    obj[mode] = theme.theme;
    const result = require(3972) /* setSystemTheme */.updateThemePreferences(obj);
    if (theme.type === require(3944) /* ClientThemeType */.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      let obj1 = { customUserThemeSettings: theme.customThemeSettings };
      const result1 = require(3972) /* setSystemTheme */.updateSyncedClientTheme(mode, obj1);
      const obj4 = require(3972) /* setSystemTheme */;
    } else if (theme.type === require(3944) /* ClientThemeType */.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      obj1 = require(3972) /* setSystemTheme */;
      const obj2 = { backgroundGradientPresetId: theme.id };
      const result2 = obj1.updateSyncedClientTheme(mode, obj2);
    } else {
      obj = require(3972) /* setSystemTheme */;
      const result3 = obj.updateSyncedClientTheme(mode, undefined);
    }
    const obj7 = require(3972) /* setSystemTheme */;
  }
};
export const getSyncedModeThemeIndex = function getSyncedModeThemeIndex(memo2, mode) {
  const syncedClientTheme = closure_5.getSyncedClientTheme(mode);
  let prop;
  if (null != syncedClientTheme) {
    prop = syncedClientTheme.customUserThemeSettings;
  }
  if (null != prop) {
    const findIndexResult = memo2.findIndex((type) => type.type === syncedClientTheme(outer1_2[7]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
    if (findIndexResult >= 0) {
      return findIndexResult;
    }
  }
  let prop1;
  if (null != syncedClientTheme) {
    prop1 = syncedClientTheme.backgroundGradientPresetId;
  }
  if (null != prop1) {
    const findIndexResult1 = memo2.findIndex((type) => {
      let tmp = type.type === syncedClientTheme(outer1_2[7]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (tmp) {
        tmp = type.id === syncedClientTheme.backgroundGradientPresetId;
      }
      return tmp;
    });
    if (findIndexResult1 >= 0) {
      return findIndexResult1;
    }
  }
  let closure_1 = closure_5.themePreferenceForSystemTheme(mode);
  const findIndexResult2 = memo2.findIndex((theme) => theme.theme === closure_1);
  let num3 = 0;
  if (findIndexResult2 >= 0) {
    num3 = findIndexResult2;
  }
  return num3;
};
export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme() {
  const theme = closure_5.theme;
  let obj = require(3840) /* isThemeLight */;
  const tmp2 = obj.isThemeDark(theme) ? closure_6.DARK : closure_6.LIGHT;
  customTheme = customTheme.getCustomTheme();
  gradientPreset = gradientPreset.gradientPreset;
  if (null != gradientPreset) {
    const id = gradientPreset.id;
  }
  const result = importDefault(7955).setShouldSyncAppearanceSettings(false);
  const obj2 = importDefault(7955);
  const result1 = require(3972) /* setSystemTheme */.updateThemePreferences({ [tmp2]: theme });
  if (null != customTheme) {
    obj = { customUserThemeSettings: customTheme };
    const result2 = require(3972) /* setSystemTheme */.updateSyncedClientTheme(tmp2, obj);
    const obj7 = require(3972) /* setSystemTheme */;
  } else if (null != id) {
    obj = { backgroundGradientPresetId: id };
    const result3 = require(3972) /* setSystemTheme */.updateSyncedClientTheme(tmp2, obj);
    const obj5 = require(3972) /* setSystemTheme */;
  } else {
    const result4 = require(3972) /* setSystemTheme */.updateSyncedClientTheme(tmp2, undefined);
    const obj4 = require(3972) /* setSystemTheme */;
  }
  const obj3 = require(3972) /* setSystemTheme */;
  require(3972) /* setSystemTheme */.setUseSystemTheme(constants.ON);
  const obj9 = require(3972) /* setSystemTheme */;
  const result5 = require(3972) /* setSystemTheme */.setSameAsDeviceThemeEnabled(true);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  require(3972) /* setSystemTheme */.setUseSystemTheme(constants.OFF);
  const obj = require(3972) /* setSystemTheme */;
  const result = require(3972) /* setSystemTheme */.clearSyncedClientThemes();
};
export { trackClientThemeUpdated };
export const getUserThemeIndex = function getUserThemeIndex(userPreset, c1, memo1, c3, c4) {
  let closure_0 = userPreset;
  if (null != userPreset) {
    const findIndexResult = memo1.findIndex((type) => type.type === userPreset(outer1_2[7]).ClientThemeType.BACKGROUND_GRADIENT_PRESET);
    const findIndexResult1 = closure_10.findIndex((id) => id.id === userPreset.id);
    let num4 = 0;
    if (findIndexResult >= 0) {
      num4 = 0;
      if (findIndexResult1 >= 0) {
        num4 = findIndexResult + findIndexResult1;
      }
    }
    return num4;
  } else {
    if (c4) {
      if (tmp >= 0) {
        return memo1.findIndex((type) => type.type === userPreset(outer1_2[7]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
      }
    }
    let str = "system";
    if (!c1) {
      str = c3;
    }
    const findIndexResult2 = memo1.findIndex((theme) => theme.theme === str);
    let num2 = 0;
    if (findIndexResult2 >= 0) {
      num2 = findIndexResult2;
    }
    return num2;
  }
};
