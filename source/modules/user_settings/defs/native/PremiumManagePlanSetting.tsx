// Module ID: 14231
// Function ID: 14232
// Name: route
// Dependencies: [8082, 676, 10447, 1236, 14232, 2]

// Module 14231 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["8jmdON"]);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.PREMIUM_MANAGE_PLAN,
  getComponent() {
    return require(14232) /* PremiumPlanSelectSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;
