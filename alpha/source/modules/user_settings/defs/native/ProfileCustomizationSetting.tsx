// Module ID: 16096
// Function ID: 16097
// Name: ProfileCustomizationSetting
// Dependencies: [1084, 11248, 1125, 16097, 2]

// Module 16096 (ProfileCustomizationSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.LYju5J);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;
