// Module ID: 7419
// Function ID: 7420
// Name: useIsCreatorMonetizationEnabledGuild
// Dependencies: [4880, 1072, 504, 2]
// Exports: default, isCreatorMonetizationEnabledGuild

// Module 7419 (useIsCreatorMonetizationEnabledGuild)
import Constants from "Constants" /* 1072 */;
import GuildStore from "GuildStore" /* 4880 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx");

export default function useIsCreatorMonetizationEnabledGuild(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
      let tmp5 = !hasItem;
      if (tmp5) {
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
export function isCreatorMonetizationEnabledGuild(guild) {
  const features = guild.features;
  const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
  let tmp3 = !hasItem;
  if (tmp3) {
    const features2 = guild.features;
    let hasItem1 = features2.has(tmp.CREATOR_MONETIZABLE);
    if (!hasItem1) {
      const features3 = guild.features;
      hasItem1 = features3.has(tmp.CREATOR_MONETIZABLE_PROVISIONAL);
    }
    tmp3 = hasItem1;
  }
  return tmp3;
}
