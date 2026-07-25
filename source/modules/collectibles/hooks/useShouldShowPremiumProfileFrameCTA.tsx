// Module ID: 11843
// Function ID: 91818
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [11844, 8632, 1877, 2]
// Exports: default

// Module 11843 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp = importDefault(11844)(_location);
  if (tmp) {
    tmp = !importDefault(8632)(_location);
  }
  if (tmp) {
    tmp = location.product.type === require(1877) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp;
};
