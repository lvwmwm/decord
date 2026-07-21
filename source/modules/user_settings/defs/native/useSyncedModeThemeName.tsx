// Module ID: 14072
// Function ID: 106872
// Name: useSyncedModeThemeName
// Dependencies: [0, 0, 0, 0, 4294967295, 0, 0, 0]
// Exports: useSyncedModeThemeName

// Module 14072 (useSyncedModeThemeName)
import closure_3 from "result";
import { BACKGROUND_GRADIENT_PRESETS_MAP as closure_4 } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = function useSyncedModeThemeName(DARK) {
  const arg1 = DARK;
  const importDefault = importDefault(dependencyMap[2])("useSyncedModeThemeName");
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const syncedClientTheme = closure_3.getSyncedClientTheme(arg0);
    const themeName = arg0(closure_2[4]).getThemeName(closure_3.themePreferenceForSystemTheme(arg0), callback);
    let prop;
    if (null != syncedClientTheme) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null != prop) {
      const intl = arg0(closure_2[5]).intl;
      let stringResult = intl.string(callback(closure_2[6]).yl1iMm);
    } else {
      let prop1;
      if (null != syncedClientTheme) {
        prop1 = syncedClientTheme.backgroundGradientPresetId;
      }
      stringResult = themeName;
      if (null != prop1) {
        let name;
        if (null != closure_4[syncedClientTheme.backgroundGradientPresetId]) {
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
