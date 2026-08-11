// Module ID: 12170
// Function ID: 12171
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12171, 9409, 1949, 2]
// Exports: default

// Module 12170 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12171)(_location) && !importDefault(9409)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
