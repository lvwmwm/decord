// Module ID: 16549
// Function ID: 16550
// Name: AppearanceThemePickerSetting
// Dependencies: [1191, 8592, 1071, 504, 11817, 1112, 16543, 16550, 2]

// Module 16549 (AppearanceThemePickerSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import AppearanceSetting from "AppearanceSetting" /* 16543 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
