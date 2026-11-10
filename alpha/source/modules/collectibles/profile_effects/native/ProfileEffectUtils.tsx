// Module ID: 9590
// Function ID: 9591
// Name: ProfileEffectUtils
// Dependencies: [9591, 2]
// Exports: calculateProfileEffectHeight, shouldAnimate

// Module 9590 (ProfileEffectUtils)
import getAssetWHRatio from "getAssetWHRatio" /* 9591 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

export function shouldAnimate(aPNGPlayerControls, current) {
  if (current >= aPNGPlayerControls.start) {
    if (!aPNGPlayerControls.loop) {
      if (current > aPNGPlayerControls.duration + aPNGPlayerControls.start) {
        return false;
      }
    }
    if (aPNGPlayerControls.loop) {
      if (undefined !== aPNGPlayerControls.loopDelay) {
        if (aPNGPlayerControls.loopDelay > 0) {
          let loopDelay;
          const duration = aPNGPlayerControls.duration;
          if (aPNGPlayerControls != null) {
            loopDelay = aPNGPlayerControls.loopDelay;
          }
          if ((current - aPNGPlayerControls.start) % (duration + loopDelay) > aPNGPlayerControls.duration) {
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
