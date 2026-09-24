// Module ID: 9083
// Function ID: 9084
// Name: useGameProfileOpenCritic
// Dependencies: [9084, 1115, 9085, 9086, 9087, 9088, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9083 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 9084 */;
import _modDef9085 from "module_9085" /* 9085 */;
import _modDef9086 from "module_9086" /* 9086 */;
import _modDef9087 from "module_9087" /* 9087 */;
import _modDef9088 from "module_9088" /* 9088 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(9084).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(9084).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(9084).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9085;
  } else if (tmp(9084).OpenCriticTier.STRONG === tier) {
    return _modDef9086;
  } else if (tmp(9084).OpenCriticTier.FAIR === tier) {
    return _modDef9087;
  } else if (tmp(9084).OpenCriticTier.WEAK === tier) {
    return _modDef9088;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(9084).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(9084).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(9084).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
