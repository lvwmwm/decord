// Module ID: 1250
// Function ID: 1251
// Name: resolveTheme
// Dependencies: [1251, 1206, 1207, 1244, 1208, 7356, 1252, 1209, 2]
// Exports: default

// Module 1250 (resolveTheme)
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1252 */;
import AuthenticationUtils from "AuthenticationUtils" /* 7356 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1251 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1206 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import ThemeConstants from "ThemeConstants" /* 1208 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
({ PROTO_THEME_MAP_MOBILE_REFRESH: metroRequire, SystemTheme: metroImportDefault, SystemThemeState: metroImportAll } = ThemeConstants);
const result = size.fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

export default function resolveTheme(arg0, arg1) {
  const previewTheme = CustomThemeMobileStore.getPreviewTheme();
  const obj = CustomThemeMobileStore;
  if (undefined !== previewTheme) {
    return previewTheme.baseTheme;
  } else {
    let customUserThemeSettings;
    const useSystemTheme = UnsyncedUserSettingsStore.useSystemTheme;
    const obj6 = AuthenticationUtils;
    if (!obj6.isAuthenticated()) {
      if (arg0 !== metroImportDefault.NO_PREFERENCE) {
        const tmp17Result = ClientThemesUtils;
        return tmp17Result.resolveThemeWithCustomSettings(arg1[arg0], obj.getCustomTheme());
      }
    }
    const appearanceSettings = SelectivelySyncedUserSettingsStore.getAppearanceSettings();
    let theme;
    if (appearanceSettings != null) {
      theme = appearanceSettings.theme;
    }
    const appearance = UserSettingsProtoStore.settings.appearance;
    if (null != appearanceSettings) {
      const clientThemeSettings2 = appearanceSettings.clientThemeSettings;
      let prop;
      if (clientThemeSettings2 != null) {
        prop = clientThemeSettings2.customUserThemeSettings;
      }
      customUserThemeSettings = prop;
    } else if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        customUserThemeSettings = clientThemeSettings.customUserThemeSettings;
      }
    }
    if (null != theme) {
      const tmp17Result4 = ClientThemesUtils;
      return tmp17Result4.resolveThemeWithCustomSettings(theme, customUserThemeSettings);
    } else {
      let theme1;
      if (appearance != null) {
        theme1 = appearance.theme;
      }
      if (theme1 == null) {
        theme1 = tmp17(1209).Theme.UNSET;
      }
      if (theme1 === preloaded_user_settings.Theme.UNSET) {
        let themeWithCustomSettings;
        if (arg0 !== metroImportDefault.NO_PREFERENCE) {
          const tmp17Result5 = ClientThemesUtils;
          themeWithCustomSettings = tmp17Result5.resolveThemeWithCustomSettings(arg1[arg0], customUserThemeSettings);
        }
        return themeWithCustomSettings;
      }
      const tmp17Result6 = ClientThemesUtils;
      themeWithCustomSettings = tmp17Result6.resolveThemeWithCustomSettings(metroRequire[theme1], customUserThemeSettings);
    }
  }
};
