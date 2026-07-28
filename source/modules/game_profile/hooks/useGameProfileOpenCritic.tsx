// Module ID: 8500
// Function ID: 67535
// Name: getOpenCriticTierText
// Dependencies: [8501, 1212, 8502, 8503, 8504, 8505, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8500 (getOpenCriticTierText)
const result = require("metadata").fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (require(8501) /* OpenCriticTier */.OpenCriticTier.MIGHTY === tier) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.aZej2g);
  } else if (require(8501) /* OpenCriticTier */.OpenCriticTier.STRONG === tier) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.MLxnSg);
  } else if (require(8501) /* OpenCriticTier */.OpenCriticTier.FAIR === tier) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["3f19KA"]);
  } else if (require(8501) /* OpenCriticTier */.OpenCriticTier.WEAK === tier) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (require(8501) /* OpenCriticTier */.OpenCriticTier.MIGHTY === tier) {
    return importDefault(8502);
  } else if (require(8501) /* OpenCriticTier */.OpenCriticTier.STRONG === tier) {
    return importDefault(8503);
  } else if (require(8501) /* OpenCriticTier */.OpenCriticTier.FAIR === tier) {
    return importDefault(8504);
  } else if (require(8501) /* OpenCriticTier */.OpenCriticTier.WEAK === tier) {
    return importDefault(8505);
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let str = "#fc430a";
  if (require(8501) /* OpenCriticTier */.OpenCriticTier.MIGHTY !== tier) {
    str = "#9e00b4";
    if (require(8501) /* OpenCriticTier */.OpenCriticTier.STRONG !== tier) {
      str = "#4aa1ce";
      if (require(8501) /* OpenCriticTier */.OpenCriticTier.FAIR !== tier) {
        str = "";
        if (require(8501) /* OpenCriticTier */.OpenCriticTier.WEAK === tier) {
          str = "#80b06a";
        }
      }
    }
  }
  const obj = { foregroundColor: str, backgroundColor: "#2e2e2e" };
  return obj;
};
