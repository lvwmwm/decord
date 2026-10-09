// Module ID: 8918
// Function ID: 8919
// Name: useGameProfileOpenCritic
// Dependencies: [8919, 1126, 8920, 8921, 8922, 8923, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8918 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1126 */;
import OpenCriticTier from "OpenCriticTier" /* 8919 */;
import _modDef8920 from "module_8920" /* 8920 */;
import _modDef8921 from "module_8921" /* 8921 */;
import _modDef8922 from "module_8922" /* 8922 */;
import _modDef8923 from "module_8923" /* 8923 */;
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
    return _modDef8920;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef8921;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef8922;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef8923;
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
