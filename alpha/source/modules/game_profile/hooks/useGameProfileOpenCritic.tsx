// Module ID: 9008
// Function ID: 9009
// Name: useGameProfileOpenCritic
// Dependencies: [9009, 1115, 9010, 9011, 9012, 9013, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9008 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 9009 */;
import _modDef9010 from "module_9010" /* 9010 */;
import _modDef9011 from "module_9011" /* 9011 */;
import _modDef9012 from "module_9012" /* 9012 */;
import _modDef9013 from "module_9013" /* 9013 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(9009).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(9009).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(9009).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9010;
  } else if (tmp(9009).OpenCriticTier.STRONG === tier) {
    return _modDef9011;
  } else if (tmp(9009).OpenCriticTier.FAIR === tier) {
    return _modDef9012;
  } else if (tmp(9009).OpenCriticTier.WEAK === tier) {
    return _modDef9013;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(9009).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(9009).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(9009).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
