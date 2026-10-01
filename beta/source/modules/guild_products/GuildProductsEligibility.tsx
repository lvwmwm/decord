// Module ID: 6676
// Function ID: 6677
// Name: GuildProductsEligibility
// Dependencies: [2067, 1074, 504, 2]
// Exports: isGuildEligibleForGuildProducts, useGuildEligibleForGuildProducts

// Module 6676 (GuildProductsEligibility)
import Constants from "Constants" /* 1074 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_products/GuildProductsEligibility.tsx");

export const useGuildEligibleForGuildProducts = function useGuildEligibleForGuildProducts(id) {
  _require = id;
  const items = [GuildStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null == id) {
      return false;
    } else {
      const guild = GuildStore.getGuild(tmp);
      let tmp4 = null != guild;
      if (tmp4) {
        const features = guild.features;
        let hasItem = features.has(GuildFeatures.COMMUNITY);
        const tmp5 = GuildFeatures;
        if (!hasItem) {
          const features2 = guild.features;
          hasItem = features2.has(tmp5.GUILD_PRODUCTS);
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
    const guild = GuildStore.getGuild(id);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      let hasItem = features.has(GuildFeatures.COMMUNITY);
      const tmp4 = GuildFeatures;
      if (!hasItem) {
        const features2 = guild.features;
        hasItem = features2.has(tmp4.GUILD_PRODUCTS);
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }
};
