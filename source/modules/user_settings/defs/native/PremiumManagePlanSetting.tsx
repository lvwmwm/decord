// Module ID: 14296
// Function ID: 14297
// Name: route
// Dependencies: [8127, 676, 10407, 1236, 14297, 2]

// Module 14296 (route)
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
    return require(14297) /* PremiumPlanSelectSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;
