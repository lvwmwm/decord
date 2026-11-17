// Module ID: 6217
// Function ID: 6218
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [5181, 1072, 2110, 2174, 6218, 2]
// Exports: default

// Module 6217 (getFrontierTuningConfigIfEligible)
import Constants from "Constants" /* 1072 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2110 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2174 */;
import GuildStore from "GuildStore" /* 5181 */;
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
          const tmp3Result = tmp3(6218);
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
