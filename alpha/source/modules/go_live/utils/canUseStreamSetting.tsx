// Module ID: 11368
// Function ID: 11369
// Name: canUseStreamSetting
// Dependencies: [1394, 4828, 8248, 2]
// Exports: default

// Module 11368 (canUseStreamSetting)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4828 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8248 */;
import size from "module_2" /* 2 */;

const StreamQualities = PremiumConstants.StreamQualities;
let result = size.fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user, arg2) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        const obj2 = PremiumUtilsDefault;
        flag = obj2.canStreamQuality(PremiumUtilsDefault.StreamQuality.HIGH, user);
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        const obj = PremiumUtilsDefault;
        flag = obj.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, user);
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
