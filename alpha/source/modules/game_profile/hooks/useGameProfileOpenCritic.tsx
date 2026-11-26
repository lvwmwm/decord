// Module ID: 14175
// Function ID: 14176
// Name: useGameProfileOpenCritic
// Dependencies: [14176, 1112, 14177, 14178, 14179, 14180, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 14175 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1112 */;
import OpenCriticTier from "OpenCriticTier" /* 14176 */;
import _modDef14177 from "module_14177" /* 14177 */;
import _modDef14178 from "module_14178" /* 14178 */;
import _modDef14179 from "module_14179" /* 14179 */;
import _modDef14180 from "module_14180" /* 14180 */;
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
    return _modDef14177;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef14178;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef14179;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef14180;
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
