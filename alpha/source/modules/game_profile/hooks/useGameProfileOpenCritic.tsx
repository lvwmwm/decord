// Module ID: 9360
// Function ID: 9361
// Name: useGameProfileOpenCritic
// Dependencies: [9361, 1125, 9362, 9363, 9364, 9365, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9360 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1125 */;
import OpenCriticTier from "OpenCriticTier" /* 9361 */;
import _modDef9362 from "module_9362" /* 9362 */;
import _modDef9363 from "module_9363" /* 9363 */;
import _modDef9364 from "module_9364" /* 9364 */;
import _modDef9365 from "module_9365" /* 9365 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1125).intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1125).intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1125).intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = tmp(1125).intl;
    return intl.string(intl5.t.jtVgSh);
  }
}
export function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9362;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9363;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9364;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9365;
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
