// Module ID: 12248
// Function ID: 12249
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12249, 9466, 1949, 2]
// Exports: default

// Module 12248 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12249)(_location) && !importDefault(9466)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
