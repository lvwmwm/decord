// Module ID: 15435
// Function ID: 15436
// Name: SameAsDeviceThemeUtils
// Dependencies: [4578, 1186, 1189, 9470, 1232, 4610, 4607, 2]
// Exports: disableSameAsDeviceTheme, enableSameAsDeviceTheme

// Module 15435 (SameAsDeviceThemeUtils)
import ClientThemesUtils from "ClientThemesUtils" /* 1232 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4607 */;
import shared from "shared" /* 4610 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9470 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4578 */;
import ThemeStore from "ThemeStore" /* 1186 */;

require = fn;
const ThemeConstants = fn(1189);
({ SystemTheme: hasOwnProperty, SystemThemeState: metroRequire } = ThemeConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx");

export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme(customUserThemeSettings) {
  const result = UserSettingsActionCreatorsDefault.setShouldSyncAppearanceSettings(false);
  if (null == ThemeStore.getSyncedClientTheme(constants.LIGHT)) {
    if (null == obj2.getSyncedClientTheme(tmp3.DARK)) {
      const theme = obj2.theme;
      let customThemeBaseTheme = theme;
      if (null != customUserThemeSettings) {
        customThemeBaseTheme = ClientThemesUtils.getCustomThemeBaseTheme(theme);
      }
      const tmp8 = shared.isThemeDark(customThemeBaseTheme) ? tmp3.DARK : tmp3.LIGHT;
      if (!ClientThemesBackgroundStore.isPreview) {
        const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
        let id;
        if (gradientPreset != null) {
          id = gradientPreset.id;
        }
      }
      const obj5 = {};
      obj5[tmp8] = customThemeBaseTheme;
      const result1 = ThemeActionCreators.updateThemePreferences(obj5);
      if (null != customUserThemeSettings) {
        const obj6 = { customUserThemeSettings };
        const result2 = tmp6(4607).updateSyncedClientTheme(tmp8, obj6);
        const tmp6Result4 = tmp6(4607);
      } else if (null != tmp9) {
        const obj7 = { backgroundGradientPresetId: tmp9 };
        const result3 = tmp6(4607).updateSyncedClientTheme(tmp8, obj7);
        const tmp6Result5 = tmp6(4607);
      } else {
        const obj8 = { theme: customThemeBaseTheme };
        const result4 = tmp6(4607).updateSyncedClientTheme(tmp8, obj8);
        const tmp6Result6 = tmp6(4607);
      }
      const tmp6Result = ThemeActionCreators;
    }
  }
  const result5 = ThemeActionCreators.setSameAsDeviceThemeEnabled(true);
  ThemeActionCreators.setUseSystemTheme(constants2.ON);
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  ThemeActionCreators.setUseSystemTheme(constants2.OFF);
  const result = ThemeActionCreators.setSameAsDeviceThemeEnabled(false);
};
