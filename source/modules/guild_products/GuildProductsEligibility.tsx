// Module ID: 5635
// Function ID: 48184
// Name: useGuildEligibleForGuildProducts
// Dependencies: []
// Exports: isGuildEligibleForGuildProducts, useGuildEligibleForGuildProducts

// Module 5635 (useGuildEligibleForGuildProducts)
let closure_2 = importDefault(dependencyMap[0]);
const GuildFeatures = arg1(dependencyMap[1]).GuildFeatures;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_products/GuildProductsEligibility.tsx");

export const useGuildEligibleForGuildProducts = function useGuildEligibleForGuildProducts(id) {
  const arg1 = id;
  const items = [closure_2];
  const items1 = [id];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    if (null == arg0) {
      return false;
    } else {
      const guild = guild.getGuild(arg0);
      let tmp4 = null != guild;
      if (tmp4) {
        const features = guild.features;
        let hasItem = features.has(constants.COMMUNITY);
        if (!hasItem) {
          const features2 = guild.features;
          hasItem = features2.has(constants.GUILD_PRODUCTS);
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
    const guild = guild.getGuild(id);
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
