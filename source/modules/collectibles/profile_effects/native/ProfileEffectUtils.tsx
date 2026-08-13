// Module ID: 9432
// Function ID: 9433
// Name: shouldAnimate
// Dependencies: [9433, 2]
// Exports: calculateProfileEffectHeight, shouldAnimate

// Module 9432 (shouldAnimate)
const result = require("set").fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

export const shouldAnimate = function shouldAnimate(start, current) {
  if (current >= start.start) {
    if (!start.loop) {
      if (current > start.duration + start.start) {
        return false;
      }
    }
    if (start.loop) {
      if (undefined !== start.loopDelay) {
        if (start.loopDelay > 0) {
          let loopDelay;
          if (start != null) {
            loopDelay = start.loopDelay;
          }
          if ((current - start.start) % (start.duration + loopDelay) > start.duration) {
            return false;
          }
        }
      }
    }
    return true;
  } else {
    return false;
  }
};
export const calculateProfileEffectHeight = function calculateProfileEffectHeight(layerConfig, width) {
  return width / require(9433) /* DEFAULT_PROFILE_EFFECT_WH_RATIO */.getAssetWHRatio(layerConfig);
};
