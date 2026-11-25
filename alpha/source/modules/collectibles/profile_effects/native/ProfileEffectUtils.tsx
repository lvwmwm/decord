// Module ID: 9431
// Function ID: 9432
// Name: ProfileEffectUtils
// Dependencies: [9432, 2]
// Exports: calculateProfileEffectHeight, shouldAnimate

// Module 9431 (ProfileEffectUtils)
import getAssetWHRatio from "getAssetWHRatio" /* 9432 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

export function shouldAnimate(dependencyMap, current) {
  if (current >= dependencyMap.start) {
    if (!dependencyMap.loop) {
      if (current > dependencyMap.duration + dependencyMap.start) {
        return false;
      }
    }
    if (dependencyMap.loop) {
      if (undefined !== dependencyMap.loopDelay) {
        if (dependencyMap.loopDelay > 0) {
          let loopDelay;
          const duration = dependencyMap.duration;
          if (dependencyMap != null) {
            loopDelay = dependencyMap.loopDelay;
          }
          if ((current - dependencyMap.start) % (duration + loopDelay) > dependencyMap.duration) {
            return false;
          }
        }
      }
    }
    return true;
  } else {
    return false;
  }
}
export function calculateProfileEffectHeight(layerConfig, width) {
  const obj = getAssetWHRatio;
  return width / obj.getAssetWHRatio(layerConfig);
}
