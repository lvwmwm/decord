// Module ID: 17550
// Function ID: 17551
// Name: GuildRoleSubscriptionsSetting
// Dependencies: [8536, 1072, 17551, 17552, 11717, 1113, 17553, 17555, 2]

// Module 17550 (GuildRoleSubscriptionsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17551 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 17552 */;
import TicketIcon from "TicketIcon" /* 17553 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
