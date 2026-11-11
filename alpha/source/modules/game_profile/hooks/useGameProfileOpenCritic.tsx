// Module ID: 10273
// Function ID: 10274
// Name: useGameProfileOpenCritic
// Dependencies: [10274, 1113, 10275, 10276, 10277, 10278, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 10273 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1113 */;
import OpenCriticTier from "OpenCriticTier" /* 10274 */;
import _modDef10275 from "module_10275" /* 10275 */;
import _modDef10276 from "module_10276" /* 10276 */;
import _modDef10277 from "module_10277" /* 10277 */;
import _modDef10278 from "module_10278" /* 10278 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1113).intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1113).intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1113).intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = tmp(1113).intl;
    return intl.string(intl5.t.jtVgSh);
  }
}
export function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef10275;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef10276;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef10277;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef10278;
  }
}
export function getOpenCriticCircleRatingColor(tier) {
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
}
