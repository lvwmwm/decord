// Module ID: 4061
// Function ID: 33829
// Name: getCustomThemesName
// Dependencies: []
// Exports: getAllMobileThemes, useAllMobileThemes

// Module 4061 (getCustomThemesName)
function getCustomThemesName() {
  const intl = arg1(dependencyMap[4]).intl;
  return intl.string(importDefault(dependencyMap[5]).yl1iMm);
}
function getCustomBackgroundGradient() {
  const customThemeDisplaySettings = customThemeDisplaySettings.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: arg1(dependencyMap[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
}
function useCustomBackgroundGradient(base_theme) {
  let obj = arg1(dependencyMap[7]);
  const customThemeDisplaySettings = obj.useCustomThemeDisplaySettings(base_theme);
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    obj = { type: arg1(dependencyMap[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName };
    ({ baseTheme: obj2.theme, customTheme: obj2.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
}
function usePerModeCustomBackgroundGradient(mode) {
  const arg1 = mode;
  const items = [closure_3];
  return arg1(dependencyMap[8]).useStateFromStores(items, () => {
    if (null == arg0) {
      return null;
    } else {
      const syncedClientTheme = closure_3.getSyncedClientTheme(arg0);
      let prop;
      if (null != syncedClientTheme) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      let tmp2 = null;
      if (null != prop) {
        tmp2 = null;
        if (0 !== prop.colors.length) {
          const obj = { type: arg0(closure_2[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: closure_9, theme: closure_3.themePreferenceForSystemTheme(arg0), customThemeSettings: prop };
          tmp2 = obj;
        }
      }
      return tmp2;
    }
  });
}
function getMobileThemesArrayWithMaybeCustomTheme(arg0, arg1) {
  const tmp = arg1 ? closure_8 : closure_7;
  if (null != arg0) {
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(tmp, 0);
    items[arraySpreadResult] = arg0;
    arraySpreadResult = HermesBuiltin.arraySpread(closure_6, arraySpreadResult + 1);
    let items1 = items;
  } else {
    items1 = [];
    HermesBuiltin.arraySpread(closure_6, HermesBuiltin.arraySpread(tmp, 0));
  }
  return items1;
}
function useSavedCustomTheme() {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ BACKGROUND_GRADIENT_PRESETS_MOBILE: closure_6, LEGACY_STANDARD_BACKGROUND_THEMES: closure_7, REFRESH_STANDARD_BACKGROUND_THEMES: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export { getCustomBackgroundGradient };
export { useCustomBackgroundGradient };
export { usePerModeCustomBackgroundGradient };
export const getAllMobileThemes = function getAllMobileThemes() {
  const tmp = getCustomBackgroundGradient();
  return getMobileThemesArrayWithMaybeCustomTheme(tmp, arg1(dependencyMap[9]).isMobileVisualRefreshEnabled("MobileThemesUtils"));
};
export const useAllMobileThemes = function useAllMobileThemes(mode) {
  let tmp = useCustomBackgroundGradient(useSavedCustomTheme());
  if (null != mode) {
    tmp = usePerModeCustomBackgroundGradient(mode);
  }
  return getMobileThemesArrayWithMaybeCustomTheme(tmp, importDefault(dependencyMap[9])("MobileThemesUtils"));
};
export { useSavedCustomTheme };
