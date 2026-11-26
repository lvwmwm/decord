// Module ID: 15988
// Function ID: 15989
// Name: AccountSetting
// Dependencies: [1071, 11942, 1112, 13056, 15989, 2]

// Module 15988 (AccountSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import UserCircleIcon from "UserCircleIcon" /* 13056 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["ldCE/p"]);
  },
  parent: null,
  IconComponent: UserCircleIcon.UserCircleIcon,
  screen: {
    route: UserSettingsSections.ACCOUNT,
    getComponent() {
      return require("SettingsAccountScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;
