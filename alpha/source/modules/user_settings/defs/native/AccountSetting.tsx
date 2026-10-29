// Module ID: 16473
// Function ID: 16474
// Name: AccountSetting
// Dependencies: [1084, 11302, 1125, 10762, 16474, 2]

// Module 16473 (AccountSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import UserCircleIcon from "UserCircleIcon" /* 10762 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
