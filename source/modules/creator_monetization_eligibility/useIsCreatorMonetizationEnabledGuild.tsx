// Module ID: 5632
// Function ID: 48050
// Name: isCreatorMonetizationEnabledGuild
// Dependencies: [1838, 653, 566, 2]
// Exports: default

// Module 5632 (isCreatorMonetizationEnabledGuild)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

const require = arg1;
function isCreatorMonetizationEnabledGuild(guild) {
  const features = guild.features;
  let tmp = !features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
  if (tmp) {
    const features2 = guild.features;
    let hasItem = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
    if (!hasItem) {
      const features3 = guild.features;
      hasItem = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    }
    tmp = hasItem;
  }
  return tmp;
}
const result = require("initialize").fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx");

export default function useIsCreatorMonetizationEnabledGuild(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  return _require(566).useStateFromStores(items, () => {
    const guild = outer1_2.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      tmp2 = outer1_4(guild);
    }
    return tmp2;
  });
};
export { isCreatorMonetizationEnabledGuild };
