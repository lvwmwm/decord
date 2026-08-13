// Module ID: 14303
// Function ID: 14304
// Name: route
// Dependencies: [676, 10407, 1236, 7740, 12836, 2]

// Module 14303 (route)
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
    return require(12836) /* componentDidMount */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;
