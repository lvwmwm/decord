// Module ID: 4665
// Function ID: 4666
// Name: getFrontierTuningConfigIfEligible
// Dependencies: [1908, 673, 1945, 4139, 4666, 2]
// Exports: default

// Module 4665 (getFrontierTuningConfigIfEligible)
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4139 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import { BoostedGuildTiers } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx");

export default function getFrontierTuningConfigIfEligible(arg0, currentUser) {
  if (null != arg2) {
    guild = guild.getGuild(arg2);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier === BoostedGuildTiers.NONE) {
      if (!obj4.isPremium(currentUser)) {
        let obj = getPremiumPlanItemDefault;
        if (!obj.canStreamQuality(getPremiumPlanItemDefault.StreamQuality.MID, currentUser)) {
          obj = { location: null, guildId: null };
          obj[0] = arg0;
          obj[1] = arg2;
          const config = tmp3(4666).getConfig(obj);
          let tmp6 = null;
          if (null != config.maxBitrate) {
            tmp6 = config;
          }
          return tmp6;
        }
        tmp3 = importDefault;
      }
      return null;
    }
  }
  return null;
};
