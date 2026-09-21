// Module ID: 10212
// Function ID: 10213
// Name: canUseStreamSetting
// Dependencies: [1378, 4418, 4652, 2]
// Exports: default

// Module 10212 (canUseStreamSetting)
import PremiumConstants from "PremiumConstants" /* 1378 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4418 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4652 */;
import size from "module_2" /* 2 */;

const StreamQualities = PremiumConstants.StreamQualities;
let result = size.fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user, arg2) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = PremiumUtilsDefault.canStreamQuality(PremiumUtilsDefault.StreamQuality.HIGH, user);
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        flag = PremiumUtilsDefault.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, user);
      } else {
        const quality2 = quality.quality;
        flag = false;
      }
    }
    let tmp7 = flag;
    if (null != quality.guildPremiumTier) {
      let result = flag;
      if (!flag) {
        result = GuildBoostingUtils.isGuildBoostedAtLeast(arg2, quality.guildPremiumTier);
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};
