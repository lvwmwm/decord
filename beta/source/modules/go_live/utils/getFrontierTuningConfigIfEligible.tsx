// Module ID: 4928
// Function ID: 4929
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [2067, 1078, 1973, 4450, 4929, 2]
// Exports: default

// Module 4928 (getFrontierTuningConfigIfEligible)
import PremiumUtilsDefault from "PremiumUtils" /* 4450 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = fn;
const BoostedGuildTiers = fn(1078).BoostedGuildTiers;
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx");

export default function getFrontierTuningConfigIfEligible(location, user, guildId) {
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier === BoostedGuildTiers.NONE) {
      if (!obj4.isPremium(user)) {
        if (!obj.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, user)) {
          const obj2 = { location, guildId };
          const config = tmp3(4929).getConfig(obj2);
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
