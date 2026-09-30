// Module ID: 8381
// Function ID: 8382
// Name: useGameProfileOpenCritic
// Dependencies: [8382, 1115, 8383, 8384, 8385, 8386, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8381 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8382 */;
import _modDef8383 from "module_8383" /* 8383 */;
import _modDef8384 from "module_8384" /* 8384 */;
import _modDef8385 from "module_8385" /* 8385 */;
import _modDef8386 from "module_8386" /* 8386 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(8382).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(8382).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(8382).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8383;
  } else if (tmp(8382).OpenCriticTier.STRONG === tier) {
    return _modDef8384;
  } else if (tmp(8382).OpenCriticTier.FAIR === tier) {
    return _modDef8385;
  } else if (tmp(8382).OpenCriticTier.WEAK === tier) {
    return _modDef8386;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8382).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8382).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8382).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
