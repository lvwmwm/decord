// Module ID: 5202
// Function ID: 5203
// Name: MobileThemesUtils
// Dependencies: [1207, 4995, 5203, 1253, 1255, 4996, 1256, 4998, 4999, 1128, 2768, 558, 576, 5204, 504, 2]
// Exports: getAllMobileThemes, getCustomBackgroundGradient, isHexagonCampaignMobileTheme, isNitroGatedMobileTheme

// Module 5202 (MobileThemesUtils)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1256 */;
import _modDef2768 from "module_2768" /* 2768 */;
import HexagonCampaignPerkAvailability from "HexagonCampaignPerkAvailability" /* 4999 */;
import useCustomThemeDisplaySettings from "useCustomThemeDisplaySettings" /* 5204 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4995 */;
import SavedCustomThemeStore from "SavedCustomThemeStore" /* 5203 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1253 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1255 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4996 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let tmp;
let unpackModuleId;
const get_initialized = tmp(504);
const HexagonCampaignUtils = tmp(4998);
function getCustomThemesName() {
  const intl = intl2.intl;
  return intl.string(_modDef2768.yl1iMm);
}
({ BACKGROUND_GRADIENT_PRESETS_MOBILE: metroImportDefault, HEXAGON_GRADIENT_PRESET: metroImportAll, REFRESH_STANDARD_BACKGROUND_THEMES: c9 } = ClientThemesConstants);
({ HexagonCampaignPerk: c10, HexagonCampaignPerkAvailability: unpackModuleId } = HexagonCampaignConstants);
const MobileThemesUtils = "MobileThemesUtils";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCustomBackgroundGradient(arg0) {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = useCustomThemeDisplaySettings;
  const customThemeDisplaySettings = obj2.useCustomThemeDisplaySettings(arg0);
  let tmp5 = null;
  if (undefined !== customThemeDisplaySettings) {
    if (cResult[0] === customThemeDisplaySettings.baseTheme) {
      let tmp6;
      if (cResult[1] === customThemeDisplaySettings.customTheme) {
        tmp6 = cResult[2];
      }
      tmp5 = tmp6;
    }
    const obj4 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj3.theme, customTheme: obj3.customThemeSettings } = customThemeDisplaySettings);
    cResult[0] = customThemeDisplaySettings.baseTheme;
    cResult[1] = customThemeDisplaySettings.customTheme;
    cResult[2] = obj4;
    tmp6 = obj4;
  }
  return tmp5;
}) : (function useCustomBackgroundGradient(arg0) {
  const obj = useCustomThemeDisplaySettings;
  const customThemeDisplaySettings = obj.useCustomThemeDisplaySettings(arg0);
  let tmp4 = null;
  if (undefined !== customThemeDisplaySettings) {
    ({ baseTheme: obj2.theme, customTheme: obj2.customThemeSettings } = customThemeDisplaySettings);
    tmp4 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    const obj3 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
  }
  return tmp4;
});
let closure_14 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePerModeCustomBackgroundGradient(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      if (null == closure_0) {
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
            tmp3 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: obj2.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
            const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: obj2.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
          }
        }
        return tmp3;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function usePerModeCustomBackgroundGradient(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ThemeStore];
  return obj.useStateFromStores(items, () => {
    if (null == closure_0) {
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
          tmp3 = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: obj2.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
          const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: obj2.themePreferenceForSystemTheme(closure_0), customThemeSettings: prop };
        }
      }
      return tmp3;
    }
  });
});
let closure_15 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAllMobileThemes(arg0) {
  let closure_0;
  let first;
  let items4;
  let tmp11;
  let tmp18;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(7);
  let tmp5 = closure_14(closure_16());
  if (null != arg0) {
    tmp5 = closure_15(arg0);
  }
  const tmp2Result = require("HexagonCampaignPerkAvailability");
  const hexagonCampaignPerkAvailability = tmp2Result.useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, MobileThemesUtils);
  const tmp6 = constants;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ClientThemesBackgroundStore, ThemeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let id;
      if (null != closure_0) {
        const syncedClientTheme = ThemeStore.getSyncedClientTheme(tmp);
        let prop;
        if (syncedClientTheme != null) {
          prop = syncedClientTheme.backgroundGradientPresetId;
        }
        id = prop;
      } else {
        const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
        if (gradientPreset != null) {
          id = gradientPreset.id;
        }
      }
      return id;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  const tmp2Result4 = require("get initialized");
  const stateFromStores = tmp2Result4.useStateFromStores(first, tmp11);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === hexagonCampaignPerkAvailability) {
      let tmp13;
      if (cResult[5] === tmp5) {
        tmp13 = cResult[6];
      }
      return tmp13;
    }
  }
  if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
    const items1 = [closure_8];
    HermesBuiltin.arraySpread(items1, closure_7, 1);
    tmp18 = items1;
  } else {
    const tmp2Result5 = require("HexagonCampaignUtils");
    if (tmp2Result5.isHexagonCampaignClientThemePreset(stateFromStores)) {
      const tmp2Result6 = require("HexagonCampaignPerkAvailability");
      if (!tmp2Result6.isHexagonCampaignPerkExpiredForCurrentUser(tmp6.CLIENT_THEME)) {
        const items2 = [closure_8];
        HermesBuiltin.arraySpread(items2, closure_7, 1);
        tmp18 = items2;
      }
    }
    tmp18 = closure_7;
  }
  if (null != tmp5) {
    const items3 = [];
    const arraySpreadResult6 = HermesBuiltin.arraySpread(items3, closure_9, 0);
    items3[arraySpreadResult6] = tmp5;
    HermesBuiltin.arraySpread(items3, tmp18, arraySpreadResult6 + 1);
    items4 = items3;
  } else {
    items4 = [];
    HermesBuiltin.arraySpread(items4, tmp18, HermesBuiltin.arraySpread(items4, closure_9, 0));
  }
  cResult[3] = stateFromStores;
  cResult[4] = hexagonCampaignPerkAvailability;
  cResult[5] = tmp5;
  cResult[6] = items4;
  tmp13 = items4;
}) : (function useAllMobileThemes(arg0) {
  let closure_0;
  let items4;
  let tmp13;
  _require = arg0;
  let tmp2 = closure_14(closure_16());
  if (null != arg0) {
    tmp2 = closure_15(arg0);
  }
  const obj = require("HexagonCampaignPerkAvailability");
  const hexagonCampaignPerkAvailability = obj.useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, MobileThemesUtils);
  require("get initialized");
  const items = [ClientThemesBackgroundStore, ThemeStore];
  const tmp5 = constants;
  if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
    const items1 = [closure_8];
    HermesBuiltin.arraySpread(items1, closure_7, 1);
    tmp13 = items1;
  } else {
    const tmp3Result = require("HexagonCampaignUtils");
    if (tmp3Result.isHexagonCampaignClientThemePreset(tmp8)) {
      const tmp3Result2 = require("HexagonCampaignPerkAvailability");
      if (!tmp3Result2.isHexagonCampaignPerkExpiredForCurrentUser(tmp5.CLIENT_THEME)) {
        const items2 = [closure_8];
        HermesBuiltin.arraySpread(items2, closure_7, 1);
        tmp13 = items2;
      }
    }
    tmp13 = closure_7;
  }
  if (null != tmp2) {
    const items3 = [];
    const arraySpreadResult6 = HermesBuiltin.arraySpread(items3, closure_9, 0);
    items3[arraySpreadResult6] = tmp2;
    HermesBuiltin.arraySpread(items3, tmp13, arraySpreadResult6 + 1);
    items4 = items3;
  } else {
    items4 = [];
    HermesBuiltin.arraySpread(items4, tmp13, HermesBuiltin.arraySpread(items4, closure_9, 0));
  }
  return items4;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSavedCustomTheme() {
  let savedCustomTheme;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SavedCustomThemeStore];
    const fn = function n() {
      return savedCustomTheme.getSavedCustomTheme();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = stateFromStores;
  }
  return tmp8;
}) : (function useSavedCustomTheme() {
  let savedCustomTheme;
  const items = [SavedCustomThemeStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => savedCustomTheme.getSavedCustomTheme());
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  return tmp2;
});
let closure_16 = tmp7;
function isHexagonCampaignMobileTheme(themes) {
  let result = themes.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
  if (result) {
    const tmpResult = HexagonCampaignUtils;
    result = tmpResult.isHexagonCampaignClientThemePreset(themes.id);
  }
  return result;
}
function getCustomBackgroundGradient() {
  const customThemeDisplaySettings = CustomThemeMobileStore.getCustomThemeDisplaySettings();
  let tmp2 = null;
  if (undefined !== customThemeDisplaySettings) {
    const obj = { type: ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT, getName: getCustomThemesName, theme: null, customThemeSettings: null };
    ({ baseTheme: obj.theme, customTheme: obj.customThemeSettings } = customThemeDisplaySettings);
    tmp2 = obj;
  }
  return tmp2;
}
let result = size.fileFinishedImporting("modules/client_themes/native/MobileThemesUtils.tsx");

export { isHexagonCampaignMobileTheme };
export const isNitroGatedMobileTheme = function isNitroGatedMobileTheme(themes) {
  let tmp3 = themes.type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
  if (tmp3) {
    let result = themes.type === tmp(1256).ClientThemeType.BACKGROUND_GRADIENT_PRESET;
    if (result) {
      const tmpResult = HexagonCampaignUtils;
      result = tmpResult.isHexagonCampaignClientThemePreset(themes.id);
    }
    let tmp5 = !result;
    if (result) {
      const tmpResult2 = HexagonCampaignPerkAvailability;
      tmp5 = tmpResult2.getHexagonCampaignPerkAvailabilityForCurrentUser(constants.CLIENT_THEME, MobileThemesUtils) !== unpackModuleId.SELECTABLE;
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export { getCustomBackgroundGradient };
export const useCustomBackgroundGradient = tmp4;
export const usePerModeCustomBackgroundGradient = tmp5;
export const getAllMobileThemes = function getAllMobileThemes() {
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
};
export const useAllMobileThemes = tmp6;
export const useSavedCustomTheme = tmp7;
