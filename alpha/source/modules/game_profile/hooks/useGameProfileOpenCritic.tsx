// Module ID: 9356
// Function ID: 9357
// Name: useGameProfileOpenCritic
// Dependencies: [9357, 1125, 9358, 9359, 9360, 9361, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9356 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1125 */;
import OpenCriticTier from "OpenCriticTier" /* 9357 */;
import _modDef9358 from "module_9358" /* 9358 */;
import _modDef9359 from "module_9359" /* 9359 */;
import _modDef9360 from "module_9360" /* 9360 */;
import _modDef9361 from "module_9361" /* 9361 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1125).intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1125).intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1125).intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = tmp(1125).intl;
    return intl.string(intl5.t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9358;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9359;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9360;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9361;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
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
};
