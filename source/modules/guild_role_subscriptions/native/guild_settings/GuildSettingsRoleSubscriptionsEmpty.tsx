// Module ID: 16256
// Function ID: 125584
// Name: GuildSettingsRoleSubscriptionsEmptyContent
// Dependencies: []
// Exports: default

// Module 16256 (GuildSettingsRoleSubscriptionsEmptyContent)
function GuildSettingsRoleSubscriptionsEmptyContent(guild) {
  guild = guild.guild;
  let obj = arg1(dependencyMap[5]);
  const str = obj.useNavigation();
  if (tmp.loading) {
    let tmp8 = jsx(importDefault(dependencyMap[7]), {});
  } else {
    const features = guild.features;
    if (!features.has(constants.CREATOR_MONETIZABLE)) {
      const features2 = guild.features;
      if (!features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL)) {
        obj = { guild };
        tmp8 = jsx(importDefault(dependencyMap[8]), obj);
      }
    }
    if (null == tmp2) {
      const replaced = str.replace(constants2.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION);
      tmp8 = null;
    } else {
      const replaced1 = str.replace(constants2.ROLE_SUBSCRIPTIONS_TIERS);
      tmp8 = null;
    }
  }
  return tmp8;
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ GuildFeatures: closure_4, GuildSettingsSections: closure_5 } = arg1(dependencyMap[2]));
const ApplicationTypes = arg1(dependencyMap[3]).ApplicationTypes;
const jsx = arg1(dependencyMap[4]).jsx;
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx");

export default function GuildSettingsRoleSubscriptionsEmpty(guildId) {
  const arg1 = guildId.guildId;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  if (null == stateFromStores) {
    let tmp4 = jsx(importDefault(dependencyMap[7]), {});
  } else {
    obj = { guild: stateFromStores };
    tmp4 = <GuildSettingsRoleSubscriptionsEmptyContent {...obj} />;
  }
  return tmp4;
};
