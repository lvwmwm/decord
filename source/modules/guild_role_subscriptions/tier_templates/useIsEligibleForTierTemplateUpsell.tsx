// Module ID: 14950
// Function ID: 112514
// Name: useIsEligibleForTierTemplateUpsell
// Dependencies: [0, 0, 0, 0, 0, 4294967295]
// Exports: default

// Module 14950 (useIsEligibleForTierTemplateUpsell)
import __exportStarResult1 from "__exportStarResult1";
import { GuildFeatures } from "__exportStarResult1";

const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx");

export default function useIsEligibleForTierTemplateUpsell(guildId) {
  const arg1 = guildId;
  const items = [__exportStarResult1];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => guild.getGuild(arg0));
  const obj = arg1(dependencyMap[2]);
  let hasItem;
  const guildEligibleForTierTemplates = arg1(dependencyMap[3]).useGuildEligibleForTierTemplates(guildId);
  if (null != stateFromStores) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  let result = true === hasItem;
  if (result) {
    let hasItem1;
    if (null != stateFromStores) {
      const features2 = stateFromStores.features;
      hasItem1 = features2.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    }
    result = false === hasItem1;
  }
  const obj2 = arg1(dependencyMap[3]);
  if (result) {
    result = obj3.canManageGuildRoleSubscriptions(stateFromStores);
  }
  if (result) {
    result = guildEligibleForTierTemplates;
  }
  return result;
};
