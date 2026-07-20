// Module ID: 11826
// Function ID: 91687
// Name: apexExperiment
// Dependencies: []
// Exports: useIsShopCardImpressionMobileEnabled

// Module 11826 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: -1410317980, -1845285747: -144637951, defaultConfig: { enableShopCardImpression: false }, variations: { [0]: { enableShopCardImpression: false }, [1]: { enableShopCardImpression: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesShopCardImpressionMobileExperiment.tsx");

export default apexExperiment;
export const useIsShopCardImpressionMobileEnabled = function useIsShopCardImpressionMobileEnabled(CollectiblesShopCardV2) {
  return apexExperiment.useConfig({ location: CollectiblesShopCardV2 }).enableShopCardImpression;
};
