// Module ID: 9830
// Function ID: 9831
// Name: useGameProfileOpenCritic
// Dependencies: [9831, 1112, 9832, 9833, 9834, 9835, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9830 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1112 */;
import OpenCriticTier from "OpenCriticTier" /* 9831 */;
import _modDef9832 from "module_9832" /* 9832 */;
import _modDef9833 from "module_9833" /* 9833 */;
import _modDef9834 from "module_9834" /* 9834 */;
import _modDef9835 from "module_9835" /* 9835 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1112).intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1112).intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1112).intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = tmp(1112).intl;
    return intl.string(intl5.t.jtVgSh);
  }
}
export function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9832;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9833;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9834;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9835;
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
