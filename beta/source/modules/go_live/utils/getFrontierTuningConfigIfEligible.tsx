// Module ID: 4894
// Function ID: 4895
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [2063, 1074, 1969, 4414, 4895, 2]
// Exports: default

// Module 4894 (getFrontierTuningConfigIfEligible)
import PremiumUtilsDefault from "PremiumUtils" /* 4414 */;
import GuildStore from "GuildStore" /* 2063 */;

const require = fn;
const BoostedGuildTiers = fn(1074).BoostedGuildTiers;
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx");

export default function getFrontierTuningConfigIfEligible(location, currentUser, guildId) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier === BoostedGuildTiers.NONE) {
      if (!obj4.isPremium(currentUser)) {
        if (!obj.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, currentUser)) {
          const obj2 = { location, guildId };
          const config = tmp3(4895).getConfig(obj2);
          let tmp6 = null;
          if (null != config.maxBitrate) {
            tmp6 = config;
          }
          return tmp6;
        }
        obj = PremiumUtilsDefault;
        tmp3 = importDefault;
      }
      return null;
    }
  }
  return null;
};
