// Module ID: 14685
// Function ID: 14686
// Name: route
// Dependencies: [7880, 676, 10272, 1236, 14686, 2]

// Module 14685 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.gMlDNd);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT,
  getComponent() {
    return require(14686) /* ProfileCustomizationTryItOutSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx");

export default route;
