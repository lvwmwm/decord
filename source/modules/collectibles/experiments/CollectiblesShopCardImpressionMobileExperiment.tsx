// Module ID: 11833
// Function ID: 91710
// Name: apexExperiment
// Dependencies: []
// Exports: useIsShopCardImpressionMobileEnabled

// Module 11833 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "enableModuleArgumentNSNullConversionIOS", 0: "getPrototypeOf", defaultConfig: { enableShopCardImpression: false }, variations: { [0]: { enableShopCardImpression: false }, [1]: { enableShopCardImpression: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesShopCardImpressionMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopCardImpressionMobileEnabled = function useIsShopCardImpressionMobileEnabled(CollectiblesShopCardV2) {
  return apexExperiment.useConfig({ location: CollectiblesShopCardV2 }).enableShopCardImpression;
};
