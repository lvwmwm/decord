// Module ID: 8221
// Function ID: 64983
// Name: shouldAnimate
// Dependencies: [8222, 2]
// Exports: calculateProfileEffectHeight, shouldAnimate

// Module 8221 (shouldAnimate)
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
          if (null != start) {
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
  return width / require(8222) /* getPositiveValue */.getAssetWHRatio(layerConfig);
};
