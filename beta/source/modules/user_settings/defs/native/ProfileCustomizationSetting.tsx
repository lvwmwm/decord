// Module ID: 14893
// Function ID: 14894
// Name: ProfileCustomizationSetting
// Dependencies: [1074, 11754, 1115, 14894, 2]

// Module 14893 (ProfileCustomizationSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
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
