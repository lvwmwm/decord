// Module ID: 12083
// Function ID: 12084
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12084, 9321, 1930, 2]
// Exports: default

// Module 12083 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12084)(_location) && !importDefault(9321)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1930) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
