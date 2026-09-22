// Module ID: 17795
// Function ID: 17796
// Name: GuildSettingsRoleSubscriptionsEmpty
// Dependencies: [19, 1979, 1074, 1348, 21, 1483, 17796, 17797, 17798, 504, 2]
// Exports: default

// Module 17795 (GuildSettingsRoleSubscriptionsEmpty)
import useNavigation from "useNavigation" /* 1483 */;
import PlaceholderDefault from "Placeholder" /* 17797 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function GuildSettingsRoleSubscriptionsEmptyContent(guild) {
  guild = guild.guild;
  const str = useNavigation.useNavigation();
  if (tmp3.loading) {
    let tmp7 = jsx(tmp2(17797), {});
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(tmp5.CREATOR_MONETIZABLE_PROVISIONAL)) {
        const obj2 = { guild };
        tmp7 = jsx(tmp2(17798), { guild });
      }
    }
    if (null == tmp4) {
      const replaced = str.replace(constants2.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION);
      tmp7 = null;
    } else {
      const replaced1 = str.replace(constants2.ROLE_SUBSCRIPTIONS_TIERS);
      tmp7 = null;
    }
    tmp5 = constants;
  }
  return tmp7;
}
const Constants = fn(1074);
({ GuildFeatures: closure_4, GuildSettingsSections: hasOwnProperty } = Constants);
const ApplicationTypes = fn(1348).ApplicationTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx");

export default function GuildSettingsRoleSubscriptionsEmpty(guildId) {
  guildId = guildId.guildId;
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    let tmp5 = jsx(PlaceholderDefault, {});
  } else {
    const obj2 = { guild: stateFromStores };
    tmp5 = <GuildSettingsRoleSubscriptionsEmptyContent guild={stateFromStores} />;
  }
  return tmp5;
};
