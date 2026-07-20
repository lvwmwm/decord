// Module ID: 10678
// Function ID: 83245
// Name: canUseStreamSetting
// Dependencies: []
// Exports: default

// Module 10678 (canUseStreamSetting)
const StreamQualities = require(dependencyMap[0]).StreamQualities;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user, premiumTier) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = importDefault(dependencyMap[1]).canStreamQuality(importDefault(dependencyMap[1]).StreamQuality.HIGH, user);
        const obj2 = importDefault(dependencyMap[1]);
      } else if (StreamQualities.MID_STREAMING_QUALITY === quality) {
        flag = importDefault(dependencyMap[1]).canStreamQuality(importDefault(dependencyMap[1]).StreamQuality.MID, user);
        const obj = importDefault(dependencyMap[1]);
      } else {
        const quality2 = quality.quality;
        flag = false;
      }
    }
    let tmp7 = flag;
    if (null != quality.guildPremiumTier) {
      let result = flag;
      if (!flag) {
        result = require(dependencyMap[2]).isGuildBoostedAtLeast(premiumTier, quality.guildPremiumTier);
        const obj3 = require(dependencyMap[2]);
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};
