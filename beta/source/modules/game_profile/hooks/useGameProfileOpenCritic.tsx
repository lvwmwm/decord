// Module ID: 10340
// Function ID: 10341
// Name: useGameProfileOpenCritic
// Dependencies: [10341, 1113, 10342, 10343, 10344, 10345, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 10340 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1113 */;
import OpenCriticTier from "OpenCriticTier" /* 10341 */;
import _modDef10342 from "module_10342" /* 10342 */;
import _modDef10343 from "module_10343" /* 10343 */;
import _modDef10344 from "module_10344" /* 10344 */;
import _modDef10345 from "module_10345" /* 10345 */;
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
    return _modDef10342;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef10343;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef10344;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef10345;
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
