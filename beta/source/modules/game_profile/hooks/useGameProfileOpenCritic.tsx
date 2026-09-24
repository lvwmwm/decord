// Module ID: 9033
// Function ID: 9034
// Name: useGameProfileOpenCritic
// Dependencies: [9034, 1119, 9035, 9036, 9037, 9038, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9033 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 9034 */;
import _modDef9035 from "module_9035" /* 9035 */;
import _modDef9036 from "module_9036" /* 9036 */;
import _modDef9037 from "module_9037" /* 9037 */;
import _modDef9038 from "module_9038" /* 9038 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1119).intl;
    return intl4.string(tmp(1119).t.aZej2g);
  } else if (tmp(9034).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1119).intl;
    return intl3.string(tmp(1119).t.MLxnSg);
  } else if (tmp(9034).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1119).intl;
    return intl2.string(tmp(1119).t["3f19KA"]);
  } else if (tmp(9034).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1119).intl;
    return intl.string(tmp(1119).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9035;
  } else if (tmp(9034).OpenCriticTier.STRONG === tier) {
    return _modDef9036;
  } else if (tmp(9034).OpenCriticTier.FAIR === tier) {
    return _modDef9037;
  } else if (tmp(9034).OpenCriticTier.WEAK === tier) {
    return _modDef9038;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(9034).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(9034).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(9034).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
