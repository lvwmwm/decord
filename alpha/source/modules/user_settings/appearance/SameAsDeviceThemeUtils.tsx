// Module ID: 16888
// Function ID: 16889
// Name: SameAsDeviceThemeUtils
// Dependencies: [5029, 1204, 1207, 5906, 1251, 5012, 5032, 5070, 2]
// Exports: disableSameAsDeviceTheme, enableSameAsDeviceTheme

// Module 16888 (SameAsDeviceThemeUtils)
import ClientThemesUtils from "ClientThemesUtils" /* 1251 */;
import shared from "shared" /* 5012 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5032 */;
import ThemeActionCreators from "ThemeActionCreators" /* 5070 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5906 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5029 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import ThemeConstants from "ThemeConstants" /* 1207 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ SystemTheme: hasOwnProperty, SystemThemeState: metroRequire } = ThemeConstants);
let result = size.fileFinishedImporting("modules/user_settings/appearance/SameAsDeviceThemeUtils.tsx");

export function enableSameAsDeviceTheme(customUserThemeSettings) {
  const obj = UserSettingsActionCreatorsDefault;
  const result = obj.setShouldSyncAppearanceSettings(false);
  if (null == ThemeStore.getSyncedClientTheme(hasOwnProperty.LIGHT)) {
    if (null == ThemeStore.getSyncedClientTheme(hasOwnProperty.DARK)) {
      const theme = obj2.theme;
      let customThemeBaseTheme = theme;
      if (null != customUserThemeSettings) {
        const obj3 = ClientThemesUtils;
        customThemeBaseTheme = obj3.getCustomThemeBaseTheme(theme);
      }
      const obj4 = shared;
      const tmp8 = obj4.isThemeDark(customThemeBaseTheme) ? hasOwnProperty.DARK : hasOwnProperty.LIGHT;
      const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
      const tmp9 = ClientThemesBackgroundStore;
      if (gradientPreset != null) {
        const id = gradientPreset.id;
      }
      if (tmp9.isPreview) {
        HexagonCampaignUtils;
      }
      const obj5 = {};
      obj5[tmp8] = customThemeBaseTheme;
      const tmp6Result5 = ThemeActionCreators;
      const result1 = tmp6Result5.updateThemePreferences(obj5);
      if (null != customUserThemeSettings) {
        const obj6 = { customUserThemeSettings };
        const tmp6Result6 = ThemeActionCreators;
        const result2 = tmp6Result6.updateSyncedClientTheme(tmp8, obj6);
      } else if (null != tmp10) {
        const obj7 = { backgroundGradientPresetId: tmp10 };
        const tmp6Result7 = ThemeActionCreators;
        const result3 = tmp6Result7.updateSyncedClientTheme(tmp8, obj7);
      } else {
        const obj8 = { theme: customThemeBaseTheme };
        const tmp6Result8 = ThemeActionCreators;
        const result4 = tmp6Result8.updateSyncedClientTheme(tmp8, obj8);
      }
    }
  }
  const obj14 = ThemeActionCreators;
  const result5 = obj14.setSameAsDeviceThemeEnabled(true);
  const obj15 = ThemeActionCreators;
  obj15.setUseSystemTheme(metroRequire.ON);
}
export function disableSameAsDeviceTheme() {
  const obj = ThemeActionCreators;
  obj.setUseSystemTheme(metroRequire.OFF);
  const obj2 = ThemeActionCreators;
  const result = obj2.setSameAsDeviceThemeEnabled(false);
}
