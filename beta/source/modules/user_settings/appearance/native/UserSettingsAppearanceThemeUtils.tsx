// Module ID: 15443
// Function ID: 15444
// Name: UserSettingsAppearanceThemeUtils
// Dependencies: [1231, 1186, 1189, 1078, 1233, 1378, 1234, 1190, 15444, 12113, 9502, 1232, 4639, 15445, 1245, 2]
// Exports: disableSameAsDeviceTheme, enableSameAsDeviceTheme, getSyncedModeThemeIndex, getUserThemeIndex, handleSaveSyncedModeTheme, handleSaveTheme, trackClientThemeUpdated

// Module 15443 (UserSettingsAppearanceThemeUtils)
import ClientThemesTypes from "ClientThemesTypes" /* 1234 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4639 */;
import SameAsDeviceThemeUtils from "SameAsDeviceThemeUtils" /* 15445 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1231 */;
import ThemeStore from "ThemeStore" /* 1186 */;

require = fn;
const SystemThemeState = fn(1189).SystemThemeState;
const AnalyticEvents = fn(1078).AnalyticEvents;
let closure_7 = fn(1233).BACKGROUND_GRADIENT_PRESETS_MOBILE;
const constants = fn(1378).AnalyticsPremiumFeatureNames;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(found, analyticsLocations, isSynced) {
  if (found.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: "custom theme", is_persisted: true, is_synced: isSynced, location_stack: analyticsLocations };
    AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
    if ("system" === found.theme) {
      const result = tmp(15444).resetBackgroundGradientPreset();
      const tmpResult = tmp(15444);
      tmp(12113).resetCustomTheme();
      const tmpResult13 = tmp(12113);
      const obj3 = { theme: found.theme };
      return tmp(9502).saveClientTheme(obj3);
    } else if (found.type === tmp(1234).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const customThemeBaseTheme = tmp(1232).getCustomThemeBaseTheme(found.theme);
      const tmpResult15 = tmp(1232);
      const result1 = tmp(15444).resetBackgroundGradientPreset();
      const tmpResult16 = tmp(15444);
      tmp(12113).updateCustomTheme(found.customThemeSettings, customThemeBaseTheme);
      const tmpResult17 = tmp(12113);
      const obj4 = { customUserThemeSettings: found.customThemeSettings, theme: customThemeBaseTheme };
      return tmp(9502).saveClientTheme(obj4);
    } else {
      if (found.type === tmp(1234).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const result2 = tmp(15444).updateBackgroundGradientPreset(found.id);
        const tmpResult19 = tmp(15444);
        tmp(12113).resetCustomTheme();
        const tmpResult20 = tmp(12113);
        ({ id: obj10.backgroundGradientPresetId, theme: obj10.theme } = found);
        let saveClientThemeResult = tmp(9502).saveClientTheme({ backgroundGradientPresetId: null, theme: null });
        const obj5 = { backgroundGradientPresetId: null, theme: null };
        const tmpResult21 = tmp(9502);
      } else {
        const result3 = tmp(15444).resetBackgroundGradientPreset();
        const tmpResult22 = tmp(15444);
        tmp(12113).resetCustomTheme();
        const tmpResult23 = tmp(12113);
        const obj6 = { theme: found.theme };
        saveClientThemeResult = tmp(9502).saveClientTheme(obj6);
        const tmpResult24 = tmp(9502);
      }
      return saveClientThemeResult;
    }
  } else if (found.type === tmp(1234).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let combined = tmp(1190).BackgroundGradientPresetId[found.id];
  } else {
    const _HermesInternal = HermesInternal;
    combined = "default " + found.theme;
  }
};
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(mobileThemes, systemTheme, analyticsLocations) {
  if ("system" !== mobileThemes.theme) {
    if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: "custom theme", is_persisted: true, is_synced: false, location_stack: analyticsLocations };
      AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
      if (mobileThemes.type === tmp14(1234).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        let theme = tmp14(1232).getCustomThemeBaseTheme(mobileThemes.theme);
        const tmp14Result = tmp14(1232);
      } else {
        theme = mobileThemes.theme;
      }
      const obj3 = {};
      obj3[systemTheme] = theme;
      const result = tmp14(4639).updateThemePreferences(obj3);
      if (mobileThemes.type === tmp14(1234).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const obj4 = { customUserThemeSettings: mobileThemes.customThemeSettings };
        const result1 = tmp14(4639).updateSyncedClientTheme(systemTheme, obj4);
        const tmp14Result6 = tmp14(4639);
      } else if (mobileThemes.type === tmp14(1234).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const obj5 = { backgroundGradientPresetId: mobileThemes.id };
        const result2 = tmp14(4639).updateSyncedClientTheme(systemTheme, obj5);
        const tmp14Result7 = tmp14(4639);
      } else {
        const obj6 = { theme: mobileThemes.theme };
        const result3 = tmp14(4639).updateSyncedClientTheme(systemTheme, obj6);
        const tmp14Result8 = tmp14(4639);
      }
      const tmp14Result5 = tmp14(4639);
    } else if (mobileThemes.type === tmp14(1234).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      let combined = tmp14(1190).BackgroundGradientPresetId[mobileThemes.id];
    } else {
      const _HermesInternal = HermesInternal;
      combined = "default " + mobileThemes.theme;
    }
  }
};
export const getSyncedModeThemeIndex = function getSyncedModeThemeIndex(memo2, stateFromStores) {
  const syncedClientTheme = ThemeStore.getSyncedClientTheme(stateFromStores);
  let prop;
  if (syncedClientTheme != null) {
    prop = syncedClientTheme.customUserThemeSettings;
  }
  if (null != prop) {
    const findIndexResult = memo2.findIndex((type) => type.type === syncedClientTheme(dependencyMap[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
    if (findIndexResult >= 0) {
      return findIndexResult;
    }
  }
  let prop1;
  if (syncedClientTheme != null) {
    prop1 = syncedClientTheme.backgroundGradientPresetId;
  }
  if (null != prop1) {
    const findIndexResult1 = memo2.findIndex((type) => {
      let tmp = type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (tmp) {
        tmp = type.id === syncedClientTheme.backgroundGradientPresetId;
      }
      return tmp;
    });
    if (findIndexResult1 >= 0) {
      return findIndexResult1;
    }
  }
  closure_1 = ThemeStore.themePreferenceForSystemTheme(stateFromStores);
  const findIndexResult2 = memo2.findIndex((theme) => theme.theme === closure_1);
  let num3 = 0;
  if (findIndexResult2 >= 0) {
    num3 = findIndexResult2;
  }
  return num3;
};
export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme() {
  const result = SameAsDeviceThemeUtils.enableSameAsDeviceTheme(CustomThemeMobileStore.getCustomTheme());
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  ThemeActionCreators.setUseSystemTheme(SystemThemeState.OFF);
  const result = ThemeActionCreators.clearSyncedClientThemes();
};
export const trackClientThemeUpdated = function trackClientThemeUpdated(arg0) {
  ({ isPersisted, isSynced, themeName, analyticsLocations } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, { feature_name: constants.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations });
};
export const getUserThemeIndex = function getUserThemeIndex(userPreset, c1, memo1, c3, c4) {
  if (null != userPreset) {
    const findIndexResult = memo1.findIndex((type) => type.type === userPreset(1234).ClientThemeType.BACKGROUND_GRADIENT_PRESET);
    const findIndexResult1 = closure_7.findIndex((id) => id.id === userPreset.id);
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
        return memo1.findIndex((type) => type.type === userPreset(1234).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
      }
    }
    const str = "system";
    const findIndexResult2 = memo1.findIndex((theme) => theme.theme === str);
    let num2 = 0;
    if (findIndexResult2 >= 0) {
      num2 = findIndexResult2;
    }
    return num2;
  }
};
