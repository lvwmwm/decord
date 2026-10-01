// Module ID: 7299
// Function ID: 7300
// Name: useActiveTheme
// Dependencies: [1184, 4653, 1227, 1185, 504, 4691, 2]
// Exports: useIsClientThemeOrCustomThemeActive, useIsCustomThemeActive

// Module 7299 (useActiveTheme)
import get_initialized from "get initialized" /* 504 */;
import useRoutedActiveGuildThemeDefault from "useRoutedActiveGuildTheme" /* 4691 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4653 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1227 */;
import ThemeConstants from "ThemeConstants" /* 1185 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function useActiveThemeType() {
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
}
({ SystemThemeState: metroRequire, ActiveThemeType: metroImportDefault } = ThemeConstants);
const result = size.fileFinishedImporting("modules/client_themes/native/useActiveTheme.tsx");

export const useIsCustomThemeActive = function useIsCustomThemeActive() {
  return useActiveThemeType() === metroImportDefault.CUSTOM;
};
export const useIsClientThemeOrCustomThemeActive = function useIsClientThemeOrCustomThemeActive() {
  const tmp = useActiveThemeType();
  return tmp === metroImportDefault.CLIENT || tmp === metroImportDefault.CUSTOM;
};
export { useActiveThemeType };
