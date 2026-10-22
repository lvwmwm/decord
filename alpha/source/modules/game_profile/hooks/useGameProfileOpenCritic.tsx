// Module ID: 9292
// Function ID: 9293
// Name: useGameProfileOpenCritic
// Dependencies: [9293, 1128, 9294, 9295, 9296, 9297, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9292 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1128 */;
import OpenCriticTier from "OpenCriticTier" /* 9293 */;
import _modDef9294 from "module_9294" /* 9294 */;
import _modDef9295 from "module_9295" /* 9295 */;
import _modDef9296 from "module_9296" /* 9296 */;
import _modDef9297 from "module_9297" /* 9297 */;
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
    return _modDef9294;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9295;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9296;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9297;
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
