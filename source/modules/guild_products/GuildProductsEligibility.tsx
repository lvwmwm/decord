// Module ID: 5639
// Function ID: 48237
// Name: useGuildEligibleForGuildProducts
// Dependencies: [1838, 653, 566, 2]
// Exports: isGuildEligibleForGuildProducts, useGuildEligibleForGuildProducts

// Module 5639 (useGuildEligibleForGuildProducts)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_products/GuildProductsEligibility.tsx");

export const useGuildEligibleForGuildProducts = function useGuildEligibleForGuildProducts(id) {
  const _require = id;
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = outer1_2.getGuild(closure_0);
      let tmp4 = null != guild;
      if (tmp4) {
        const features = guild.features;
        let hasItem = features.has(outer1_3.COMMUNITY);
        if (!hasItem) {
          const features2 = guild.features;
          hasItem = features2.has(outer1_3.GUILD_PRODUCTS);
        }
        tmp4 = hasItem;
      }
      return tmp4;
    }
  }, items1);
};
export const isGuildEligibleForGuildProducts = function isGuildEligibleForGuildProducts(id) {
  if (null == id) {
    return false;
  } else {
    guild = guild.getGuild(id);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      let hasItem = features.has(GuildFeatures.COMMUNITY);
      if (!hasItem) {
        const features2 = guild.features;
        hasItem = features2.has(GuildFeatures.GUILD_PRODUCTS);
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }
};
