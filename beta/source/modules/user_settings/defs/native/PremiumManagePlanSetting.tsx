// Module ID: 17514
// Function ID: 17515
// Name: PremiumManagePlanSetting
// Dependencies: [9202, 1072, 12406, 1113, 17515, 2]

// Module 17514 (PremiumManagePlanSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
