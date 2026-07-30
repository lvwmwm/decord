// Module ID: 11907
// Function ID: 11908
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [11908, 8696, 1901, 2]
// Exports: default

// Module 11907 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(11908)(_location) && !importDefault(8696)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
