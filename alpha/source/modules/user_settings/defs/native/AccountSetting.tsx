// Module ID: 14188
// Function ID: 14189
// Name: AccountSetting
// Dependencies: [1074, 10993, 1115, 10367, 14189, 2]

// Module 14188 (AccountSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import UserCircleIcon from "UserCircleIcon" /* 10367 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
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
