// Module ID: 12229
// Function ID: 12230
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12230, 9453, 1949, 2]
// Exports: default

// Module 12229 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12230)(_location) && !importDefault(9453)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
