// Module ID: 8377
// Function ID: 8378
// Name: useGameProfileOpenCritic
// Dependencies: [8378, 1126, 8379, 8380, 8381, 8382, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8377 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1126 */;
import OpenCriticTier from "OpenCriticTier" /* 8378 */;
import _modDef8379 from "module_8379" /* 8379 */;
import _modDef8380 from "module_8380" /* 8380 */;
import _modDef8381 from "module_8381" /* 8381 */;
import _modDef8382 from "module_8382" /* 8382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1126).intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1126).intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1126).intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = tmp(1126).intl;
    return intl.string(intl5.t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8379;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef8380;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef8381;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef8382;
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
