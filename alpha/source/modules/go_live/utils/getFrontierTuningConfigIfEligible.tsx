// Module ID: 5831
// Function ID: 5832
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [4843, 1087, 1991, 2053, 5832, 2]
// Exports: default

// Module 5831 (getFrontierTuningConfigIfEligible)
import Constants from "Constants" /* 1087 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1991 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2053 */;
import GuildStore from "GuildStore" /* 4843 */;
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
          const tmp3Result = tmp3(5832);
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
