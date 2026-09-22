// Module ID: 1225
// Function ID: 1226
// Name: resolveTheme
// Dependencies: [1226, 1182, 1183, 1219, 1184, 7770, 1227, 1185, 2]
// Exports: default

// Module 1225 (resolveTheme)
import AuthenticationUtils from "AuthenticationUtils" /* 7770 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1226 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1182 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1183 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1219 */;

require = fn;
const ThemeConstants = fn(1184);
({ PROTO_THEME_MAP_MOBILE_REFRESH: metroRequire, SystemTheme: closure_7, SystemThemeState: closure_8 } = ThemeConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

export default function resolveTheme(arg0, arg1) {
  const previewTheme = CustomThemeMobileStore.getPreviewTheme();
  if (undefined !== previewTheme) {
    return previewTheme.baseTheme;
  } else {
    if (!obj6.isAuthenticated()) {
      if (arg0 !== constants.NO_PREFERENCE) {
        return tmp17(1227).resolveThemeWithCustomSettings(arg1[arg0], CustomThemeMobileStore.getCustomTheme());
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
      let customUserThemeSettings = prop;
    } else if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        customUserThemeSettings = clientThemeSettings.customUserThemeSettings;
      }
    }
    if (null != theme) {
      return tmp17(1227).resolveThemeWithCustomSettings(theme, customUserThemeSettings);
    } else {
      let theme1;
      if (appearance != null) {
        theme1 = appearance.theme;
      }
      if (theme1 == null) {
        theme1 = tmp17(1185).Theme.UNSET;
      }
      if (theme1 === tmp17(1185).Theme.UNSET) {
        if (arg0 !== constants.NO_PREFERENCE) {
          let themeWithCustomSettings = tmp17(1227).resolveThemeWithCustomSettings(arg1[arg0], customUserThemeSettings);
          const tmp17Result5 = tmp17(1227);
        }
        return themeWithCustomSettings;
      }
      themeWithCustomSettings = tmp17(1227).resolveThemeWithCustomSettings(timestampProducer[theme1], customUserThemeSettings);
      const tmp17Result6 = tmp17(1227);
    }
    obj6 = AuthenticationUtils;
  }
};
