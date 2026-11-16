// Module ID: 6073
// Function ID: 6074
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [5041, 1072, 2107, 2171, 6074, 2]
// Exports: default

// Module 6073 (getFrontierTuningConfigIfEligible)
import Constants from "Constants" /* 1072 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2107 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import GuildStore from "GuildStore" /* 5041 */;
import size from "module_2" /* 2 */;

const BoostedGuildTiers = Constants.BoostedGuildTiers;
const result = size.fileFinishedImporting("modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx");

export default function getFrontierTuningConfigIfEligible(location, currentUser, guildId) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier === BoostedGuildTiers.NONE) {
      const obj4 = PremiumTypeUtils;
      if (!obj4.isPremium(currentUser)) {
        const obj = PremiumUtilsDefault;
        const tmp3 = importDefault;
        if (!obj.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, currentUser)) {
          const obj2 = { location, guildId };
          const tmp3Result = tmp3(6074);
          const config = tmp3Result.getConfig(obj2);
          let tmp6 = null;
          if (null != config.maxBitrate) {
            tmp6 = config;
          }
          return tmp6;
        }
      }
      return null;
    }
  }
  return null;
};
