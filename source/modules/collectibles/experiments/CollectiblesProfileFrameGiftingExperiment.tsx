// Module ID: 8662
// Function ID: 68557
// Name: apexExperiment
// Dependencies: []
// Exports: getIsProfileFrameGiftingEnabled, useIsProfileFrameGiftingEnabled

// Module 8662 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: "/assets/design/components/Icon/native/redesign/generated/images", DateToSystemTimezoneSetter: 24, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFrameGiftingExperiment.tsx");

export default apexExperiment;
export const getIsProfileFrameGiftingEnabled = function getIsProfileFrameGiftingEnabled(isWishlistableCollectiblesProduct) {
  return apexExperiment.getConfig({ location: isWishlistableCollectiblesProduct }).enabled;
};
export const useIsProfileFrameGiftingEnabled = function useIsProfileFrameGiftingEnabled(CollectiblesWishlistItemCard) {
  return apexExperiment.useConfig({ location: CollectiblesWishlistItemCard }).enabled;
};
