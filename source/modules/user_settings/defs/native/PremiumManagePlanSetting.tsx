// Module ID: 13950
// Function ID: 106709
// Name: route
// Dependencies: [7697, 653, 10059, 1212, 13951, 2]

// Module 13950 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["8jmdON"]);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.PREMIUM_MANAGE_PLAN,
  getComponent() {
    return require(13951) /* PremiumPlanSelectSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;
