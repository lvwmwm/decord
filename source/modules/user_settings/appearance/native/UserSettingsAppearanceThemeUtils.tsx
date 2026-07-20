// Module ID: 13941
// Function ID: 105972
// Name: getThemeNameForAnalytics
// Dependencies: []
// Exports: disableSameAsDeviceTheme, enableSameAsDeviceTheme, getSyncedModeThemeIndex, getUserThemeIndex, handleSaveSyncedModeTheme, handleSaveTheme

// Module 13941 (getThemeNameForAnalytics)
function getThemeNameForAnalytics(type) {
  let id = type;
  if (type.type === arg1(dependencyMap[7]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    return "custom theme";
  } else if (id.type === arg1(dependencyMap[7]).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    id = id.id;
    let combined = arg1(dependencyMap[8]).BackgroundGradientPresetId[id];
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
  let obj = importDefault(dependencyMap[14]);
  obj = { feature_name: constants3.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations };
  obj.track(constants2.CLIENT_THEME_UPDATED, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ SystemTheme: closure_6, SystemThemeState: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_8, ThemeTypes: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = arg1(dependencyMap[5]).BACKGROUND_GRADIENT_PRESETS_MOBILE;
let closure_11 = arg1(dependencyMap[6]).AnalyticsPremiumFeatureNames;
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(found, analyticsLocations, isSynced) {
  let obj = { isPersisted: true, isSynced, themeName: getThemeNameForAnalytics(found), analyticsLocations };
  trackClientThemeUpdated(obj);
  if ("system" === found.theme) {
    const result = analyticsLocations(dependencyMap[9]).resetBackgroundGradientPreset();
    const obj15 = analyticsLocations(dependencyMap[9]);
    analyticsLocations(dependencyMap[10]).resetCustomTheme();
    const obj16 = analyticsLocations(dependencyMap[10]);
    obj = { theme: found.theme };
    let saveClientThemeResult = analyticsLocations(dependencyMap[11]).saveClientTheme(obj);
    const obj17 = analyticsLocations(dependencyMap[11]);
  } else if (found.type === analyticsLocations(dependencyMap[7]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const result1 = analyticsLocations(dependencyMap[9]).resetBackgroundGradientPreset();
    const obj10 = analyticsLocations(dependencyMap[9]);
    analyticsLocations(dependencyMap[10]).updateCustomTheme(found.customThemeSettings, found.theme);
    const obj11 = analyticsLocations(dependencyMap[10]);
    obj = { customUserThemeSettings: found.customThemeSettings };
    const obj12 = analyticsLocations(dependencyMap[11]);
    obj.theme = analyticsLocations(dependencyMap[12]).isThemeDark(found.theme) ? closure_9.DARK : closure_9.LIGHT;
    obj12.saveClientTheme(obj);
    const obj14 = analyticsLocations(dependencyMap[12]);
  } else if (found.type === analyticsLocations(dependencyMap[7]).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    const result2 = analyticsLocations(dependencyMap[9]).updateBackgroundGradientPreset(found.id);
    const obj6 = analyticsLocations(dependencyMap[9]);
    analyticsLocations(dependencyMap[10]).resetCustomTheme();
    const obj7 = analyticsLocations(dependencyMap[10]);
    let obj1 = {};
    ({ id: obj9.backgroundGradientPresetId, theme: obj9.theme } = found);
    saveClientThemeResult = analyticsLocations(dependencyMap[11]).saveClientTheme(obj1);
    const obj8 = analyticsLocations(dependencyMap[11]);
  } else {
    obj1 = analyticsLocations(dependencyMap[9]);
    const result3 = obj1.resetBackgroundGradientPreset();
    let obj2 = analyticsLocations(dependencyMap[10]);
    obj2.resetCustomTheme();
    obj2 = { theme: found.theme };
    saveClientThemeResult = analyticsLocations(dependencyMap[11]).saveClientTheme(obj2);
    const obj4 = analyticsLocations(dependencyMap[11]);
  }
  return saveClientThemeResult;
};
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(theme, mode, analyticsLocations) {
  if ("system" !== theme.theme) {
    let obj = { <string:2700829824>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, <string:3193070172>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986, themeName: getThemeNameForAnalytics(theme), analyticsLocations };
    trackClientThemeUpdated(obj);
    obj = {};
    obj[mode] = theme.theme;
    const result = mode(dependencyMap[13]).updateThemePreferences(obj);
    if (theme.type === mode(dependencyMap[7]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      let obj1 = { customUserThemeSettings: theme.customThemeSettings };
      const result1 = mode(dependencyMap[13]).updateSyncedClientTheme(mode, obj1);
      const obj4 = mode(dependencyMap[13]);
    } else if (theme.type === mode(dependencyMap[7]).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      obj1 = mode(dependencyMap[13]);
      const obj2 = { backgroundGradientPresetId: theme.id };
      const result2 = obj1.updateSyncedClientTheme(mode, obj2);
    } else {
      obj = mode(dependencyMap[13]);
      const result3 = obj.updateSyncedClientTheme(mode, undefined);
    }
    const obj7 = mode(dependencyMap[13]);
  }
};
export const getSyncedModeThemeIndex = function getSyncedModeThemeIndex(memo2, mode) {
  const syncedClientTheme = closure_5.getSyncedClientTheme(mode);
  mode = syncedClientTheme;
  let prop;
  if (null != syncedClientTheme) {
    prop = syncedClientTheme.customUserThemeSettings;
  }
  if (null != prop) {
    const findIndexResult = memo2.findIndex((type) => type.type === syncedClientTheme(closure_2[7]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
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
      let tmp = type.type === syncedClientTheme(closure_2[7]).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
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
  let obj = arg1(dependencyMap[12]);
  const tmp2 = obj.isThemeDark(theme) ? closure_6.DARK : closure_6.LIGHT;
  const customTheme = customTheme.getCustomTheme();
  const gradientPreset = gradientPreset.gradientPreset;
  if (null != gradientPreset) {
    const id = gradientPreset.id;
  }
  const result = importDefault(dependencyMap[11]).setShouldSyncAppearanceSettings(false);
  const obj2 = importDefault(dependencyMap[11]);
  const result1 = arg1(dependencyMap[13]).updateThemePreferences({ [tmp2]: theme });
  if (null != customTheme) {
    obj = { customUserThemeSettings: customTheme };
    const result2 = arg1(dependencyMap[13]).updateSyncedClientTheme(tmp2, obj);
    const obj7 = arg1(dependencyMap[13]);
  } else if (null != id) {
    obj = { backgroundGradientPresetId: id };
    const result3 = arg1(dependencyMap[13]).updateSyncedClientTheme(tmp2, obj);
    const obj5 = arg1(dependencyMap[13]);
  } else {
    const result4 = arg1(dependencyMap[13]).updateSyncedClientTheme(tmp2, undefined);
    const obj4 = arg1(dependencyMap[13]);
  }
  const obj3 = arg1(dependencyMap[13]);
  arg1(dependencyMap[13]).setUseSystemTheme(constants.ON);
  const obj9 = arg1(dependencyMap[13]);
  const result5 = arg1(dependencyMap[13]).setSameAsDeviceThemeEnabled(true);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  arg1(dependencyMap[13]).setUseSystemTheme(constants.OFF);
  const obj = arg1(dependencyMap[13]);
  const result = arg1(dependencyMap[13]).clearSyncedClientThemes();
};
export { trackClientThemeUpdated };
export const getUserThemeIndex = function getUserThemeIndex(userPreset, closure_1, memo1, closure_3, closure_4) {
  closure_1 = userPreset;
  if (null != userPreset) {
    const findIndexResult = memo1.findIndex((type) => type.type === type(closure_2[7]).ClientThemeType.BACKGROUND_GRADIENT_PRESET);
    const findIndexResult1 = closure_10.findIndex((id) => id.id === id.id);
    let num4 = 0;
    if (findIndexResult >= 0) {
      num4 = 0;
      if (findIndexResult1 >= 0) {
        num4 = findIndexResult + findIndexResult1;
      }
    }
    return num4;
  } else {
    if (closure_4) {
      if (tmp >= 0) {
        return memo1.findIndex((type) => type.type === type(closure_2[7]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
      }
    }
    let str = "system";
    if (!closure_1) {
      str = closure_3;
    }
    const importDefault = str;
    const findIndexResult2 = memo1.findIndex((theme) => theme.theme === str);
    let num2 = 0;
    if (findIndexResult2 >= 0) {
      num2 = findIndexResult2;
    }
    return num2;
  }
};
