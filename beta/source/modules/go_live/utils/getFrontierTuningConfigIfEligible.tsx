// Module ID: 4974
// Function ID: 4975
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [2067, 1074, 1970, 4488, 4975, 2]
// Exports: default

// Module 4974 (getFrontierTuningConfigIfEligible)
import Constants from "Constants" /* 1074 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import GuildStore from "GuildStore" /* 2067 */;
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
          const tmp3Result = tmp3(4975);
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
