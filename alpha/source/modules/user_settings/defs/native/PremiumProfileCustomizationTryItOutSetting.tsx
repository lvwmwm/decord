// Module ID: 16122
// Function ID: 16123
// Name: PremiumProfileCustomizationTryItOutSetting
// Dependencies: [8233, 1074, 11725, 1115, 16123, 2]

// Module 16122 (PremiumProfileCustomizationTryItOutSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
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
