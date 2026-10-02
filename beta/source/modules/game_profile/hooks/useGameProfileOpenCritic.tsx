// Module ID: 8182
// Function ID: 8183
// Name: useGameProfileOpenCritic
// Dependencies: [8183, 1127, 8184, 8185, 8186, 8187, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8182 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1127 */;
import OpenCriticTier from "OpenCriticTier" /* 8183 */;
import _modDef8184 from "module_8184" /* 8184 */;
import _modDef8185 from "module_8185" /* 8185 */;
import _modDef8186 from "module_8186" /* 8186 */;
import _modDef8187 from "module_8187" /* 8187 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1127).intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1127).intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1127).intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = tmp(1127).intl;
    return intl.string(intl5.t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8184;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef8185;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef8186;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef8187;
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
