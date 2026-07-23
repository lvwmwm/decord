// Module ID: 11840
// Function ID: 91775
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [11841, 8703, 1876, 2]
// Exports: default

// Module 11840 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp = importDefault(11841)(_location);
  if (tmp) {
    tmp = !importDefault(8703)(_location);
  }
  if (tmp) {
    tmp = location.product.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp;
};
