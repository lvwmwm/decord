// Module ID: 14438
// Function ID: 14439
// Name: route
// Dependencies: [8082, 676, 14439, 14440, 10446, 1236, 14441, 14443, 2]

// Module 14438 (route)
import { UserGuildRoleSubscriptionRelationship as closure_3 } from "MAX_SUBSCRIPTION_TIERS";
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.trSpHX);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  IconComponent: require("TicketIcon").TicketIcon,
  usePredicate: function useHasGuildRoleSubscriptionsSetting() {
    return importDefault(14440)() === constants.SUBSCRIBED;
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
  getComponent() {
    return require(14443) /* GuildRoleSubscriptionsSectionHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
