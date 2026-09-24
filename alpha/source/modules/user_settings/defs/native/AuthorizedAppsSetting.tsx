// Module ID: 15283
// Function ID: 15284
// Name: AuthorizedAppsSetting
// Dependencies: [1074, 11811, 1115, 7289, 15284, 2]

// Module 15283 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import KeyIcon from "KeyIcon" /* 7289 */;
import SettingBuilders from "SettingBuilders" /* 11811 */;
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
