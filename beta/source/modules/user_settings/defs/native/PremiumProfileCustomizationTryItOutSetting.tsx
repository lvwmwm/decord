// Module ID: 17283
// Function ID: 17284
// Name: PremiumProfileCustomizationTryItOutSetting
// Dependencies: [8712, 1071, 11942, 1112, 17284, 2]

// Module 17283 (PremiumProfileCustomizationTryItOutSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
      return require("ProfileCustomizationTryItOutSettingScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx");

export default route;
