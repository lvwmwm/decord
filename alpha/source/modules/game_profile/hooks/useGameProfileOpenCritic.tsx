// Module ID: 8350
// Function ID: 8351
// Name: useGameProfileOpenCritic
// Dependencies: [8351, 1115, 8352, 8353, 8354, 8355, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8350 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8351 */;
import _modDef8352 from "module_8352" /* 8352 */;
import _modDef8353 from "module_8353" /* 8353 */;
import _modDef8354 from "module_8354" /* 8354 */;
import _modDef8355 from "module_8355" /* 8355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(8351).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(8351).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(8351).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8352;
  } else if (tmp(8351).OpenCriticTier.STRONG === tier) {
    return _modDef8353;
  } else if (tmp(8351).OpenCriticTier.FAIR === tier) {
    return _modDef8354;
  } else if (tmp(8351).OpenCriticTier.WEAK === tier) {
    return _modDef8355;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8351).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8351).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8351).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
