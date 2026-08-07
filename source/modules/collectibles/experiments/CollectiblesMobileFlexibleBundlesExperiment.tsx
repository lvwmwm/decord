// Module ID: 9329
// Function ID: 9330
// Name: useCollectiblesMobileFlexibleBundlesExperiment
// Dependencies: [1452, 2]
// Exports: useCollectiblesMobileFlexibleBundlesExperiment

// Module 9329 (useCollectiblesMobileFlexibleBundlesExperiment)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-05-mobile-collectibles-flexible-bundles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesMobileFlexibleBundlesExperiment.tsx");

export const useCollectiblesMobileFlexibleBundlesExperiment = function useCollectiblesMobileFlexibleBundlesExperiment(BundleProductDetailsActionSheetInfo) {
  return closure_0.useConfig({ location: BundleProductDetailsActionSheetInfo });
};
