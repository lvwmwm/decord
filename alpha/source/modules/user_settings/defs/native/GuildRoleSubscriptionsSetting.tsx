// Module ID: 16258
// Function ID: 16259
// Name: GuildRoleSubscriptionsSetting
// Dependencies: [8260, 1087, 16259, 558, 16260, 11065, 1128, 16261, 16263, 2]

// Module 16258 (GuildRoleSubscriptionsSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 16259 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 16260 */;
import TicketIcon from "TicketIcon" /* 16261 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
