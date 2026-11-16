// Module ID: 15332
// Function ID: 15333
// Name: NitroMobileRefreshExperiment
// Dependencies: [1452, 2]
// Exports: useIsNitroMobileRefreshEnabled

// Module 15332 (NitroMobileRefreshExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-11-nitro-mobile-refresh", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/NitroMobileRefreshExperiment.tsx");

export function useIsNitroMobileRefreshEnabled(PremiumMarketingPage) {
  const obj = { location: PremiumMarketingPage };
  return closure_0.useConfig(obj).enabled;
}
