// Module ID: 11911
// Function ID: 11912
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [11912, 8700, 1901, 2]
// Exports: default

// Module 11911 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(11912)(_location) && !importDefault(8700)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
