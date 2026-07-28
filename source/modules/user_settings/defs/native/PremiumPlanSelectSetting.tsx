// Module ID: 13999
// Function ID: 106896
// Name: route
// Dependencies: [7733, 653, 10099, 1212, 14000, 2]

// Module 13999 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.u95Dt4);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.PREMIUM_PLAN_SELECT,
  getComponent() {
    return require(14000) /* PremiumPlanSelectSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx");

export default route;
