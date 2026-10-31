// Module ID: 9823
// Function ID: 9824
// Name: useActiveTheme
// Dependencies: [1194, 5038, 1238, 1195, 504, 5197, 2]
// Exports: useIsClientThemeOrCustomThemeActive, useIsCustomThemeActive

// Module 9823 (useActiveTheme)
import get_initialized from "get initialized" /* 504 */;
import useRoutedActiveGuildThemeDefault from "useRoutedActiveGuildTheme" /* 5197 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5038 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
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

export function useIsCustomThemeActive() {
  return useActiveThemeType() === metroImportDefault.CUSTOM;
}
export function useIsClientThemeOrCustomThemeActive() {
  const tmp = useActiveThemeType();
  return tmp === metroImportDefault.CLIENT || tmp === metroImportDefault.CUSTOM;
}
export { useActiveThemeType };
