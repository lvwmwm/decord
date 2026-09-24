// Module ID: 16185
// Function ID: 16186
// Name: ManageSponsoredContentSetting
// Dependencies: [8270, 1078, 11630, 1119, 2158, 16186, 2]

// Module 16185 (ManageSponsoredContentSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import _modDef2158 from "module_2158" /* 2158 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2158.yyhs9L);
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
