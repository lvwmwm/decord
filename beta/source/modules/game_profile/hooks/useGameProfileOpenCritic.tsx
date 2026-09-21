// Module ID: 9003
// Function ID: 9004
// Name: useGameProfileOpenCritic
// Dependencies: [9004, 1115, 9005, 9006, 9007, 9008, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9003 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 9004 */;
import _modDef9005 from "module_9005" /* 9005 */;
import _modDef9006 from "module_9006" /* 9006 */;
import _modDef9007 from "module_9007" /* 9007 */;
import _modDef9008 from "module_9008" /* 9008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(9004).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(9004).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(9004).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9005;
  } else if (tmp(9004).OpenCriticTier.STRONG === tier) {
    return _modDef9006;
  } else if (tmp(9004).OpenCriticTier.FAIR === tier) {
    return _modDef9007;
  } else if (tmp(9004).OpenCriticTier.WEAK === tier) {
    return _modDef9008;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(9004).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(9004).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(9004).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
