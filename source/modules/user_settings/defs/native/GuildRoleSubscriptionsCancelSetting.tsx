// Module ID: 14525
// Function ID: 14526
// Name: route
// Dependencies: [8123, 676, 10493, 1236, 14526, 2]

// Module 14525 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["7j5bMU"]);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
  getComponent() {
    return require(14526) /* GuildRoleSubscriptionCancelSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx");

export default route;
