// Module ID: 8977
// Function ID: 8978
// Name: ProfileEffectUtils
// Dependencies: [8978, 2]
// Exports: calculateProfileEffectHeight, shouldAnimate

// Module 8977 (ProfileEffectUtils)
import getAssetWHRatio from "getAssetWHRatio" /* 8978 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

export const shouldAnimate = function shouldAnimate(entering, current) {
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
};
export const calculateProfileEffectHeight = function calculateProfileEffectHeight(layerConfig, width) {
  const obj = getAssetWHRatio;
  return width / obj.getAssetWHRatio(layerConfig);
};
