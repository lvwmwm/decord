// Module ID: 10724
// Function ID: 83533
// Name: canUseStreamSetting
// Dependencies: [1851, 3776, 4022, 2]
// Exports: default

// Module 10724 (canUseStreamSetting)
import { StreamQualities } from "GuildFeatures";

let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user, premiumTier) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = importDefault(3776).canStreamQuality(importDefault(3776).StreamQuality.HIGH, user);
        const obj2 = importDefault(3776);
      } else if (StreamQualities.MID_STREAMING_QUALITY === quality) {
        flag = importDefault(3776).canStreamQuality(importDefault(3776).StreamQuality.MID, user);
        const obj = importDefault(3776);
      } else {
        const quality2 = quality.quality;
        flag = false;
      }
    }
    let tmp7 = flag;
    if (null != quality.guildPremiumTier) {
      let result = flag;
      if (!flag) {
        result = require(4022) /* _createForOfIteratorHelperLoose */.isGuildBoostedAtLeast(premiumTier, quality.guildPremiumTier);
        const obj3 = require(4022) /* _createForOfIteratorHelperLoose */;
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};
