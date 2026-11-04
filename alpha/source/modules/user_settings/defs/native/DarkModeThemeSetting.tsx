// Module ID: 17545
// Function ID: 17546
// Name: DarkModeThemeSetting
// Dependencies: [1192, 1195, 8573, 1072, 504, 11729, 1113, 17543, 17546, 2]

// Module 17545 (DarkModeThemeSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 17543 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
