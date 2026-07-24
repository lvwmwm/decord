// Module ID: 14243
// Function ID: 109391
// Name: useSyncedModeThemeName
// Dependencies: [1278, 3943, 1324, 566, 3973, 1212, 2396, 2]
// Exports: useSyncedModeThemeName

// Module 14243 (useSyncedModeThemeName)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { BACKGROUND_GRADIENT_PRESETS_MAP as closure_4 } from "items1";

const require = arg1;
const result = require("useIsMobileVisualRefreshExperimentEnabled").fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = function useSyncedModeThemeName(DARK) {
  const _require = DARK;
  importDefault = importDefault(1324)("useSyncedModeThemeName");
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    const syncedClientTheme = outer1_3.getSyncedClientTheme(DARK);
    const themeName = DARK(outer1_2[4]).getThemeName(outer1_3.themePreferenceForSystemTheme(DARK), callback);
    let prop;
    if (null != syncedClientTheme) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null != prop) {
      const intl = DARK(outer1_2[5]).intl;
      let stringResult = intl.string(callback(outer1_2[6]).yl1iMm);
    } else {
      let prop1;
      if (null != syncedClientTheme) {
        prop1 = syncedClientTheme.backgroundGradientPresetId;
      }
      stringResult = themeName;
      if (null != prop1) {
        let name;
        if (null != outer1_4[syncedClientTheme.backgroundGradientPresetId]) {
          if (null != obj2.getName) {
            name = obj2.getName();
          }
        }
        stringResult = themeName;
        if (null != name) {
          stringResult = name;
        }
      }
    }
    return stringResult;
  });
};
