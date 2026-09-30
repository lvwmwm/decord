// Module ID: 14344
// Function ID: 14345
// Name: ProfileCustomizationSetting
// Dependencies: [1074, 11211, 1115, 14345, 2]

// Module 14344 (ProfileCustomizationSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.LYju5J);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;
