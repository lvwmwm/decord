// Module ID: 8680
// Function ID: 68654
// Name: getOpenCriticTierText
// Dependencies: [8681, 1212, 8682, 8683, 8684, 8685, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8680 (getOpenCriticTierText)
const result = require("metadata").fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (require(8681) /* OpenCriticTier */.OpenCriticTier.MIGHTY === tier) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.aZej2g);
  } else if (require(8681) /* OpenCriticTier */.OpenCriticTier.STRONG === tier) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.MLxnSg);
  } else if (require(8681) /* OpenCriticTier */.OpenCriticTier.FAIR === tier) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["3f19KA"]);
  } else if (require(8681) /* OpenCriticTier */.OpenCriticTier.WEAK === tier) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (require(8681) /* OpenCriticTier */.OpenCriticTier.MIGHTY === tier) {
    return importDefault(8682);
  } else if (require(8681) /* OpenCriticTier */.OpenCriticTier.STRONG === tier) {
    return importDefault(8683);
  } else if (require(8681) /* OpenCriticTier */.OpenCriticTier.FAIR === tier) {
    return importDefault(8684);
  } else if (require(8681) /* OpenCriticTier */.OpenCriticTier.WEAK === tier) {
    return importDefault(8685);
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let str = "#fc430a";
  if (require(8681) /* OpenCriticTier */.OpenCriticTier.MIGHTY !== tier) {
    str = "#9e00b4";
    if (require(8681) /* OpenCriticTier */.OpenCriticTier.STRONG !== tier) {
      str = "#4aa1ce";
      if (require(8681) /* OpenCriticTier */.OpenCriticTier.FAIR !== tier) {
        str = "";
        if (require(8681) /* OpenCriticTier */.OpenCriticTier.WEAK === tier) {
          str = "#80b06a";
        }
      }
    }
  }
  const obj = { foregroundColor: str, backgroundColor: "#2e2e2e" };
  return obj;
};
