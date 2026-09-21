// Module ID: 14919
// Function ID: 14920
// Name: AccountSetting
// Dependencies: [1078, 11594, 1119, 11222, 14920, 2]

// Module 14919 (AccountSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import UserCircleIcon from "UserCircleIcon" /* 11222 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
