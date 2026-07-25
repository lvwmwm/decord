// Module ID: 14154
// Function ID: 108841
// Name: route
// Dependencies: [7697, 653, 14155, 14156, 10059, 1212, 14157, 14159, 2]

// Module 14154 (route)
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
    return importDefault(14156)() === constants.SUBSCRIBED;
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
  getComponent() {
    return require(14159) /* GuildRoleSubscriptionsSectionHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
