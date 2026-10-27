// Module ID: 15723
// Function ID: 15724
// Name: AccountSetting
// Dependencies: [1087, 11084, 1128, 10598, 15724, 2]

// Module 15723 (AccountSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import UserCircleIcon from "UserCircleIcon" /* 10598 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
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
