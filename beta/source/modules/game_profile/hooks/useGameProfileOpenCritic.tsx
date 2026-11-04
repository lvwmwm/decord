// Module ID: 9394
// Function ID: 9395
// Name: useGameProfileOpenCritic
// Dependencies: [9395, 1113, 9396, 9397, 9398, 9399, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9394 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1113 */;
import OpenCriticTier from "OpenCriticTier" /* 9395 */;
import _modDef9396 from "module_9396" /* 9396 */;
import _modDef9397 from "module_9397" /* 9397 */;
import _modDef9398 from "module_9398" /* 9398 */;
import _modDef9399 from "module_9399" /* 9399 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1113).intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1113).intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1113).intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = tmp(1113).intl;
    return intl.string(intl5.t.jtVgSh);
  }
}
export function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9396;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9397;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9398;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9399;
  }
}
export function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (OpenCriticTier.OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (OpenCriticTier.OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
}
