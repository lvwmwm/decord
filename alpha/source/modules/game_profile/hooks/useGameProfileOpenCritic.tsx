// Module ID: 9079
// Function ID: 9080
// Name: useGameProfileOpenCritic
// Dependencies: [9080, 1115, 9081, 9082, 9083, 9084, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9079 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 9080 */;
import _modDef9081 from "module_9081" /* 9081 */;
import _modDef9082 from "module_9082" /* 9082 */;
import _modDef9083 from "module_9083" /* 9083 */;
import _modDef9084 from "module_9084" /* 9084 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(9080).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(9080).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(9080).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9081;
  } else if (tmp(9080).OpenCriticTier.STRONG === tier) {
    return _modDef9082;
  } else if (tmp(9080).OpenCriticTier.FAIR === tier) {
    return _modDef9083;
  } else if (tmp(9080).OpenCriticTier.WEAK === tier) {
    return _modDef9084;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(9080).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(9080).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(9080).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
