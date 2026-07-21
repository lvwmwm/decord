// Module ID: 8631
// Function ID: 68371
// Name: getOpenCriticTierText
// Dependencies: [297467904, 131072, 2860187648, 771751940, 1023410183, 2365587483, 1006632962]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8631 (getOpenCriticTierText)
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (require(dependencyMap[0]).OpenCriticTier.MIGHTY === tier) {
    const intl4 = require(dependencyMap[1]).intl;
    return intl4.string(require(dependencyMap[1]).t.aZej2g);
  } else if (require(dependencyMap[0]).OpenCriticTier.STRONG === tier) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(require(dependencyMap[1]).t.MLxnSg);
  } else if (require(dependencyMap[0]).OpenCriticTier.FAIR === tier) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.3f19KA);
  } else if (require(dependencyMap[0]).OpenCriticTier.WEAK === tier) {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (require(dependencyMap[0]).OpenCriticTier.MIGHTY === tier) {
    return importDefault(dependencyMap[2]);
  } else if (require(dependencyMap[0]).OpenCriticTier.STRONG === tier) {
    return importDefault(dependencyMap[3]);
  } else if (require(dependencyMap[0]).OpenCriticTier.FAIR === tier) {
    return importDefault(dependencyMap[4]);
  } else if (require(dependencyMap[0]).OpenCriticTier.WEAK === tier) {
    return importDefault(dependencyMap[5]);
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let str = "#fc430a";
  if (require(dependencyMap[0]).OpenCriticTier.MIGHTY !== tier) {
    str = "#9e00b4";
    if (require(dependencyMap[0]).OpenCriticTier.STRONG !== tier) {
      str = "#4aa1ce";
      if (require(dependencyMap[0]).OpenCriticTier.FAIR !== tier) {
        str = "";
        if (require(dependencyMap[0]).OpenCriticTier.WEAK === tier) {
          str = "#80b06a";
        }
      }
    }
  }
  const obj = { foregroundColor: str, backgroundColor: "#2e2e2e" };
  return obj;
};
