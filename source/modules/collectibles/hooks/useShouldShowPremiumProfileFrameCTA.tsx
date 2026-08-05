// Module ID: 12049
// Function ID: 12050
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12050, 9292, 1901, 2]
// Exports: default

// Module 12049 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12050)(_location) && !importDefault(9292)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
