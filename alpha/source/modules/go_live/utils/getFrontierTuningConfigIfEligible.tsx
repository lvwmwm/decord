// Module ID: 5337
// Function ID: 5338
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [2090, 1087, 1991, 4864, 5338, 2]
// Exports: default

// Module 5337 (getFrontierTuningConfigIfEligible)
import Constants from "Constants" /* 1087 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1991 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4864 */;
import GuildStore from "GuildStore" /* 2090 */;
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
          const tmp3Result = tmp3(5338);
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
