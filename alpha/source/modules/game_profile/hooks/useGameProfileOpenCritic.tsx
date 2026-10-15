// Module ID: 9154
// Function ID: 9155
// Name: useGameProfileOpenCritic
// Dependencies: [9155, 1126, 9156, 9157, 9158, 9159, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9154 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1126 */;
import OpenCriticTier from "OpenCriticTier" /* 9155 */;
import _modDef9156 from "module_9156" /* 9156 */;
import _modDef9157 from "module_9157" /* 9157 */;
import _modDef9158 from "module_9158" /* 9158 */;
import _modDef9159 from "module_9159" /* 9159 */;
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
    return _modDef9156;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9157;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9158;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9159;
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
