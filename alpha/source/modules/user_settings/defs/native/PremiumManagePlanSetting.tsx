// Module ID: 16784
// Function ID: 16785
// Name: PremiumManagePlanSetting
// Dependencies: [8387, 1084, 11302, 1125, 16785, 2]

// Module 16784 (PremiumManagePlanSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["8jmdON"]);
  },
  parent: MobileUserSettings.PREMIUM,
  screen: {
    route: UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;
