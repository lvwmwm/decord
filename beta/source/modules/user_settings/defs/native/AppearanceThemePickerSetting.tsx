// Module ID: 15537
// Function ID: 15538
// Name: AppearanceThemePickerSetting
// Dependencies: [1182, 8233, 1074, 504, 11725, 1115, 15531, 15538, 2]

// Module 15537 (AppearanceThemePickerSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
const SettingBuilders = fn(11725);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Ksh3ik);
  },
  parent: fn(8233).MobileUserSettings.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    const items = [ThemeStore];
    return !initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing: fn(15531).useAppearanceSettingTrailing,
  screen: {
    route: fn(1074).UserSettingsSections.APPEARANCE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceThemePickerScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default route;
