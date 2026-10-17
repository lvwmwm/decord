// Module ID: 15599
// Function ID: 15600
// Name: ProfileCustomizationSetting
// Dependencies: [1087, 11065, 1128, 15600, 2]

// Module 15599 (ProfileCustomizationSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
