// Module ID: 9710
// Function ID: 9711
// Name: useGameProfileOpenCritic
// Dependencies: [9711, 1113, 9712, 9713, 9714, 9715, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9710 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1113 */;
import OpenCriticTier from "OpenCriticTier" /* 9711 */;
import _modDef9712 from "module_9712" /* 9712 */;
import _modDef9713 from "module_9713" /* 9713 */;
import _modDef9714 from "module_9714" /* 9714 */;
import _modDef9715 from "module_9715" /* 9715 */;
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
    return _modDef9712;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9713;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9714;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9715;
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
