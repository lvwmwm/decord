// Module ID: 14652
// Function ID: 14653
// Name: ProfileCustomizationSetting
// Dependencies: [1085, 11262, 1126, 14653, 2]

// Module 14652 (ProfileCustomizationSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
