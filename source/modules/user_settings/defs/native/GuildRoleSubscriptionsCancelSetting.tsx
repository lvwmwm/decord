// Module ID: 14163
// Function ID: 108874
// Name: route
// Dependencies: [7751, 653, 10127, 1212, 14164, 2]

// Module 14163 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["7j5bMU"]);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
  getComponent() {
    return require(14164) /* GuildRoleSubscriptionCancelSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx");

export default route;
