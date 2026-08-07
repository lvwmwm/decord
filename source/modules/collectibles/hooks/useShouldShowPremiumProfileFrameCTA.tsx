// Module ID: 12098
// Function ID: 12099
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12099, 9338, 1930, 2]
// Exports: default

// Module 12098 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12099)(_location) && !importDefault(9338)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1930) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
