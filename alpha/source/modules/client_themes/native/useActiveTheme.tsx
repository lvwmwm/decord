// Module ID: 9243
// Function ID: 9244
// Name: useActiveTheme
// Dependencies: [1207, 4897, 1250, 1208, 558, 576, 504, 4935, 2]
// Exports: useIsCustomThemeActive

// Module 9243 (useActiveTheme)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import useRoutedActiveGuildThemeDefault from "useRoutedActiveGuildTheme" /* 4935 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4897 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1250 */;
import ThemeConstants from "ThemeConstants" /* 1208 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
({ SystemThemeState: metroRequire, ActiveThemeType: metroImportDefault } = ThemeConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsClientThemeOrCustomThemeActive() {
  const tmp = closure_8();
  return tmp === metroImportDefault.CLIENT || tmp === metroImportDefault.CUSTOM;
}) : (function useIsClientThemeOrCustomThemeActive() {
  const tmp = closure_8();
  return tmp === metroImportDefault.CLIENT || tmp === metroImportDefault.CUSTOM;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveThemeType() {
  let DEFAULT;
  let gradientPreset;
  let tmp13;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let useSystemTheme;
  const obj = react;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CustomThemeMobileStore];
    const fn = function c() {
      return CustomThemeMobileStore.hasCustomTheme();
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
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ClientThemesBackgroundStore];
    const fn2 = function h() {
      return null != gradientPreset.gradientPreset;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = get_initialized;
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  const tmp12 = useRoutedActiveGuildThemeDefault();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UnsyncedUserSettingsStore];
    const fn3 = function p() {
      return useSystemTheme.useSystemTheme;
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    tmp14 = fn3;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  let type;
  const tmpResult4 = get_initialized;
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp14);
  const ON = metroRequire.ON;
  if (tmp12 != null) {
    type = tmp12.type;
  }
  if ("custom" === type) {
    DEFAULT = metroImportDefault.CUSTOM;
  } else {
    let type1;
    if (tmp12 != null) {
      type1 = tmp12.type;
    }
    if ("preset" === type1) {
      DEFAULT = metroImportDefault.CLIENT;
    } else if (stateFromStores) {
      DEFAULT = metroImportDefault.CUSTOM;
    } else if (stateFromStores1) {
      DEFAULT = metroImportDefault.CLIENT;
    } else if (stateFromStores2 === ON) {
      DEFAULT = metroImportDefault.SYSTEM;
    } else {
      DEFAULT = metroImportDefault.DEFAULT;
    }
  }
  return DEFAULT;
}) : (function useActiveThemeType() {
  let DEFAULT;
  let gradientPreset;
  let useSystemTheme;
  const items = [CustomThemeMobileStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => CustomThemeMobileStore.hasCustomTheme());
  const items1 = [ClientThemesBackgroundStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => null != gradientPreset.gradientPreset);
  const tmp3 = useRoutedActiveGuildThemeDefault();
  const items2 = [UnsyncedUserSettingsStore];
  let type;
  const obj3 = get_initialized;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => useSystemTheme.useSystemTheme);
  const ON = metroRequire.ON;
  if (tmp3 != null) {
    type = tmp3.type;
  }
  if ("custom" === type) {
    DEFAULT = metroImportDefault.CUSTOM;
  } else {
    let type1;
    if (tmp3 != null) {
      type1 = tmp3.type;
    }
    if ("preset" === type1) {
      DEFAULT = metroImportDefault.CLIENT;
    } else if (stateFromStores) {
      DEFAULT = metroImportDefault.CUSTOM;
    } else if (stateFromStores1) {
      DEFAULT = metroImportDefault.CLIENT;
    } else if (stateFromStores2 === ON) {
      DEFAULT = metroImportDefault.SYSTEM;
    } else {
      DEFAULT = metroImportDefault.DEFAULT;
    }
  }
  return DEFAULT;
});
let closure_8 = tmp5;
function useIsCustomThemeActive() {
  return closure_8() === metroImportDefault.CUSTOM;
}
const result1 = size.fileFinishedImporting("modules/client_themes/native/useActiveTheme.tsx");

export { useIsCustomThemeActive };
export const useIsClientThemeOrCustomThemeActive = tmp4;
export const useActiveThemeType = tmp5;
