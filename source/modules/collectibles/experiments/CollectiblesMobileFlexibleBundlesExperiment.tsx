// Module ID: 9440
// Function ID: 9441
// Name: useCollectiblesMobileFlexibleBundlesExperiment
// Dependencies: [1471, 2]
// Exports: useCollectiblesMobileFlexibleBundlesExperiment

// Module 9440 (useCollectiblesMobileFlexibleBundlesExperiment)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-05-mobile-collectibles-flexible-bundles", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesMobileFlexibleBundlesExperiment.tsx");

export const useCollectiblesMobileFlexibleBundlesExperiment = function useCollectiblesMobileFlexibleBundlesExperiment(BundleProductDetailsActionSheetInfo) {
  return closure_0.useConfig({ location: BundleProductDetailsActionSheetInfo });
};
