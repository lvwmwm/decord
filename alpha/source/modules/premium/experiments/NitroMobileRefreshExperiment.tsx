// Module ID: 15625
// Function ID: 15626
// Name: NitroMobileRefreshExperiment
// Dependencies: [1449, 2]
// Exports: useIsNitroMobileRefreshEnabled

// Module 15625 (NitroMobileRefreshExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-11-nitro-mobile-refresh", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/NitroMobileRefreshExperiment.tsx");

export function useIsNitroMobileRefreshEnabled(PremiumMarketingPage) {
  const obj = { location: PremiumMarketingPage };
  return closure_0.useConfig(obj).enabled;
}
