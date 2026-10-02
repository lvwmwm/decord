// Module ID: 14461
// Function ID: 14462
// Name: AuthorizedAppsSetting
// Dependencies: [1086, 10874, 1127, 6374, 14462, 2]

// Module 14461 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import KeyIcon from "KeyIcon" /* 6374 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["f6kk+r"]);
  },
  parent: null,
  IconComponent: KeyIcon.KeyIcon,
  screen: {
    route: UserSettingsSections.AUTHORIZED_APPS,
    getComponent() {
      return require("UserSettingsAuthedApps").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;
