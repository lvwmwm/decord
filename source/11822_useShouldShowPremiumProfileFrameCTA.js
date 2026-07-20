// Module ID: 11822
// Function ID: 91677
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: []
// Exports: default

// Module 11822 (useShouldShowPremiumProfileFrameCTA)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp = importDefault(dependencyMap[0])(_location);
  if (tmp) {
    tmp = !importDefault(dependencyMap[1])(_location);
  }
  if (tmp) {
    tmp = location.product.type === require(dependencyMap[2]).CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp;
};
