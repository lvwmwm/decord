// Module ID: 1230
// Function ID: 1231
// Name: resolveTheme
// Dependencies: [1231, 1187, 1188, 1224, 1189, 7909, 1232, 1190, 2]
// Exports: default

// Module 1230 (resolveTheme)
import AuthenticationUtils from "AuthenticationUtils" /* 7909 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1231 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1187 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1188 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;

require = fn;
const ThemeConstants = fn(1189);
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
        return tmp17(1232).resolveThemeWithCustomSettings(arg1[arg0], CustomThemeMobileStore.getCustomTheme());
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
      return tmp17(1232).resolveThemeWithCustomSettings(theme, customUserThemeSettings);
    } else {
      let theme1;
      if (appearance != null) {
        theme1 = appearance.theme;
      }
      if (theme1 == null) {
        theme1 = tmp17(1190).Theme.UNSET;
      }
      if (theme1 === tmp17(1190).Theme.UNSET) {
        if (arg0 !== constants.NO_PREFERENCE) {
          let themeWithCustomSettings = tmp17(1232).resolveThemeWithCustomSettings(arg1[arg0], customUserThemeSettings);
          const tmp17Result5 = tmp17(1232);
        }
        return themeWithCustomSettings;
      }
      themeWithCustomSettings = tmp17(1232).resolveThemeWithCustomSettings(timestampProducer[theme1], customUserThemeSettings);
      const tmp17Result6 = tmp17(1232);
    }
    obj6 = AuthenticationUtils;
  }
};
