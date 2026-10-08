// Module ID: 16066
// Function ID: 16067
// Name: ManageSponsoredContentSetting
// Dependencies: [7966, 1085, 11262, 1126, 2173, 16067, 2]

// Module 16066 (ManageSponsoredContentSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2173 from "module_2173" /* 2173 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2173.yyhs9L);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  screen: {
    route: UserSettingsSections.MANAGE_SPONSORED_CONTENT,
    getComponent() {
      return require("ManageSponsoredContentScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;
