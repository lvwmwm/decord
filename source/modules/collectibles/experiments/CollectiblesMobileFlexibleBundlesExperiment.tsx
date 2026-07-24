// Module ID: 8277
// Function ID: 65252
// Name: useCollectiblesMobileFlexibleBundlesExperiment
// Dependencies: [1428, 2]
// Exports: useCollectiblesMobileFlexibleBundlesExperiment

// Module 8277 (useCollectiblesMobileFlexibleBundlesExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-mobile-collectibles-flexible-bundles", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesMobileFlexibleBundlesExperiment.tsx");

export const useCollectiblesMobileFlexibleBundlesExperiment = function useCollectiblesMobileFlexibleBundlesExperiment(BundleProductDetailsActionSheetInfo) {
  return closure_0.useConfig({ location: BundleProductDetailsActionSheetInfo });
};
