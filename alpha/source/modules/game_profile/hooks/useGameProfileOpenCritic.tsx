// Module ID: 8177
// Function ID: 8178
// Name: useGameProfileOpenCritic
// Dependencies: [8178, 1115, 8179, 8180, 8181, 8182, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8177 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8178 */;
import _modDef8179 from "module_8179" /* 8179 */;
import _modDef8180 from "module_8180" /* 8180 */;
import _modDef8181 from "module_8181" /* 8181 */;
import _modDef8182 from "module_8182" /* 8182 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(8178).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(8178).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(8178).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8179;
  } else if (tmp(8178).OpenCriticTier.STRONG === tier) {
    return _modDef8180;
  } else if (tmp(8178).OpenCriticTier.FAIR === tier) {
    return _modDef8181;
  } else if (tmp(8178).OpenCriticTier.WEAK === tier) {
    return _modDef8182;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8178).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8178).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8178).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
