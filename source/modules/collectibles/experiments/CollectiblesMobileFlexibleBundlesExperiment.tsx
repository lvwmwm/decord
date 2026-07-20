// Module ID: 8221
// Function ID: 64950
// Name: useCollectiblesMobileFlexibleBundlesExperiment
// Dependencies: []
// Exports: useCollectiblesMobileFlexibleBundlesExperiment

// Module 8221 (useCollectiblesMobileFlexibleBundlesExperiment)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/collectibles/experiments/CollectiblesMobileFlexibleBundlesExperiment.tsx");

export const useCollectiblesMobileFlexibleBundlesExperiment = function useCollectiblesMobileFlexibleBundlesExperiment(BundleProductDetailsActionSheetInfo) {
  return closure_0.useConfig({ location: BundleProductDetailsActionSheetInfo });
};
