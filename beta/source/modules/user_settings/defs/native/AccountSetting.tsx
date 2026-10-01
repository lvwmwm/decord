// Module ID: 14212
// Function ID: 14213
// Name: AccountSetting
// Dependencies: [1074, 11006, 1115, 10378, 14213, 2]

// Module 14212 (AccountSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import UserCircleIcon from "UserCircleIcon" /* 10378 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
