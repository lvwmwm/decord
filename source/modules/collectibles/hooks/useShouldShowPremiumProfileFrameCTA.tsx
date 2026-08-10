// Module ID: 12167
// Function ID: 12168
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12168, 9403, 1930, 2]
// Exports: default

// Module 12167 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12168)(_location) && !importDefault(9403)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1930) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
