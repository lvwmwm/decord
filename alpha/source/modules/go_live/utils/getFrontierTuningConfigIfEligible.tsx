// Module ID: 6044
// Function ID: 6045
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [5012, 1072, 2112, 2176, 6045, 2]
// Exports: default

// Module 6044 (getFrontierTuningConfigIfEligible)
import Constants from "Constants" /* 1072 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2112 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import GuildStore from "GuildStore" /* 5012 */;
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
          const tmp3Result = tmp3(6045);
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
