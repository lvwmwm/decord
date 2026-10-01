// Module ID: 17506
// Function ID: 17507
// Name: GuildSettingsRoleSubscriptionsEmpty
// Dependencies: [19, 2067, 1074, 1349, 21, 1485, 17507, 17508, 17509, 504, 2]
// Exports: default

// Module 17506 (GuildSettingsRoleSubscriptionsEmpty)
import Fragment from "Fragment" /* 21 */;
import ApplicationConstants from "ApplicationConstants" /* 1349 */;
import useNavigation from "useNavigation" /* 1485 */;
import useGuildApplicationDefault from "useGuildApplication" /* 17507 */;
import PlaceholderDefault from "Placeholder" /* 17508 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import Constants from "Constants" /* 1074 */;
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
    tmp7 = jsx(tmp2(17508), {});
  } else {
    const features = guild.features;
    const tmp5 = constants;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(tmp5.CREATOR_MONETIZABLE_PROVISIONAL)) {
        tmp7 = jsx(tmp2(17509), { guild });
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
