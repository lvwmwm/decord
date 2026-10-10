// Module ID: 16167
// Function ID: 16168
// Name: PremiumProfileCustomizationTryItOutSetting
// Dependencies: [7992, 1085, 10663, 1126, 16168, 2]

// Module 16167 (PremiumProfileCustomizationTryItOutSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.gMlDNd);
  },
  parent: MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT,
    getComponent() {
      return require("ProfileCustomizationTryItOutSettingScreenExperimentWrapper").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx");

export default route;
