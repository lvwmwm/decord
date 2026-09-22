// Module ID: 8850
// Function ID: 8851
// Name: useGameProfileOpenCritic
// Dependencies: [8851, 1114, 8852, 8853, 8854, 8855, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8850 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8851 */;
import _modDef8852 from "module_8852" /* 8852 */;
import _modDef8853 from "module_8853" /* 8853 */;
import _modDef8854 from "module_8854" /* 8854 */;
import _modDef8855 from "module_8855" /* 8855 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t.aZej2g);
  } else if (tmp(8851).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.MLxnSg);
  } else if (tmp(8851).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["3f19KA"]);
  } else if (tmp(8851).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8852;
  } else if (tmp(8851).OpenCriticTier.STRONG === tier) {
    return _modDef8853;
  } else if (tmp(8851).OpenCriticTier.FAIR === tier) {
    return _modDef8854;
  } else if (tmp(8851).OpenCriticTier.WEAK === tier) {
    return _modDef8855;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8851).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8851).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8851).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
