// Module ID: 15954
// Function ID: 15955
// Name: ManageSponsoredContentSetting
// Dependencies: [8079, 1074, 11605, 1114, 2070, 15955, 2]

// Module 15954 (ManageSponsoredContentSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import _modDef2070 from "module_2070" /* 2070 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2070.yyhs9L);
  },
  parent: SettingsConstants.MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  screen: {
    route: Constants.UserSettingsSections.MANAGE_SPONSORED_CONTENT,
    getComponent() {
      return require("ManageSponsoredContentScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;
