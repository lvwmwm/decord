// Module ID: 10836
// Function ID: 10837
// Name: canUseStreamSetting
// Dependencies: [1924, 3966, 4195, 2]
// Exports: default

// Module 10836 (canUseStreamSetting)
import { StreamQualities } from "GuildFeatures";

let result = require("getGuildTierFromGuild").fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = importDefault(3966).canStreamQuality(importDefault(3966).StreamQuality.HIGH, user);
        const obj2 = importDefault(3966);
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        flag = importDefault(3966).canStreamQuality(importDefault(3966).StreamQuality.MID, user);
        const obj = importDefault(3966);
      } else {
        const quality2 = quality.quality;
        flag = false;
      }
    }
    let tmp7 = flag;
    if (null != quality.guildPremiumTier) {
      let result = flag;
      if (!flag) {
        result = require(4195) /* getGuildTierFromGuild */.isGuildBoostedAtLeast(arg2, quality.guildPremiumTier);
        const obj3 = require(4195) /* getGuildTierFromGuild */;
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};
