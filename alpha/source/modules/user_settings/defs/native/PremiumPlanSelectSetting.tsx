// Module ID: 17036
// Function ID: 17037
// Name: PremiumPlanSelectSetting
// Dependencies: [8556, 1072, 11677, 1113, 17037, 2]

// Module 17036 (PremiumPlanSelectSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.u95Dt4);
  },
  parent: MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.PREMIUM_PLAN_SELECT,
    getComponent() {
      return require("PremiumPlanSelectSettingScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx");

export default route;
