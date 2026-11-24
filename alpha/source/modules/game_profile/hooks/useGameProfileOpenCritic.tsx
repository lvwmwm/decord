// Module ID: 14000
// Function ID: 14001
// Name: useGameProfileOpenCritic
// Dependencies: [14001, 1112, 14002, 14003, 14004, 14005, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 14000 (useGameProfileOpenCritic)
import intl5 from "intl" /* 1112 */;
import OpenCriticTier from "OpenCriticTier" /* 14001 */;
import _modDef14002 from "module_14002" /* 14002 */;
import _modDef14003 from "module_14003" /* 14003 */;
import _modDef14004 from "module_14004" /* 14004 */;
import _modDef14005 from "module_14005" /* 14005 */;
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
    return _modDef14002;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef14003;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef14004;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef14005;
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
