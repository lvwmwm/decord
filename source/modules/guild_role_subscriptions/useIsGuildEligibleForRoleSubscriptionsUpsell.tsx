// Module ID: 15123
// Function ID: 115076
// Name: useIsGuildEligibleForRoleSubscriptionsUpsell
// Dependencies: [1391, 1838, 1849, 653, 566, 5642, 2]
// Exports: default

// Module 15123 (useIsGuildEligibleForRoleSubscriptionsUpsell)
import { isGuildOwner } from "isGuildOwner";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx");

export default function useIsGuildEligibleForRoleSubscriptionsUpsell(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_3.getGuild(closure_0));
  _require(566);
  [][0] = _isNativeReflectConstruct;
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = isGuildOwner(stateFromStores, tmp3);
  }
  const obj = _require(566);
  const isUserInCreatorMonetizationEligibleCountry = _require(5642).useIsUserInCreatorMonetizationEligibleCountry();
  if (tmp4) {
    let hasItem;
    if (null != stateFromStores) {
      const features = stateFromStores.features;
      hasItem = features.has(GuildFeatures.COMMUNITY);
    }
    tmp4 = null != hasItem;
    const tmp7 = hasItem;
  }
  if (tmp4) {
    tmp4 = tmp7;
  }
  if (tmp4) {
    tmp4 = isUserInCreatorMonetizationEligibleCountry;
  }
  if (tmp4) {
    let hasItem1 = null != stateFromStores;
    if (hasItem1) {
      const features2 = stateFromStores.features;
      hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
    }
    if (!hasItem1) {
      let hasItem2 = null != stateFromStores;
      if (hasItem2) {
        const features3 = stateFromStores.features;
        hasItem2 = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      hasItem1 = hasItem2;
    }
    if (!hasItem1) {
      let hasItem3 = null != stateFromStores;
      if (hasItem3) {
        const features4 = stateFromStores.features;
        hasItem3 = features4.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
      }
      hasItem1 = hasItem3;
    }
    tmp4 = !hasItem1;
  }
  return tmp4;
};
