// Module ID: 15299
// Function ID: 15300
// Name: GuildRoleSubscriptionsSetting
// Dependencies: [7966, 1085, 15300, 558, 15301, 11262, 1126, 15302, 15304, 2]

// Module 15299 (GuildRoleSubscriptionsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15300 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 15301 */;
import TicketIcon from "TicketIcon" /* 15302 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const constants = GuildRoleSubscriptionsConstants.UserGuildRoleSubscriptionRelationship;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsSetting.tsx");

export default route;
