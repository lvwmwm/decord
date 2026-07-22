// Module ID: 8215
// Function ID: 64946
// Name: shouldAnimate
// Dependencies: []
// Exports: calculateProfileEffectHeight, shouldAnimate

// Module 8215 (shouldAnimate)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

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
  return width / require(dependencyMap[0]).getAssetWHRatio(layerConfig);
};
