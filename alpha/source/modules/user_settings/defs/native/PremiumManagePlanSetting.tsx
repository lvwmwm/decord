// Module ID: 15244
// Function ID: 15245
// Name: PremiumManagePlanSetting
// Dependencies: [7992, 1085, 10663, 1126, 15245, 2]

// Module 15244 (PremiumManagePlanSetting)
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
