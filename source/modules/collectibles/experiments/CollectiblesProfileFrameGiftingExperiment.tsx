// Module ID: 8657
// Function ID: 68522
// Name: apexExperiment
// Dependencies: []
// Exports: getIsProfileFrameGiftingEnabled, useIsProfileFrameGiftingEnabled

// Module 8657 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: "/assets/design/components/Icon/native/redesign/generated/images", -1845285747: 24, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
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
