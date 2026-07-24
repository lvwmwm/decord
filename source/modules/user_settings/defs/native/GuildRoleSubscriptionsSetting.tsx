// Module ID: 14143
// Function ID: 108714
// Name: route
// Dependencies: [7751, 653, 14144, 14145, 10127, 1212, 14146, 14148, 2]

// Module 14143 (route)
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
    return importDefault(14145)() === constants.SUBSCRIBED;
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
  getComponent() {
    return require(14148) /* GuildRoleSubscriptionsSectionHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
