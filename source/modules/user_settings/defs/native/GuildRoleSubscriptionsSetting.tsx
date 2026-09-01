// Module ID: 14800
// Function ID: 14801
// Name: route
// Dependencies: [7884, 676, 14801, 14802, 11068, 1236, 14803, 14805, 2]

// Module 14800 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 7884 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 14801 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 14802 */;
import TicketIcon from "TicketIcon" /* 14803 */;
import createToggle from "createToggle" /* 11068 */;

let closure_3 = MAX_SUBSCRIPTION_TIERS.UserGuildRoleSubscriptionRelationship;
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.trSpHX);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  IconComponent: TicketIcon.TicketIcon,
  usePredicate: function useHasGuildRoleSubscriptionsSetting() {
    return useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED;
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
  getComponent() {
    return require(14805) /* GuildRoleSubscriptionsSectionHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
