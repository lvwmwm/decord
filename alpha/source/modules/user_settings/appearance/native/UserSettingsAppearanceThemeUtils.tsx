// Module ID: 17518
// Function ID: 17519
// Name: UserSettingsAppearanceThemeUtils
// Dependencies: [1238, 1192, 1195, 1072, 1387, 1241, 1196, 17519, 14448, 6179, 1239, 5313, 17520, 1252, 2]
// Exports: disableSameAsDeviceTheme, enableSameAsDeviceTheme, getSyncedModeThemeIndex, getUserThemeIndex, handleSaveSyncedModeTheme, handleSaveTheme, trackClientThemeUpdated

// Module 17518 (UserSettingsAppearanceThemeUtils)
import Constants from "Constants" /* 1072 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1241 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import ThemeActionCreators from "ThemeActionCreators" /* 5313 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 6179 */;
import CustomThemeMobileActionCreators from "CustomThemeMobileActionCreators" /* 14448 */;
import ClientThemesBackgroundActionCreators from "ClientThemesBackgroundActionCreators" /* 17519 */;
import SameAsDeviceThemeUtils from "SameAsDeviceThemeUtils" /* 17520 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import size from "module_2" /* 2 */;

const SystemThemeState = ThemeConstants.SystemThemeState;
const AnalyticEvents = Constants.AnalyticEvents;
const constants = PremiumConstants.AnalyticsPremiumFeatureNames;
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export function handleSaveTheme(found, analyticsLocations, isSynced) {
  let str = "custom theme";
  if (found.type !== ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    let combined;
    if (found.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      combined = tmp(1196).BackgroundGradientPresetId[found.id];
    } else {
      const _HermesInternal = HermesInternal;
      combined = "default " + found.theme;
    }
    str = combined;
  }
  const obj = AnalyticsUtilsDefault;
  const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: str, is_persisted: true, is_synced: isSynced, location_stack: analyticsLocations };
  obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
  if ("system" === found.theme) {
    const tmpResult = ClientThemesBackgroundActionCreators;
    const result = tmpResult.resetBackgroundGradientPreset();
    const tmpResult13 = CustomThemeMobileActionCreators;
    tmpResult13.resetCustomTheme();
    const obj3 = { theme: found.theme };
    const tmpResult14 = UserSettingsActionCreators;
    return tmpResult14.saveClientTheme(obj3);
  } else if (found.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const tmpResult15 = ClientThemesUtils;
    const customThemeBaseTheme = tmpResult15.getCustomThemeBaseTheme(found.theme);
    const tmpResult16 = ClientThemesBackgroundActionCreators;
    const result1 = tmpResult16.resetBackgroundGradientPreset();
    const tmpResult17 = CustomThemeMobileActionCreators;
    tmpResult17.updateCustomTheme(found.customThemeSettings, customThemeBaseTheme);
    const obj4 = { customUserThemeSettings: found.customThemeSettings, theme: customThemeBaseTheme };
    const tmpResult18 = UserSettingsActionCreators;
    return tmpResult18.saveClientTheme(obj4);
  } else {
    let saveClientThemeResult;
    if (found.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const tmpResult19 = ClientThemesBackgroundActionCreators;
      const result2 = tmpResult19.updateBackgroundGradientPreset(found.id);
      const tmpResult20 = CustomThemeMobileActionCreators;
      tmpResult20.resetCustomTheme();
      const obj5 = { backgroundGradientPresetId: null, theme: null };
      ({ id: obj10.backgroundGradientPresetId, theme: obj10.theme } = found);
      const tmpResult21 = UserSettingsActionCreators;
      saveClientThemeResult = tmpResult21.saveClientTheme(obj5);
    } else {
      const tmpResult22 = ClientThemesBackgroundActionCreators;
      const result3 = tmpResult22.resetBackgroundGradientPreset();
      const tmpResult23 = CustomThemeMobileActionCreators;
      tmpResult23.resetCustomTheme();
      const obj6 = { theme: found.theme };
      const tmpResult24 = UserSettingsActionCreators;
      saveClientThemeResult = tmpResult24.saveClientTheme(obj6);
    }
    return saveClientThemeResult;
  }
}
export function handleSaveSyncedModeTheme(hexagonCampaignClientThemeItem2, item10084, analyticsLocations) {
  if ("system" !== hexagonCampaignClientThemeItem2.theme) {
    let theme;
    let str2 = "custom theme";
    if (hexagonCampaignClientThemeItem2.type !== ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      let combined;
      if (hexagonCampaignClientThemeItem2.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        combined = tmp13(1196).BackgroundGradientPresetId[hexagonCampaignClientThemeItem2.id];
      } else {
        const _HermesInternal = HermesInternal;
        combined = "default " + hexagonCampaignClientThemeItem2.theme;
      }
      str2 = combined;
    }
    const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: str2, is_persisted: true, is_synced: false, location_stack: analyticsLocations };
    const obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
    if (hexagonCampaignClientThemeItem2.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const tmp13Result = ClientThemesUtils;
      theme = tmp13Result.getCustomThemeBaseTheme(hexagonCampaignClientThemeItem2.theme);
    } else {
      theme = hexagonCampaignClientThemeItem2.theme;
    }
    const obj3 = {};
    obj3[item10084] = theme;
    const tmp13Result5 = ThemeActionCreators;
    const result = tmp13Result5.updateThemePreferences(obj3);
    if (hexagonCampaignClientThemeItem2.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const obj4 = { customUserThemeSettings: hexagonCampaignClientThemeItem2.customThemeSettings };
      const tmp13Result6 = ThemeActionCreators;
      const result1 = tmp13Result6.updateSyncedClientTheme(item10084, obj4);
    } else if (hexagonCampaignClientThemeItem2.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      const obj5 = { backgroundGradientPresetId: hexagonCampaignClientThemeItem2.id };
      const tmp13Result7 = ThemeActionCreators;
      const result2 = tmp13Result7.updateSyncedClientTheme(item10084, obj5);
    } else {
      const obj6 = { theme: hexagonCampaignClientThemeItem2.theme };
      const tmp13Result8 = ThemeActionCreators;
      const result3 = tmp13Result8.updateSyncedClientTheme(item10084, obj6);
    }
  }
}
export function getSyncedModeThemeIndex(memo2, item10084) {
  const syncedClientTheme = ThemeStore.getSyncedClientTheme(item10084);
  let prop;
  const obj = ThemeStore;
  if (syncedClientTheme != null) {
    prop = syncedClientTheme.customUserThemeSettings;
  }
  if (null != prop) {
    const findIndexResult = memo2.findIndex((type) => type.type === syncedClientTheme(dependencyMap[5]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
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
      const tmp = type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET && type.id === syncedClientTheme.backgroundGradientPresetId;
      return tmp;
    });
    if (findIndexResult1 >= 0) {
      return findIndexResult1;
    }
  }
  let closure_1 = obj.themePreferenceForSystemTheme(item10084);
  const findIndexResult2 = memo2.findIndex((theme) => theme.theme === closure_1);
  let num3 = 0;
  if (findIndexResult2 >= 0) {
    num3 = findIndexResult2;
  }
  return num3;
}
export function enableSameAsDeviceTheme() {
  const obj = SameAsDeviceThemeUtils;
  const result = obj.enableSameAsDeviceTheme(CustomThemeMobileStore.getCustomTheme());
}
export function disableSameAsDeviceTheme() {
  const obj = ThemeActionCreators;
  obj.setUseSystemTheme(SystemThemeState.OFF);
  const obj2 = ThemeActionCreators;
  const result = obj2.clearSyncedClientThemes();
}
export function trackClientThemeUpdated(arg0) {
  let analyticsLocations;
  let isPersisted;
  let isSynced;
  let themeName;
  ({ isPersisted, isSynced, themeName, analyticsLocations } = arg0);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations };
  obj.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
}
export function getUserThemeIndex(userPreset, c1, memo1, c3, c4) {
  let tmp;
  if (null != userPreset) {
    const findIndexResult = memo1.findIndex((type) => {
      const tmp = type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET && type.id === userPreset.id;
      return tmp;
    });
    let num3 = 0;
    if (findIndexResult >= 0) {
      num3 = findIndexResult;
    }
    return num3;
  } else {
    const tmp2 = c4;
    if (tmp2) {
      if (tmp >= 0) {
        return memo1.findIndex((type) => type.type === userPreset(dependencyMap[5]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
      }
    }
    let str = "system";
    if (!c1) {
      str = c3;
    }
    const findIndexResult1 = memo1.findIndex((theme) => theme.theme === str);
    let num2 = 0;
    if (findIndexResult1 >= 0) {
      num2 = findIndexResult1;
    }
    return num2;
  }
}
