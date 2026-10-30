// Module ID: 17847
// Function ID: 17848
// Name: ManageSponsoredContentSetting
// Dependencies: [8424, 1072, 11505, 1114, 2108, 17848, 2]

// Module 17847 (ManageSponsoredContentSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import _modDef2108 from "module_2108" /* 2108 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2108.yyhs9L);
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
