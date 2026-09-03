// Module ID: 14828
// Function ID: 14829
// Name: route
// Dependencies: [7896, 673, 11292, 1233, 14829, 2]

// Module 14828 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import MobileUserSettings from "MobileUserSettings" /* 7896 */;
import createToggle from "createToggle" /* 11292 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8jmdON"]);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.PREMIUM_MANAGE_PLAN,
  getComponent() {
    return require(14829) /* PremiumPlanSelectSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;
