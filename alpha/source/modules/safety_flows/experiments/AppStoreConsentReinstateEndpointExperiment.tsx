// Module ID: 20234
// Function ID: 20235
// Name: AppStoreConsentReinstateEndpointExperiment
// Dependencies: [1449, 2]
// Exports: getIsAppStoreConsentReinstateEndpointEnabled

// Module 20234 (AppStoreConsentReinstateEndpointExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-app-store-consent-reinstate-endpoint", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/safety_flows/experiments/AppStoreConsentReinstateEndpointExperiment.tsx");

export function getIsAppStoreConsentReinstateEndpointEnabled(openSafetyFlow) {
  const obj = { location: openSafetyFlow };
  return config.getConfig(obj).enabled;
}
