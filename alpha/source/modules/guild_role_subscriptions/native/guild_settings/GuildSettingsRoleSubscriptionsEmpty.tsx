// Module ID: 20201
// Function ID: 20202
// Name: GuildSettingsRoleSubscriptionsEmpty
// Dependencies: [19, 4914, 1071, 1364, 21, 1501, 20202, 20203, 20204, 504, 2]
// Exports: default

// Module 20201 (GuildSettingsRoleSubscriptionsEmpty)
import Fragment from "Fragment" /* 21 */;
import ApplicationConstants from "ApplicationConstants" /* 1364 */;
import useNavigation from "useNavigation" /* 1501 */;
import useGuildApplicationDefault from "useGuildApplication" /* 20202 */;
import PlaceholderDefault from "Placeholder" /* 20203 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function GuildSettingsRoleSubscriptionsEmptyContent(guild) {
  let tmp7;
  guild = guild.guild;
  const obj = useNavigation;
  const str = obj.useNavigation();
  const tmp3 = useGuildApplicationDefault(guild.id, ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS);
  if (tmp3.loading) {
    tmp7 = jsx(tmp2(20203), {});
  } else {
    const features = guild.features;
    const tmp5 = constants;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(tmp5.CREATOR_MONETIZABLE_PROVISIONAL)) {
        tmp7 = jsx(tmp2(20204), { guild });
      }
    }
    if (null == tmp4) {
      const replaced = str.replace(hasOwnProperty.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION);
      tmp7 = null;
    } else {
      const replaced1 = str.replace(hasOwnProperty.ROLE_SUBSCRIPTIONS_TIERS);
      tmp7 = null;
    }
  }
  return tmp7;
}
({ GuildFeatures: closure_4, GuildSettingsSections: hasOwnProperty } = Constants);
const ApplicationTypes = ApplicationConstants.ApplicationTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx");

export default function GuildSettingsRoleSubscriptionsEmpty(guildId) {
  let tmp5;
  guildId = guildId.guildId;
  const items = [GuildStore];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (null == stateFromStores) {
    tmp5 = jsx(PlaceholderDefault, {});
  } else {
    tmp5 = <GuildSettingsRoleSubscriptionsEmptyContent guild={stateFromStores} />;
  }
  return tmp5;
};
