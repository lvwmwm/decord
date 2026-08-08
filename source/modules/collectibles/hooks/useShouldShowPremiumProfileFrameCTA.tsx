// Module ID: 12165
// Function ID: 12166
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12166, 9403, 1930, 2]
// Exports: default

// Module 12165 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12166)(_location) && !importDefault(9403)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1930) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
