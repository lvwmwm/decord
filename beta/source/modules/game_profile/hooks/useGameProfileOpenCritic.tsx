// Module ID: 8185
// Function ID: 8186
// Name: useGameProfileOpenCritic
// Dependencies: [8186, 1115, 8187, 8188, 8189, 8190, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8185 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1115 */;
import OpenCriticTier from "OpenCriticTier" /* 8186 */;
import _modDef8187 from "module_8187" /* 8187 */;
import _modDef8188 from "module_8188" /* 8188 */;
import _modDef8189 from "module_8189" /* 8189 */;
import _modDef8190 from "module_8190" /* 8190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(intl5.t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8187;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef8188;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef8189;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef8190;
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
