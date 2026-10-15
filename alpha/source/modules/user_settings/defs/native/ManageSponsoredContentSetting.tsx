// Module ID: 16857
// Function ID: 16858
// Name: ManageSponsoredContentSetting
// Dependencies: [8210, 1085, 10991, 1126, 2174, 16858, 2]

// Module 16857 (ManageSponsoredContentSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2174 from "module_2174" /* 2174 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2174.yyhs9L);
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
