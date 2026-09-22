// Module ID: 15351
// Function ID: 15352
// Name: AppearanceThemePickerSetting
// Dependencies: [1181, 8079, 1074, 504, 11605, 1114, 15345, 15352, 2]

// Module 15351 (AppearanceThemePickerSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import ThemeStore from "ThemeStore" /* 1181 */;

require = fn;
const SettingBuilders = fn(11605);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Ksh3ik);
  },
  parent: fn(8079).MobileUserSettings.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    const items = [ThemeStore];
    return !initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing: fn(15345).useAppearanceSettingTrailing,
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
