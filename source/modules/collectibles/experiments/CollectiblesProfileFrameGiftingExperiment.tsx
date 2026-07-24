// Module ID: 8710
// Function ID: 68817
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getIsProfileFrameGiftingEnabled, useIsProfileFrameGiftingEnabled

// Module 8710 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-profile-frame-gifting", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFrameGiftingExperiment.tsx");

export default apexExperiment;
export const getIsProfileFrameGiftingEnabled = function getIsProfileFrameGiftingEnabled(isWishlistableCollectiblesProduct) {
  return apexExperiment.getConfig({ location: isWishlistableCollectiblesProduct }).enabled;
};
export const useIsProfileFrameGiftingEnabled = function useIsProfileFrameGiftingEnabled(CollectiblesWishlistItemCard) {
  return apexExperiment.useConfig({ location: CollectiblesWishlistItemCard }).enabled;
};
