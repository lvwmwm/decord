// Module ID: 14851
// Function ID: 14852
// Name: ProfileCustomizationSetting
// Dependencies: [1078, 11594, 1119, 14852, 2]

// Module 14851 (ProfileCustomizationSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
