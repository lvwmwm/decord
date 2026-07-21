// Module ID: 12779
// Function ID: 97923
// Name: GuildFeatures
// Dependencies: []
// Exports: hasEnabledMonetization, isGuildEligibleForTierTemplates, useGuildEligibleForTierTemplates

// Module 12779 (GuildFeatures)
let closure_2 = importDefault(dependencyMap[0]);
const GuildFeatures = arg1(dependencyMap[1]).GuildFeatures;
const items = [, , ];
({ ROLE_SUBSCRIPTIONS_ENABLED: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_PROVISIONAL: arr[2] } = GuildFeatures);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx");

export const hasEnabledMonetization = function hasEnabledMonetization(arg0) {
  const arg1 = arg0;
  let someResult = null != arg0;
  if (someResult) {
    someResult = items.some((arg0) => {
      const features = arg0.features;
      return features.has(arg0);
    });
  }
  return someResult;
};
export const isGuildEligibleForTierTemplates = function isGuildEligibleForTierTemplates(id) {
  const guild = guild.getGuild(id);
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  return null != hasItem && hasItem;
};
export const useGuildEligibleForTierTemplates = function useGuildEligibleForTierTemplates(guildId) {
  const arg1 = guildId;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED);
    }
    return null != hasItem && hasItem;
  });
};
