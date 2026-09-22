// Module ID: 15222
// Function ID: 15223
// Name: AuthorizedAppsSetting
// Dependencies: [1074, 11729, 1115, 7203, 15223, 2]

// Module 15222 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import KeyIcon from "KeyIcon" /* 7203 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["f6kk+r"]);
  },
  parent: null,
  IconComponent: KeyIcon.KeyIcon,
  screen: {
    route: Constants.UserSettingsSections.AUTHORIZED_APPS,
    getComponent() {
      return require("UserSettingsAuthedApps").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;
