// Module ID: 20364
// Function ID: 20365
// Name: AppStoreConsentReinstateEndpointExperiment
// Dependencies: [1452, 2]
// Exports: getIsAppStoreConsentReinstateEndpointEnabled

// Module 20364 (AppStoreConsentReinstateEndpointExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-app-store-consent-reinstate-endpoint", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/safety_flows/experiments/AppStoreConsentReinstateEndpointExperiment.tsx");

export function getIsAppStoreConsentReinstateEndpointEnabled(parentalConsentManager) {
  const obj = { location: parentalConsentManager };
  return config.getConfig(obj).enabled;
}
