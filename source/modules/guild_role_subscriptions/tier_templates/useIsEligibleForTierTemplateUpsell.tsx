// Module ID: 15187
// Function ID: 115416
// Name: useIsEligibleForTierTemplateUpsell
// Dependencies: [1838, 653, 566, 13008, 12600, 2]
// Exports: default

// Module 15187 (useIsEligibleForTierTemplateUpsell)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx");

export default function useIsEligibleForTierTemplateUpsell(guildId) {
  const _require = guildId;
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getGuild(closure_0));
  const obj = _require(566);
  let hasItem;
  const guildEligibleForTierTemplates = _require(13008).useGuildEligibleForTierTemplates(guildId);
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
  const obj2 = _require(13008);
  if (result) {
    result = obj3.canManageGuildRoleSubscriptions(stateFromStores);
  }
  if (result) {
    result = guildEligibleForTierTemplates;
  }
  return result;
};
