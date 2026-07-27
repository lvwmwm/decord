// Module ID: 14155
// Function ID: 108846
// Name: route
// Dependencies: [7697, 653, 14156, 14157, 10059, 1212, 14158, 14160, 2]

// Module 14155 (route)
import { UserGuildRoleSubscriptionRelationship as closure_3 } from "MAX_SUBSCRIPTION_TIERS";
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.trSpHX);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  IconComponent: require("TicketIcon").TicketIcon,
  usePredicate: function useHasGuildRoleSubscriptionsSetting() {
    return importDefault(14157)() === constants.SUBSCRIBED;
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
  getComponent() {
    return require(14160) /* GuildRoleSubscriptionsSectionHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
