// Module ID: 11834
// Function ID: 91736
// Name: apexExperiment
// Dependencies: []
// Exports: useIsShopCardImpressionMobileEnabled

// Module 11834 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: true, DateToSystemTimezoneSetter: "lg", defaultConfig: { enableShopCardImpression: false }, variations: { [0]: { enableShopCardImpression: false }, [1]: { enableShopCardImpression: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesShopCardImpressionMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopCardImpressionMobileEnabled = function useIsShopCardImpressionMobileEnabled(CollectiblesShopCardV2) {
  return apexExperiment.useConfig({ location: CollectiblesShopCardV2 }).enableShopCardImpression;
};
