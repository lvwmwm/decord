// Module ID: 16621
// Function ID: 16622
// Name: GuildRoleSubscriptionsSetting
// Dependencies: [8712, 1071, 16622, 16623, 11942, 1112, 16624, 16626, 2]

// Module 16621 (GuildRoleSubscriptionsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 16622 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 16623 */;
import TicketIcon from "TicketIcon" /* 16624 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const constants = GuildRoleSubscriptionsConstants.UserGuildRoleSubscriptionRelationship;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.trSpHX);
  },
  parent: MobileUserSettings.PREMIUM,
  IconComponent: TicketIcon.TicketIcon,
  usePredicate: function useHasGuildRoleSubscriptionsSetting() {
    return useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED;
  },
  screen: {
    route: UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS,
    getComponent() {
      return require("UserSettingsGuildRoleSubscriptions").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
