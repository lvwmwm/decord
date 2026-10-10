// Module ID: 8937
// Function ID: 8938
// Name: useGameProfileOpenCritic
// Dependencies: [8938, 1126, 8939, 8940, 8941, 8942, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8937 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1126 */;
import OpenCriticTier from "OpenCriticTier" /* 8938 */;
import _modDef8939 from "module_8939" /* 8939 */;
import _modDef8940 from "module_8940" /* 8940 */;
import _modDef8941 from "module_8941" /* 8941 */;
import _modDef8942 from "module_8942" /* 8942 */;
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
    return _modDef8939;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef8940;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef8941;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef8942;
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
