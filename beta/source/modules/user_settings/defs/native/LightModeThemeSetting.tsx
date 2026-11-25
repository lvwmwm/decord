// Module ID: 16718
// Function ID: 16719
// Name: LightModeThemeSetting
// Dependencies: [1191, 1194, 8712, 1071, 504, 11942, 1112, 16719, 16720, 2]

// Module 16718 (LightModeThemeSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import ThemeConstants from "ThemeConstants" /* 1194 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 16719 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const SystemTheme = ThemeConstants.SystemTheme;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.NoFvjZ);
  },
  parent: MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    let sameAsDeviceThemeEnabled;
    const items = [ThemeStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    const obj = useSyncedModeThemeName;
    return obj.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: {
    route: UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceLightModeThemePickerScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default route;
