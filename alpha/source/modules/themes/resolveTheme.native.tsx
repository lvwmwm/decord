// Module ID: 1237
// Function ID: 1238
// Name: resolveTheme
// Dependencies: [1238, 1193, 1194, 1231, 1195, 7810, 1239, 1196, 2]
// Exports: default

// Module 1237 (resolveTheme)
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import AuthenticationUtils from "AuthenticationUtils" /* 7810 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
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
        theme1 = tmp17(1196).Theme.UNSET;
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
