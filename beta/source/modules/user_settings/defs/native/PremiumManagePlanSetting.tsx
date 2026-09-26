// Module ID: 15265
// Function ID: 15266
// Name: PremiumManagePlanSetting
// Dependencies: [8265, 1074, 11754, 1115, 15266, 2]

// Module 15265 (PremiumManagePlanSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["8jmdON"]);
  },
  parent: SettingsConstants.MobileUserSettings.PREMIUM,
  screen: {
    route: Constants.UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;
