// Module ID: 11887
// Function ID: 91993
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [11888, 8676, 1877, 2]
// Exports: default

// Module 11887 (useShouldShowPremiumProfileFrameCTA)
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp = importDefault(11888)(_location);
  if (tmp) {
    tmp = !importDefault(8676)(_location);
  }
  if (tmp) {
    tmp = location.product.type === require(1877) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp;
};
