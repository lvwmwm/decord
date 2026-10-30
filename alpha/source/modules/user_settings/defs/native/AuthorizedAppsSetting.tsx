// Module ID: 16789
// Function ID: 16790
// Name: AuthorizedAppsSetting
// Dependencies: [1072, 11505, 1114, 7119, 16790, 2]

// Module 16789 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import KeyIcon from "KeyIcon" /* 7119 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
