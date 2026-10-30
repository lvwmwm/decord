// Module ID: 5245
// Function ID: 5246
// Name: MobileThemesUtils
// Dependencies: [1193, 5033, 5246, 1239, 1241, 5034, 1242, 5036, 5037, 1114, 2771, 5247, 504, 2]
// Exports: getAllMobileThemes, getCustomBackgroundGradient, isHexagonCampaignMobileTheme, isNitroGatedMobileTheme, useAllMobileThemes, useCustomBackgroundGradient, usePerModeCustomBackgroundGradient, useSavedCustomTheme

// Module 5245 (MobileThemesUtils)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1242 */;
import _modDef2771 from "module_2771" /* 2771 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 5037 */;
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings" /* 5247 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import SavedCustomThemeStore from "SavedCustomThemeStore" /* 5246 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1239 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1241 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5034 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, syncedClientTheme;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let tmp;
let unpackModuleId;
const HexagonCampaignUtils = tmp(5036);
const f86953 = () => {
  if (null == closure_0) {
    return null;
  } else {
    const obj2 = syncedClientTheme;
    syncedClientTheme = syncedClientTheme.getSyncedClientTheme(tmp);
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    let tmp3 = null;
    if (null != prop) {
      tmp3 = null;
      if (0 !== prop.colors.length) {
        tmp3 = { type: closure_0(dependencyMap[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName, theme: obj2.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
        const obj = { type: closure_0(dependencyMap[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName, theme: obj2.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
      }
    }
    return tmp3;
  }
};
const f86954 = () => savedCustomTheme.getSavedCustomTheme();
function getCustomThemesName() {
  const intl = intl2.intl;
  return intl.string(_modDef2771.yl1iMm);
}
({ BACKGROUND_GRADIENT_PRESETS_MOBILE: metroImportDefault, HEXAGON_GRADIENT_PRESET: metroImportAll, REFRESH_STANDARD_BACKGROUND_THEMES: c9 } = ClientThemesConstants);
({ HexagonCampaignPerk: c10, HexagonCampaignPerkAvailability: unpackModuleId } = HexagonCampaignConstants);
const MobileThemesUtils = "MobileThemesUtils";
let result = size.fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export function isHexagonCampaignMobileTheme(themes) {
  let result = themes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
  if (result) {
    const tmpResult = HexagonCampaignUtils;
    result = tmpResult.isHexagonCampaignClientThemePreset(themes.id);
  }
  return result;
}
export function isNitroGatedMobileTheme(mobileThemes) {
  let tmp3 = mobileThemes.type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
  if (tmp3) {
    let result = mobileThemes.type === tmp(1242).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
    if (result) {
      const tmpResult = HexagonCampaignUtils;
      result = tmpResult.isHexagonCampaignClientThemePreset(mobileThemes.id);
    }
    let tmp5 = !result;
    if (result) {
      const tmpResult2 = HexagonCampaignPerkAvailability;
      tmp5 = tmpResult2.getHexagonCampaignPerkAvailabilityForCurrentUser(constants.CLIENT_THEME, MobileThemesUtils) !== unpackModuleId.SELECTABLE;
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
export function getCustomBackgroundGradient() {
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
}
export function useCustomBackgroundGradient(stateFromStores) {
  const obj = useCustomThemeDisplaySettings;
  const customThemeDisplaySettings = obj.useCustomThemeDisplaySettings(stateFromStores);
  let tmp4 = null;
  if (undefined !== customThemeDisplaySettings) {
    ({ baseTheme: obj2.theme, customTheme: obj2.customThemeSettings } = customThemeDisplaySettings);
    tmp4 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    const obj3 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
  }
  return tmp4;
}
export function usePerModeCustomBackgroundGradient(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ThemeStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f86953);
}
export function getAllMobileThemes() {
  let id;
  let items3;
  let tmp15;
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp3 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp3 = obj;
  }
  const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
  const obj2 = HexagonCampaignPerkAvailability;
  const hexagonCampaignPerkAvailabilityForCurrentUser = obj2.getHexagonCampaignPerkAvailabilityForCurrentUser(constants.CLIENT_THEME, MobileThemesUtils);
  const tmp9 = constants;
  if (gradientPreset != null) {
    id = gradientPreset.id;
  }
  if (hexagonCampaignPerkAvailabilityForCurrentUser !== unpackModuleId.HIDDEN) {
    const items = [metroImportAll];
    HermesBuiltin.arraySpread(items, metroImportDefault, 1);
    tmp15 = items;
  } else {
    const tmp7Result = HexagonCampaignUtils;
    if (tmp7Result.isHexagonCampaignClientThemePreset(id)) {
      const tmp7Result2 = HexagonCampaignPerkAvailability;
      if (!tmp7Result2.isHexagonCampaignPerkExpiredForCurrentUser(tmp9.CLIENT_THEME)) {
        const items1 = [metroImportAll];
        HermesBuiltin.arraySpread(items1, metroImportDefault, 1);
        tmp15 = items1;
      }
    }
    tmp15 = metroImportDefault;
  }
  if (null != tmp3) {
    const items2 = [];
    const arraySpreadResult6 = HermesBuiltin.arraySpread(items2, React4, 0);
    items2[arraySpreadResult6] = tmp3;
    HermesBuiltin.arraySpread(items2, tmp15, arraySpreadResult6 + 1);
    items3 = items2;
  } else {
    items3 = [];
    HermesBuiltin.arraySpread(items3, tmp15, HermesBuiltin.arraySpread(items3, React4, 0));
  }
  return items3;
}
export function useAllMobileThemes(mode) {
  let getName;
  let items6;
  let savedCustomTheme;
  let tmp18;
  _require = mode;
  let tmp3 = dependencyMap;
  let obj = require("get initialized");
  const items = [SavedCustomThemeStore];
  const stateFromStores = obj.useStateFromStores(items, f86954);
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = stateFromStores;
  }
  const tmp2Result = require("useCustomThemeDisplaySettings");
  const customThemeDisplaySettings = tmp2Result.useCustomThemeDisplaySettings(tmp5);
  let stateFromStores1 = null;
  if (undefined !== customThemeDisplaySettings) {
    let obj2 = { type: tmp2(1242).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj3.theme, customTheme: obj3.customThemeSettings } = customThemeDisplaySettings);
    stateFromStores1 = obj2;
  }
  _require = mode;
  const items1 = [ThemeStore];
  const tmp2Result6 = require("get initialized");
  const tmp9 = ThemeStore;
  if (null != mode) {
    stateFromStores1 = tmp2Result6.useStateFromStores(items1, f86953);
  }
  const tmp2Result7 = require("HexagonCampaignPerkAvailability");
  const hexagonCampaignPerkAvailability = tmp2Result7.useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, MobileThemesUtils);
  require("get initialized");
  const items2 = [ClientThemesBackgroundStore, tmp9];
  const tmp10 = constants;
  if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
    const items3 = [closure_8];
    HermesBuiltin.arraySpread(items3, closure_7, 1);
    tmp18 = items3;
  } else {
    const tmp2Result9 = require("HexagonCampaignUtils");
    if (tmp2Result9.isHexagonCampaignClientThemePreset(tmp13)) {
      const tmp2Result10 = require("HexagonCampaignPerkAvailability");
      if (!tmp2Result10.isHexagonCampaignPerkExpiredForCurrentUser(tmp10.CLIENT_THEME)) {
        const items4 = [closure_8];
        HermesBuiltin.arraySpread(items4, closure_7, 1);
        tmp18 = items4;
      }
    }
    tmp18 = closure_7;
  }
  if (null != stateFromStores1) {
    const items5 = [];
    const arraySpreadResult6 = HermesBuiltin.arraySpread(items5, closure_9, 0);
    items5[arraySpreadResult6] = stateFromStores1;
    HermesBuiltin.arraySpread(items5, tmp18, arraySpreadResult6 + 1);
    items6 = items5;
  } else {
    items6 = [];
    HermesBuiltin.arraySpread(items6, tmp18, HermesBuiltin.arraySpread(items6, closure_9, 0));
  }
  return items6;
}
export function useSavedCustomTheme() {
  const items = [SavedCustomThemeStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f86954);
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  return tmp2;
}
