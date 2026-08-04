// Module ID: 12077
// Function ID: 12078
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12078, 9321, 1901, 2]
// Exports: default

// Module 12077 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12078)(_location) && !importDefault(9321)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
