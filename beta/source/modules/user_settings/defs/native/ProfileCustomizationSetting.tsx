// Module ID: 14889
// Function ID: 14890
// Name: ProfileCustomizationSetting
// Dependencies: [1078, 11630, 1119, 14890, 2]

// Module 14889 (ProfileCustomizationSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
