// Module ID: 15445
// Function ID: 15446
// Name: SameAsDeviceThemeUtils
// Dependencies: [4610, 1186, 1189, 9502, 1232, 4642, 4639, 2]
// Exports: disableSameAsDeviceTheme, enableSameAsDeviceTheme

// Module 15445 (SameAsDeviceThemeUtils)
import ClientThemesUtils from "ClientThemesUtils" /* 1232 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4639 */;
import shared from "shared" /* 4642 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9502 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4610 */;
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
        const result2 = tmp6(4639).updateSyncedClientTheme(tmp8, obj6);
        const tmp6Result4 = tmp6(4639);
      } else if (null != tmp9) {
        const obj7 = { backgroundGradientPresetId: tmp9 };
        const result3 = tmp6(4639).updateSyncedClientTheme(tmp8, obj7);
        const tmp6Result5 = tmp6(4639);
      } else {
        const obj8 = { theme: customThemeBaseTheme };
        const result4 = tmp6(4639).updateSyncedClientTheme(tmp8, obj8);
        const tmp6Result6 = tmp6(4639);
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
