// Module ID: 12227
// Function ID: 12228
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12228, 9449, 1949, 2]
// Exports: default

// Module 12227 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12228)(_location) && !importDefault(9449)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
