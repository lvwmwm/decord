// Module ID: 9165
// Function ID: 9166
// Name: useGameProfileOpenCritic
// Dependencies: [9166, 1128, 9167, 9168, 9169, 9170, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9165 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1128 */;
import OpenCriticTier from "OpenCriticTier" /* 9166 */;
import _modDef9167 from "module_9167" /* 9167 */;
import _modDef9168 from "module_9168" /* 9168 */;
import _modDef9169 from "module_9169" /* 9169 */;
import _modDef9170 from "module_9170" /* 9170 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1128).intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1128).intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1128).intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = tmp(1128).intl;
    return intl.string(intl5.t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9167;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9168;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9169;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9170;
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
