// Module ID: 9035
// Function ID: 9036
// Name: useGameProfileOpenCritic
// Dependencies: [9036, 1115, 9037, 9038, 9039, 9040, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9035 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 9036 */;
import _modDef9037 from "module_9037" /* 9037 */;
import _modDef9038 from "module_9038" /* 9038 */;
import _modDef9039 from "module_9039" /* 9039 */;
import _modDef9040 from "module_9040" /* 9040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(9036).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(9036).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(9036).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9037;
  } else if (tmp(9036).OpenCriticTier.STRONG === tier) {
    return _modDef9038;
  } else if (tmp(9036).OpenCriticTier.FAIR === tier) {
    return _modDef9039;
  } else if (tmp(9036).OpenCriticTier.WEAK === tier) {
    return _modDef9040;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(9036).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(9036).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(9036).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
