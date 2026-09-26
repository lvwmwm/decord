// Module ID: 16125
// Function ID: 16126
// Name: PremiumProfileCustomizationTryItOutSetting
// Dependencies: [8265, 1074, 11754, 1115, 16126, 2]

// Module 16125 (PremiumProfileCustomizationTryItOutSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
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
