// Module ID: 15872
// Function ID: 15873
// Name: AuthorizedAppsSetting
// Dependencies: [1085, 10991, 1126, 6860, 15873, 2]

// Module 15872 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import KeyIcon from "KeyIcon" /* 6860 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
