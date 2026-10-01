// Module ID: 14853
// Function ID: 14854
// Name: DarkModeThemeSetting
// Dependencies: [1182, 1185, 7417, 1074, 504, 11006, 1115, 14851, 14854, 2]

// Module 14853 (DarkModeThemeSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import ThemeConstants from "ThemeConstants" /* 1185 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 14851 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const SystemTheme = ThemeConstants.SystemTheme;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["EgvHH/"]);
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
    return obj.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: {
    route: UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceDarkModeThemePickerScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default route;
