// Module ID: 17227
// Function ID: 17228
// Name: useSyncedModeThemeName
// Dependencies: [1193, 1241, 504, 1240, 1114, 2771, 2]
// Exports: useSyncedModeThemeName

// Module 17227 (useSyncedModeThemeName)
import ClientThemesUtils from "ClientThemesUtils" /* 1240 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1241 */;
import _modDef2771 from "module_2771" /* 2771 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2;
const intl2 = tmp2(1114);
let closure_4 = ClientThemesConstants.BACKGROUND_GRADIENT_PRESETS_MAP;
const result = size.fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export function useSyncedModeThemeName(DARK) {
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
      stringResult = intl.string(_modDef2771.yl1iMm);
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
}
