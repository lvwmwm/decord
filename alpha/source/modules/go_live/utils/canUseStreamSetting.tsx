// Module ID: 12122
// Function ID: 12123
// Name: canUseStreamSetting
// Dependencies: [1387, 2176, 8604, 2]
// Exports: default

// Module 12122 (canUseStreamSetting)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8604 */;
import size from "module_2" /* 2 */;

const StreamQualities = PremiumConstants.StreamQualities;
let result = size.fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, currentUser, arg2) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        const obj2 = PremiumUtilsDefault;
        flag = obj2.canStreamQuality(PremiumUtilsDefault.StreamQuality.HIGH, currentUser);
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        const obj = PremiumUtilsDefault;
        flag = obj.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, currentUser);
      } else {
        const quality2 = quality.quality;
        flag = false;
      }
    }
    let tmp7 = flag;
    if (null != quality.guildPremiumTier) {
      let result = flag;
      if (!result) {
        const obj3 = GuildBoostingUtils;
        result = obj3.isGuildBoostedAtLeast(arg2, quality.guildPremiumTier);
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};
