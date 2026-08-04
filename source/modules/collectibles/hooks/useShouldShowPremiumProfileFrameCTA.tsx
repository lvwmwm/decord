// Module ID: 12078
// Function ID: 12079
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12079, 9321, 1901, 2]
// Exports: default

// Module 12078 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12079)(_location) && !importDefault(9321)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
