// Module ID: 7432
// Function ID: 7433
// Name: GuildProductsEligibility
// Dependencies: [4885, 1072, 504, 2]
// Exports: isGuildEligibleForGuildProducts, useGuildEligibleForGuildProducts

// Module 7432 (GuildProductsEligibility)
import Constants from "Constants" /* 1072 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_products/GuildProductsEligibility.tsx");

export function useGuildEligibleForGuildProducts(id) {
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
}
export function isGuildEligibleForGuildProducts(id) {
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
}
