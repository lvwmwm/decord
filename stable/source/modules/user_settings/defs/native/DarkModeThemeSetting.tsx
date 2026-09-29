// Module ID: 15581
// Function ID: 15582
// Name: DarkModeThemeSetting
// Dependencies: [1182, 1185, 8265, 1074, 504, 11754, 1115, 15579, 15582, 2]

// Module 15581 (DarkModeThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import useSyncedModeThemeName from "useSyncedModeThemeName" /* 15579 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
const SystemTheme = fn(1185).SystemTheme;
const SettingBuilders = fn(11754);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["EgvHH/"]);
  },
  parent: fn(8265).MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    const items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: {
    route: fn(1074).UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceDarkModeThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default route;
