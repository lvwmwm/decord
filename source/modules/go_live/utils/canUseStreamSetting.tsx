// Module ID: 10688
// Function ID: 83220
// Name: canUseStreamSetting
// Dependencies: [1852, 3777, 4023, 2]
// Exports: default

// Module 10688 (canUseStreamSetting)
import { StreamQualities } from "GuildFeatures";

let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user, premiumTier) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = importDefault(3777).canStreamQuality(importDefault(3777).StreamQuality.HIGH, user);
        const obj2 = importDefault(3777);
      } else if (StreamQualities.MID_STREAMING_QUALITY === quality) {
        flag = importDefault(3777).canStreamQuality(importDefault(3777).StreamQuality.MID, user);
        const obj = importDefault(3777);
      } else {
        const quality2 = quality.quality;
        flag = false;
      }
    }
    let tmp7 = flag;
    if (null != quality.guildPremiumTier) {
      let result = flag;
      if (!flag) {
        result = require(4023) /* _createForOfIteratorHelperLoose */.isGuildBoostedAtLeast(premiumTier, quality.guildPremiumTier);
        const obj3 = require(4023) /* _createForOfIteratorHelperLoose */;
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};
