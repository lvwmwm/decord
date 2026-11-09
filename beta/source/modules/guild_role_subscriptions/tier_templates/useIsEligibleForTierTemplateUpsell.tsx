// Module ID: 18648
// Function ID: 18649
// Name: useIsEligibleForTierTemplateUpsell
// Dependencies: [5011, 1072, 504, 16030, 7498, 2]
// Exports: default

// Module 18648 (useIsEligibleForTierTemplateUpsell)
import Constants from "Constants" /* 1072 */;
import GuildStore from "GuildStore" /* 5011 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx");

export default function useIsEligibleForTierTemplateUpsell(guildId) {
  _require = guildId;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let hasItem;
  const obj2 = require("GuildRoleSubscriptionsExperimentUtils");
  const guildEligibleForTierTemplates = obj2.useGuildEligibleForTierTemplates(guildId);
  const tmp = _require;
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  let result = true === hasItem;
  if (result) {
    let hasItem1;
    if (stateFromStores != null) {
      const features2 = stateFromStores.features;
      hasItem1 = features2.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    }
    result = false === hasItem1;
  }
  const tmpResult = tmp(7498);
  if (result) {
    result = tmpResult.canManageGuildRoleSubscriptions(stateFromStores);
  }
  if (result) {
    result = guildEligibleForTierTemplates;
  }
  return result;
};
