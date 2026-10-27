// Module ID: 9324
// Function ID: 9325
// Name: useGameProfileOpenCritic
// Dependencies: [9325, 1125, 9326, 9327, 9328, 9329, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9324 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1125 */;
import OpenCriticTier from "OpenCriticTier" /* 9325 */;
import _modDef9326 from "module_9326" /* 9326 */;
import _modDef9327 from "module_9327" /* 9327 */;
import _modDef9328 from "module_9328" /* 9328 */;
import _modDef9329 from "module_9329" /* 9329 */;
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
    return _modDef9326;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9327;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9328;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9329;
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
