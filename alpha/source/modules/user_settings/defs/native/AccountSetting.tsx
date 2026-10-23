// Module ID: 15940
// Function ID: 15941
// Name: AccountSetting
// Dependencies: [1087, 11204, 1128, 10814, 15941, 2]

// Module 15940 (AccountSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import UserCircleIcon from "UserCircleIcon" /* 10814 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
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
