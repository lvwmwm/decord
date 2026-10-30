// Module ID: 16524
// Function ID: 16525
// Name: AccountSetting
// Dependencies: [1072, 11505, 1114, 10785, 16525, 2]

// Module 16524 (AccountSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import UserCircleIcon from "UserCircleIcon" /* 10785 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
