// Module ID: 18046
// Function ID: 18047
// Name: ManageSponsoredContentSetting
// Dependencies: [8556, 1072, 11677, 1113, 2236, 18047, 2]

// Module 18046 (ManageSponsoredContentSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef2236 from "module_2236" /* 2236 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2236.yyhs9L);
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
