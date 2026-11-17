// Module ID: 17929
// Function ID: 17930
// Name: AppearanceThemePickerSetting
// Dependencies: [1192, 9213, 1072, 504, 12612, 1113, 17923, 17930, 2]

// Module 17929 (AppearanceThemePickerSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import AppearanceSetting from "AppearanceSetting" /* 17923 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Ksh3ik);
  },
  parent: MobileUserSettings.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    let sameAsDeviceThemeEnabled;
    const items = [ThemeStore];
    const obj = get_initialized;
    return !obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing: AppearanceSetting.useAppearanceSettingTrailing,
  screen: {
    route: UserSettingsSections.APPEARANCE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceThemePickerScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default route;
