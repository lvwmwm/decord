// Module ID: 5004
// Function ID: 5005
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [2067, 1074, 1970, 4518, 5005, 2]
// Exports: default

// Module 5004 (getFrontierTuningConfigIfEligible)
import PremiumUtilsDefault from "PremiumUtils" /* 4518 */;
import GuildStore from "GuildStore" /* 2067 */;

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
          const config = tmp3(5005).getConfig(obj2);
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
