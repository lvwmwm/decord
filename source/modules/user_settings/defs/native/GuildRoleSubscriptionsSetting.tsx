// Module ID: 14733
// Function ID: 14734
// Name: route
// Dependencies: [7830, 676, 14734, 14735, 11006, 1236, 14736, 14738, 2]

// Module 14733 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 14734 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 14735 */;
import TicketIcon from "TicketIcon" /* 14736 */;
import createToggle from "createToggle" /* 11006 */;

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
    return require(14738) /* GuildRoleSubscriptionsSectionHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
