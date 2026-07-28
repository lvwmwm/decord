// Module ID: 14001
// Function ID: 106901
// Name: route
// Dependencies: [653, 10099, 1212, 6597, 12508, 2]

// Module 14001 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+CbP2v"]);
  },
  parent: null,
  IconComponent: require("BoostGemIcon").BoostGemIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_BOOSTING,
  getComponent() {
    return require(12508) /* _isNativeReflectConstruct */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;
