// Module ID: 14961
// Function ID: 14962
// Name: AccountSetting
// Dependencies: [1074, 11754, 1115, 11210, 14962, 2]

// Module 14961 (AccountSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import UserCircleIcon from "UserCircleIcon" /* 11210 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["ldCE/p"]);
  },
  parent: null,
  IconComponent: UserCircleIcon.UserCircleIcon,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT,
    getComponent() {
      return require("SettingsAccountScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;
