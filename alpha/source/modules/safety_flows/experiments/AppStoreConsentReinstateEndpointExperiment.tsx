// Module ID: 19991
// Function ID: 19992
// Name: AppStoreConsentReinstateEndpointExperiment
// Dependencies: [1449, 2]
// Exports: getIsAppStoreConsentReinstateEndpointEnabled

// Module 19991 (AppStoreConsentReinstateEndpointExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-app-store-consent-reinstate-endpoint", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/safety_flows/experiments/AppStoreConsentReinstateEndpointExperiment.tsx");

export function getIsAppStoreConsentReinstateEndpointEnabled(parentalConsentManager) {
  const obj = { location: parentalConsentManager };
  return config.getConfig(obj).enabled;
}
