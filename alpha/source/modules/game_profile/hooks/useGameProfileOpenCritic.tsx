// Module ID: 9281
// Function ID: 9282
// Name: useGameProfileOpenCritic
// Dependencies: [9282, 1128, 9283, 9284, 9285, 9286, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9281 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1128 */;
import OpenCriticTier from "OpenCriticTier" /* 9282 */;
import _modDef9283 from "module_9283" /* 9283 */;
import _modDef9284 from "module_9284" /* 9284 */;
import _modDef9285 from "module_9285" /* 9285 */;
import _modDef9286 from "module_9286" /* 9286 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1128).intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1128).intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1128).intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = tmp(1128).intl;
    return intl.string(intl5.t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9283;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9284;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9285;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9286;
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
