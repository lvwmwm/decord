// Module ID: 19809
// Function ID: 19810
// Name: GuildSettingsRoleSubscriptionsEmpty
// Dependencies: [19, 4880, 1072, 1361, 21, 1498, 19810, 19811, 19812, 504, 2]
// Exports: default

// Module 19809 (GuildSettingsRoleSubscriptionsEmpty)
import Fragment from "Fragment" /* 21 */;
import ApplicationConstants from "ApplicationConstants" /* 1361 */;
import useNavigation from "useNavigation" /* 1498 */;
import useGuildApplicationDefault from "useGuildApplication" /* 19810 */;
import PlaceholderDefault from "Placeholder" /* 19811 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import Constants from "Constants" /* 1072 */;
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
    tmp7 = jsx(tmp2(19811), {});
  } else {
    const features = guild.features;
    const tmp5 = constants;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(tmp5.CREATOR_MONETIZABLE_PROVISIONAL)) {
        tmp7 = jsx(tmp2(19812), { guild });
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
