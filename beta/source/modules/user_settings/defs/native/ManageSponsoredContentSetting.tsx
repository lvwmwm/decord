// Module ID: 16186
// Function ID: 16187
// Name: ManageSponsoredContentSetting
// Dependencies: [8233, 1074, 11725, 1115, 2154, 16187, 2]

// Module 16186 (ManageSponsoredContentSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2154 from "module_2154" /* 2154 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2154.yyhs9L);
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
