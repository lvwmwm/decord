// Module ID: 11844
// Function ID: 91823
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [11845, 8632, 1877, 2]
// Exports: default

// Module 11844 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp = importDefault(11845)(_location);
  if (tmp) {
    tmp = !importDefault(8632)(_location);
  }
  if (tmp) {
    tmp = location.product.type === require(1877) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp;
};
