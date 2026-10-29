// Module ID: 9459
// Function ID: 9460
// Name: ProfileEffectUtils
// Dependencies: [9460, 2]
// Exports: calculateProfileEffectHeight, shouldAnimate

// Module 9459 (ProfileEffectUtils)
import getAssetWHRatio from "getAssetWHRatio" /* 9460 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

export function shouldAnimate(entering, current) {
  if (current >= entering.start) {
    if (!entering.loop) {
      if (current > entering.duration + entering.start) {
        return false;
      }
    }
    if (entering.loop) {
      if (undefined !== entering.loopDelay) {
        if (entering.loopDelay > 0) {
          let loopDelay;
          const duration = entering.duration;
          if (entering != null) {
            loopDelay = entering.loopDelay;
          }
          if ((current - entering.start) % (duration + loopDelay) > entering.duration) {
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
