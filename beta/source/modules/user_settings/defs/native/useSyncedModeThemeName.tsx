// Module ID: 14851
// Function ID: 14852
// Name: useSyncedModeThemeName
// Dependencies: [1182, 1229, 504, 1228, 1115, 2717, 2]
// Exports: useSyncedModeThemeName

// Module 14851 (useSyncedModeThemeName)
import ClientThemesUtils from "ClientThemesUtils" /* 1228 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1229 */;
import _modDef2717 from "module_2717" /* 2717 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2;
const intl2 = tmp2(1115);
let closure_4 = ClientThemesConstants.BACKGROUND_GRADIENT_PRESETS_MAP;
const result = size.fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = function useSyncedModeThemeName(DARK) {
  _require = DARK;
  let obj = require("get initialized");
  const items = [ThemeStore];
  return obj.useStateFromStores(items, () => {
    let stringResult;
    const syncedClientTheme = ThemeStore.getSyncedClientTheme(DARK);
    const obj = ClientThemesUtils;
    const themeName = obj.getThemeName(ThemeStore.themePreferenceForSystemTheme(DARK));
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null != prop) {
      const intl = intl2.intl;
      stringResult = intl.string(_modDef2717.yl1iMm);
    } else {
      let prop1;
      if (syncedClientTheme != null) {
        prop1 = syncedClientTheme.backgroundGradientPresetId;
      }
      stringResult = themeName;
      if (null != prop1) {
        let name;
        if (closure_4[syncedClientTheme.backgroundGradientPresetId] != null) {
          const getName = tmp9.getName;
          if (getName != null) {
            name = getName();
          }
        }
        if (name == null) {
          name = themeName;
        }
        stringResult = name;
      }
    }
    return stringResult;
  });
};
