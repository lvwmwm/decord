// Module ID: 11867
// Function ID: 92013
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [11868, 8744, 1876, 2]
// Exports: default

// Module 11867 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp = importDefault(11868)(_location);
  if (tmp) {
    tmp = !importDefault(8744)(_location);
  }
  if (tmp) {
    tmp = location.product.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp;
};
