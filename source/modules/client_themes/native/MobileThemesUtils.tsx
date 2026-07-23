// Module ID: 4063
// Function ID: 33838
// Name: getCustomThemesName
// Dependencies: [1278, 4064, 1322, 3943, 1212, 2396, 3944, 4065, 566, 1324, 2]
// Exports: getAllMobileThemes, useAllMobileThemes

// Module 4063 (getCustomThemesName)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import items1 from "items1";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function getCustomThemesName() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(importDefault(2396).yl1iMm);
}
function getCustomBackgroundGradient() {
  customThemeDisplaySettings = customThemeDisplaySettings.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: require(3944) /* ClientThemeType */.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
}
function useCustomBackgroundGradient(base_theme) {
  let obj = require(4065) /* useCustomThemeDisplaySettings */;
  const customThemeDisplaySettings = obj.useCustomThemeDisplaySettings(base_theme);
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    obj = { type: require(3944) /* ClientThemeType */.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName };
    ({ baseTheme: obj2.theme, customTheme: obj2.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
}
function usePerModeCustomBackgroundGradient(mode) {
  const _require = mode;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    if (null == mode) {
      return null;
    } else {
      const syncedClientTheme = outer1_3.getSyncedClientTheme(mode);
      let prop;
      if (null != syncedClientTheme) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      let tmp2 = null;
      if (null != prop) {
        tmp2 = null;
        if (0 !== prop.colors.length) {
          const obj = { type: mode(outer1_2[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: outer1_9, theme: outer1_3.themePreferenceForSystemTheme(mode), customThemeSettings: prop };
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
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.getSavedCustomTheme());
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  return tmp2;
}
({ BACKGROUND_GRADIENT_PRESETS_MOBILE: closure_6, LEGACY_STANDARD_BACKGROUND_THEMES: closure_7, REFRESH_STANDARD_BACKGROUND_THEMES: closure_8 } = items1);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export { getCustomBackgroundGradient };
export { useCustomBackgroundGradient };
export { usePerModeCustomBackgroundGradient };
export const getAllMobileThemes = function getAllMobileThemes() {
  const tmp = getCustomBackgroundGradient();
  return getMobileThemesArrayWithMaybeCustomTheme(tmp, require(1324) /* useIsMobileVisualRefreshExperimentEnabled */.isMobileVisualRefreshEnabled("MobileThemesUtils"));
};
export const useAllMobileThemes = function useAllMobileThemes(mode) {
  let tmp = useCustomBackgroundGradient(useSavedCustomTheme());
  if (null != mode) {
    tmp = usePerModeCustomBackgroundGradient(mode);
  }
  return getMobileThemesArrayWithMaybeCustomTheme(tmp, importDefault(1324)("MobileThemesUtils"));
};
export { useSavedCustomTheme };
