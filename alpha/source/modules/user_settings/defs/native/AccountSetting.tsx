// Module ID: 15889
// Function ID: 15890
// Name: AccountSetting
// Dependencies: [1072, 11875, 1113, 12960, 15890, 2]

// Module 15889 (AccountSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import UserCircleIcon from "UserCircleIcon" /* 12960 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
