// Module ID: 8661
// Function ID: 68545
// Name: apexExperiment
// Dependencies: []
// Exports: getIsProfileFrameGiftingEnabled, useIsProfileFrameGiftingEnabled

// Module 8661 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: "/assets/design/components/Icon/native/redesign/generated/images", 1387159956: 24, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
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
