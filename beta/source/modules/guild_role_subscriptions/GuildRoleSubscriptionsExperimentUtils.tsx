// Module ID: 13437
// Function ID: 13438
// Name: GuildRoleSubscriptionsExperimentUtils
// Dependencies: [2067, 1074, 563, 2]
// Exports: hasEnabledMonetization, isGuildEligibleForTierTemplates, useGuildEligibleForTierTemplates

// Module 13437 (GuildRoleSubscriptionsExperimentUtils)
import Constants from "Constants" /* 1074 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
let items = [, , ];
({ ROLE_SUBSCRIPTIONS_ENABLED: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_PROVISIONAL: arr[2] } = GuildFeatures);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx");

export const hasEnabledMonetization = function hasEnabledMonetization(arg0) {
  let closure_0 = arg0;
  const someResult = null != arg0 && items.some((item) => {
    features = features.features;
    return features.has(item);
  });
  return someResult;
};
export const isGuildEligibleForTierTemplates = function isGuildEligibleForTierTemplates(id) {
  const guild = GuildStore.getGuild(id);
  let flag;
  if (guild != null) {
    const features = guild.features;
    flag = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const useGuildEligibleForTierTemplates = function useGuildEligibleForTierTemplates(guildId) {
  _require = guildId;
  items = [GuildStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
};
