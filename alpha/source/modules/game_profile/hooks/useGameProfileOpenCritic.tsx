// Module ID: 9253
// Function ID: 9254
// Name: useGameProfileOpenCritic
// Dependencies: [9254, 1128, 9255, 9256, 9257, 9258, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9253 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1128 */;
import OpenCriticTier from "OpenCriticTier" /* 9254 */;
import _modDef9255 from "module_9255" /* 9255 */;
import _modDef9256 from "module_9256" /* 9256 */;
import _modDef9257 from "module_9257" /* 9257 */;
import _modDef9258 from "module_9258" /* 9258 */;
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
    return _modDef9255;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9256;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9257;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9258;
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
