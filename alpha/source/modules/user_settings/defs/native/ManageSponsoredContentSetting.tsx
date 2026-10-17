// Module ID: 16964
// Function ID: 16965
// Name: ManageSponsoredContentSetting
// Dependencies: [8260, 1087, 11065, 1128, 2177, 16965, 2]

// Module 16964 (ManageSponsoredContentSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import _modDef2177 from "module_2177" /* 2177 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2177.yyhs9L);
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
