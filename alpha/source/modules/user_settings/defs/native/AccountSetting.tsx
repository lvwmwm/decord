// Module ID: 15610
// Function ID: 15611
// Name: AccountSetting
// Dependencies: [1085, 10991, 1126, 10519, 15611, 2]

// Module 15610 (AccountSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import UserCircleIcon from "UserCircleIcon" /* 10519 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
