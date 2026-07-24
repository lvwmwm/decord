// Module ID: 12952
// Function ID: 100435
// Name: GuildFeatures
// Dependencies: [1838, 653, 624, 2]
// Exports: hasEnabledMonetization, isGuildEligibleForTierTemplates, useGuildEligibleForTierTemplates

// Module 12952 (GuildFeatures)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

const require = arg1;
let items = [, , ];
({ ROLE_SUBSCRIPTIONS_ENABLED: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_PROVISIONAL: arr[2] } = GuildFeatures);
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx");

export const hasEnabledMonetization = function hasEnabledMonetization(arg0) {
  let closure_0 = arg0;
  let someResult = null != arg0;
  if (someResult) {
    someResult = items.some((arg0) => {
      features = features.features;
      return features.has(arg0);
    });
  }
  return someResult;
};
export const isGuildEligibleForTierTemplates = function isGuildEligibleForTierTemplates(id) {
  guild = guild.getGuild(id);
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  return null != hasItem && hasItem;
};
export const useGuildEligibleForTierTemplates = function useGuildEligibleForTierTemplates(guildId) {
  const _require = guildId;
  const items = [_createForOfIteratorHelperLoose];
  return _require(624).useStateFromStores(items, () => {
    const guild = outer1_2.getGuild(closure_0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_3.ROLE_SUBSCRIPTIONS_ENABLED);
    }
    return null != hasItem && hasItem;
  });
};
