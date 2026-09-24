// Module ID: 16121
// Function ID: 16122
// Name: PremiumProfileCustomizationTryItOutSetting
// Dependencies: [8270, 1078, 11630, 1119, 16122, 2]

// Module 16121 (PremiumProfileCustomizationTryItOutSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.gMlDNd);
  },
  parent: SettingsConstants.MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT,
    getComponent() {
      return require("ProfileCustomizationTryItOutSettingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx");

export default route;
