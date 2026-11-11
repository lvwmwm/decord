// Module ID: 10635
// Function ID: 10636
// Name: useHasGuildAffinityForBoostUpsell
// Dependencies: [6783, 10139, 1072, 504, 10636, 2]
// Exports: default

// Module 10635 (useHasGuildAffinityForBoostUpsell)
import Constants from "Constants" /* 1072 */;
import hasGuildAffinityForBoostUpsellDefault from "hasGuildAffinityForBoostUpsell" /* 10636 */;
import ConsentStore from "ConsentStore" /* 6783 */;
import GuildAffinitiesStore from "GuildAffinitiesStore" /* 10139 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Consents = Constants.Consents;
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useHasGuildAffinityForBoostUpsell.tsx");

export default function useHasGuildAffinityForBoostUpsell(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildAffinitiesStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const guildAffinityScore = obj.useStateFromStores(items, () => {
    const guildAffinity = GuildAffinitiesStore.getGuildAffinity(closure_0);
    let score;
    if (guildAffinity != null) {
      score = guildAffinity.score;
    }
    return score;
  }, items1);
  const items2 = [ConsentStore];
  const obj2 = require("get initialized");
  const hasPersonalizationConsented = obj2.useStateFromStores(items2, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  return hasGuildAffinityForBoostUpsellDefault({ guildAffinityScore, hasPersonalizationConsented });
};
