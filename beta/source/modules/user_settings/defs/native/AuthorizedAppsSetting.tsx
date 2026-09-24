// Module ID: 15214
// Function ID: 15215
// Name: AuthorizedAppsSetting
// Dependencies: [1078, 11630, 1119, 7231, 15215, 2]

// Module 15214 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import KeyIcon from "KeyIcon" /* 7231 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
