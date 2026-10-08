// Module ID: 5235
// Function ID: 5236
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [2086, 1085, 1988, 4726, 5236, 2]
// Exports: default

// Module 5235 (getFrontierTuningConfigIfEligible)
import Constants from "Constants" /* 1085 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1988 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4726 */;
import GuildStore from "GuildStore" /* 2086 */;
import size from "module_2" /* 2 */;

const BoostedGuildTiers = Constants.BoostedGuildTiers;
const result = size.fileFinishedImporting("modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx");

export default function getFrontierTuningConfigIfEligible(location, user, guildId) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier === BoostedGuildTiers.NONE) {
      const obj4 = PremiumTypeUtils;
      if (!obj4.isPremium(user)) {
        const obj = PremiumUtilsDefault;
        const tmp3 = importDefault;
        if (!obj.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, user)) {
          const obj2 = { location, guildId };
          const tmp3Result = tmp3(5236);
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
