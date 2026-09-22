// Module ID: 14868
// Function ID: 14869
// Name: ProfileCustomizationSetting
// Dependencies: [1074, 11729, 1115, 14869, 2]

// Module 14868 (ProfileCustomizationSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
