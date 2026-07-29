// Module ID: 14022
// Function ID: 14023
// Name: route
// Dependencies: [676, 10120, 1236, 6618, 12530, 2]

// Module 14022 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+CbP2v"]);
  },
  parent: null,
  IconComponent: require("BoostGemIcon").BoostGemIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_BOOSTING,
  getComponent() {
    return require(12530) /* componentDidMount */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;
