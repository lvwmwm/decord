// Module ID: 8896
// Function ID: 8897
// Name: ProfileEffectUtils
// Dependencies: [8897, 2]
// Exports: calculateProfileEffectHeight, shouldAnimate

// Module 8896 (ProfileEffectUtils)
import getAssetWHRatio from "getAssetWHRatio" /* 8897 */;
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
