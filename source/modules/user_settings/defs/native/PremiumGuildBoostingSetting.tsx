// Module ID: 14142
// Function ID: 14143
// Name: route
// Dependencies: [676, 10361, 1236, 7616, 12677, 2]

// Module 14142 (route)
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
    return require(12677) /* componentDidMount */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;
