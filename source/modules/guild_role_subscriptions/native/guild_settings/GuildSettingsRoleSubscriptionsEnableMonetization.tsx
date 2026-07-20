// Module ID: 16273
// Function ID: 125627
// Name: GuildSubscriptionEnableMonetization
// Dependencies: []
// Exports: default

// Module 16273 (GuildSubscriptionEnableMonetization)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEnableMonetization.tsx");

export default function GuildSubscriptionEnableMonetization(guildId) {
  const arg1 = guildId.guildId;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  if (null == obj.useStateFromStores(items, () => guild.getGuild(guildId))) {
    let tmp4 = jsx(importDefault(dependencyMap[4]), {});
  } else {
    obj = { brightTitle: true };
    const intl = arg1(dependencyMap[6]).intl;
    obj.title = intl.string(arg1(dependencyMap[6]).t.KeeWp0);
    const intl2 = arg1(dependencyMap[6]).intl;
    obj.description = intl2.string(arg1(dependencyMap[6]).t.tJLG+L);
    tmp4 = jsx(importDefault(dependencyMap[5]), obj);
    const tmp8 = importDefault(dependencyMap[5]);
  }
  return tmp4;
};
