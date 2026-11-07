// Module ID: 14317
// Function ID: 14318
// Name: hasGuildAffinityForBoostUpsell
// Dependencies: [2]
// Exports: default

// Module 14317 (hasGuildAffinityForBoostUpsell)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/hasGuildAffinityForBoostUpsell.tsx");

export default function hasGuildAffinityForBoostUpsell(guildAffinityScore) {
  guildAffinityScore = guildAffinityScore.guildAffinityScore;
  let prop = guildAffinityScore.hasPersonalizationConsented;
  if (prop) {
    prop = null != guildAffinityScore && guildAffinityScore > 17.06;
    const tmp3 = null != guildAffinityScore && guildAffinityScore > 17.06;
  }
  return prop;
};
export const MIN_GUILD_AFFINITY_SCORE = 17.06;
