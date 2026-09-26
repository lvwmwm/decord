// Module ID: 14203
// Function ID: 14204
// Name: MobileNitroPreviewDirectCheckoutExperiment
// Dependencies: [1435, 2]
// Exports: useMobileNitroPreviewDirectCheckoutEnabled

// Module 14203 (MobileNitroPreviewDirectCheckoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-nitro-preview-direct-checkout", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const result = size.fileFinishedImporting("modules/premium/experiments/MobileNitroPreviewDirectCheckoutExperiment.tsx");

export const MobileNitroPreviewDirectCheckoutExperiment = apexExperiment;
export const useMobileNitroPreviewDirectCheckoutEnabled = function useMobileNitroPreviewDirectCheckoutEnabled() {
  return apexExperiment.useConfig({ location: "native.GetNitroCard" });
};
