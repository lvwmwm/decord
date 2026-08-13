// Module ID: 14485
// Function ID: 14486
// Name: enableSameAsDeviceTheme
// Dependencies: [4163, 1302, 1305, 8747, 1347, 1363, 4190, 2]
// Exports: disableSameAsDeviceTheme, enableSameAsDeviceTheme

// Module 14485 (enableSameAsDeviceTheme)
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import handleThemeChange from "handleThemeChange";
import SystemThemeState from "SystemThemeState";

let c5;
let closure_6;
const require = arg1;
({ SystemTheme: c5, SystemThemeState: closure_6 } = SystemThemeState);
let result = require("SystemThemeState").fileFinishedImporting("modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx");

export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme(arg0) {
  let obj = importDefault(8747);
  const result = obj.setShouldSyncAppearanceSettings(false);
  let obj1 = syncedClientTheme;
  if (null == syncedClientTheme.getSyncedClientTheme(constants.LIGHT)) {
    if (null == obj1.getSyncedClientTheme(tmp3.DARK)) {
      const theme = obj1.theme;
      let customThemeBaseTheme = theme;
      if (null != arg0) {
        let obj2 = require(1347) /* getThemeForColor */;
        customThemeBaseTheme = obj2.getCustomThemeBaseTheme(theme);
      }
      const tmp8 = require(1363) /* AccessibilityAnnouncer */.isThemeDark(customThemeBaseTheme) ? tmp3.DARK : tmp3.LIGHT;
      if (!isSyncedModeThemesEnabled.isPreview) {
        const gradientPreset = isSyncedModeThemesEnabled.gradientPreset;
        let id;
        if (gradientPreset != null) {
          id = gradientPreset.id;
        }
      }
      let tmp6Result = tmp6(4190);
      obj = {};
      obj[tmp8] = customThemeBaseTheme;
      const result1 = tmp6Result.updateThemePreferences(obj);
      if (null != arg0) {
        tmp6Result = tmp6(4190);
        obj = { customUserThemeSettings: null };
        obj[0] = arg0;
        const result2 = tmp6Result.updateSyncedClientTheme(tmp8, obj);
      } else if (null != tmp9) {
        obj1 = { backgroundGradientPresetId: null };
        obj1[0] = tmp9;
        const result3 = tmp6(4190).updateSyncedClientTheme(tmp8, obj1);
        const tmp6Result1 = tmp6(4190);
      } else {
        obj2 = { theme: null };
        obj2[0] = customThemeBaseTheme;
        const result4 = tmp6(4190).updateSyncedClientTheme(tmp8, obj2);
        const tmp6Result2 = tmp6(4190);
      }
      const obj4 = require(1363) /* AccessibilityAnnouncer */;
    }
  }
  const result5 = require(4190) /* setSystemTheme */.setSameAsDeviceThemeEnabled(true);
  const obj13 = require(4190) /* setSystemTheme */;
  require(4190) /* setSystemTheme */.setUseSystemTheme(constants2.ON);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  require(4190) /* setSystemTheme */.setUseSystemTheme(constants2.OFF);
  const obj = require(4190) /* setSystemTheme */;
  const result = require(4190) /* setSystemTheme */.setSameAsDeviceThemeEnabled(false);
};
