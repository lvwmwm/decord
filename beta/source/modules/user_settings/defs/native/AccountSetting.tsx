// Module ID: 17204
// Function ID: 17205
// Name: AccountSetting
// Dependencies: [1072, 12406, 1113, 10898, 17205, 2]

// Module 17204 (AccountSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import UserCircleIcon from "UserCircleIcon" /* 10898 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
