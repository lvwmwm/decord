// Module ID: 16770
// Function ID: 16771
// Name: LightModeThemeSetting
// Dependencies: [1192, 1195, 8624, 1072, 504, 11897, 1113, 16771, 16772, 2]

// Module 16770 (LightModeThemeSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
import SettingsConstants from "SettingsConstants" /* 8624 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 16771 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
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
