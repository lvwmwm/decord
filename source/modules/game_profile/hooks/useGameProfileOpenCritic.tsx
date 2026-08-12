// Module ID: 9366
// Function ID: 9367
// Name: getOpenCriticTierText
// Dependencies: [9367, 1236, 9368, 9369, 9370, 9371, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 9366 (getOpenCriticTierText)
const result = require("metadata").fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (require(9367) /* OpenCriticTier */.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1236).intl;
    return intl4.string(tmp(1236).t.aZej2g);
  } else if (tmp(9367).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1236).intl;
    return intl3.string(tmp(1236).t.MLxnSg);
  } else if (tmp(9367).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1236).intl;
    return intl2.string(tmp(1236).t["3f19KA"]);
  } else if (tmp(9367).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (require(9367) /* OpenCriticTier */.OpenCriticTier.MIGHTY === tier) {
    return importDefault(9368);
  } else if (tmp(9367).OpenCriticTier.STRONG === tier) {
    return importDefault(9369);
  } else if (tmp(9367).OpenCriticTier.FAIR === tier) {
    return importDefault(9370);
  } else if (tmp(9367).OpenCriticTier.WEAK === tier) {
    return importDefault(9371);
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (require(9367) /* OpenCriticTier */.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(9367).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(9367).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(9367).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
