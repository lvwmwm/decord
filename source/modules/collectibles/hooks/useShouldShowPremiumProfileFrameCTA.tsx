// Module ID: 11994
// Function ID: 11995
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [11995, 9233, 1949, 2]
// Exports: default

// Module 11994 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(11995)(_location) && !importDefault(9233)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
