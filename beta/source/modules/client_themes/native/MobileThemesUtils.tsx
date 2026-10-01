// Module ID: 4764
// Function ID: 4765
// Name: MobileThemesUtils
// Dependencies: [1182, 4765, 1227, 1229, 1115, 2717, 1230, 4766, 504, 2]
// Exports: getAllMobileThemes, getCustomBackgroundGradient, useAllMobileThemes, useCustomBackgroundGradient, usePerModeCustomBackgroundGradient, useSavedCustomTheme

// Module 4764 (MobileThemesUtils)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1115 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1230 */;
import _modDef2717 from "module_2717" /* 2717 */;
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings" /* 4766 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import SavedCustomThemeStore from "SavedCustomThemeStore" /* 4765 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1227 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1229 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
const f79308 = () => {
  if (null == mode) {
    return null;
  } else {
    const syncedClientTheme = ThemeStore.getSyncedClientTheme(tmp);
    let prop;
    const obj2 = ThemeStore;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    let tmp3 = null;
    if (null != prop) {
      tmp3 = null;
      if (0 !== prop.colors.length) {
        tmp3 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: obj2.themePreferenceForSystemTheme(mode), customThemeSettings: prop };
        const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: obj2.themePreferenceForSystemTheme(mode), customThemeSettings: prop };
      }
    }
    return tmp3;
  }
};
const f79309 = () => savedCustomTheme.getSavedCustomTheme();
function getCustomThemesName() {
  const intl = intl2.intl;
  return intl.string(_modDef2717.yl1iMm);
}
({ BACKGROUND_GRADIENT_PRESETS_MOBILE: metroRequire, REFRESH_STANDARD_BACKGROUND_THEMES: metroImportDefault } = ClientThemesConstants);
const result = size.fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export const getCustomBackgroundGradient = function getCustomBackgroundGradient() {
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
};
export const useCustomBackgroundGradient = function useCustomBackgroundGradient(stateFromStores) {
  const obj = useCustomThemeDisplaySettings;
  const customThemeDisplaySettings = obj.useCustomThemeDisplaySettings(stateFromStores);
  let tmp4 = null;
  if (undefined !== customThemeDisplaySettings) {
    ({ baseTheme: obj2.theme, customTheme: obj2.customThemeSettings } = customThemeDisplaySettings);
    tmp4 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    const obj3 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
  }
  return tmp4;
};
export const usePerModeCustomBackgroundGradient = function usePerModeCustomBackgroundGradient(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ThemeStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f79308);
};
export const getAllMobileThemes = function getAllMobileThemes() {
  let items1;
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp3 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp3 = obj;
  }
  if (null != tmp3) {
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, metroImportDefault, 0);
    items[arraySpreadResult] = tmp3;
    HermesBuiltin.arraySpread(items, metroRequire, arraySpreadResult + 1);
    items1 = items;
  } else {
    items1 = [];
    HermesBuiltin.arraySpread(items1, metroRequire, HermesBuiltin.arraySpread(items1, metroImportDefault, 0));
  }
  return items1;
};
export const useAllMobileThemes = function useAllMobileThemes(mode) {
  let items3;
  let savedCustomTheme;
  let tmp3 = dependencyMap;
  let obj = require("get initialized");
  const items = [SavedCustomThemeStore];
  const stateFromStores = obj.useStateFromStores(items, f79309);
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = stateFromStores;
  }
  const tmp2Result = require("useCustomThemeDisplaySettings");
  const customThemeDisplaySettings = tmp2Result.useCustomThemeDisplaySettings(tmp5);
  let stateFromStores1 = null;
  if (undefined !== customThemeDisplaySettings) {
    let obj2 = { type: require("ClientThemesTypes").ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj3.theme, customTheme: obj3.customThemeSettings } = customThemeDisplaySettings);
    stateFromStores1 = obj2;
  }
  _require = mode;
  const items1 = [ThemeStore];
  const tmp2Result2 = require("get initialized");
  if (null != mode) {
    stateFromStores1 = tmp2Result2.useStateFromStores(items1, f79308);
  }
  if (null != stateFromStores1) {
    const items2 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items2, closure_7, 0);
    items2[arraySpreadResult] = stateFromStores1;
    HermesBuiltin.arraySpread(items2, closure_6, arraySpreadResult + 1);
    items3 = items2;
  } else {
    items3 = [];
    HermesBuiltin.arraySpread(items3, closure_6, HermesBuiltin.arraySpread(items3, closure_7, 0));
  }
  return items3;
};
export const useSavedCustomTheme = function useSavedCustomTheme() {
  const items = [SavedCustomThemeStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f79309);
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  return tmp2;
};
