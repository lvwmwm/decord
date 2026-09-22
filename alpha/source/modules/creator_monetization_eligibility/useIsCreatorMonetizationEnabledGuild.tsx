// Module ID: 7495
// Function ID: 7496
// Name: useIsCreatorMonetizationEnabledGuild
// Dependencies: [2064, 1074, 504, 2]
// Exports: default, isCreatorMonetizationEnabledGuild

// Module 7495 (useIsCreatorMonetizationEnabledGuild)
import GuildStore from "GuildStore" /* 2064 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx");

export default function useIsCreatorMonetizationEnabledGuild(arg0) {
  _require = arg0;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
      let tmp5 = !hasItem;
      if (!hasItem) {
        const features2 = guild.features;
        let hasItem1 = features2.has(tmp3.CREATOR_MONETIZABLE);
        if (!hasItem1) {
          const features3 = guild.features;
          hasItem1 = features3.has(tmp3.CREATOR_MONETIZABLE_PROVISIONAL);
        }
        tmp5 = hasItem1;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  });
};
export const isCreatorMonetizationEnabledGuild = function isCreatorMonetizationEnabledGuild(guild) {
  const features = guild.features;
  const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
  let tmp3 = !hasItem;
  if (!hasItem) {
    const features2 = guild.features;
    let hasItem1 = features2.has(tmp.CREATOR_MONETIZABLE);
    if (!hasItem1) {
      const features3 = guild.features;
      hasItem1 = features3.has(tmp.CREATOR_MONETIZABLE_PROVISIONAL);
    }
    tmp3 = hasItem1;
  }
  return tmp3;
};
