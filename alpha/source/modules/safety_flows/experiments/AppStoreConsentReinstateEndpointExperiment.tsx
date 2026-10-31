// Module ID: 20077
// Function ID: 20078
// Name: AppStoreConsentReinstateEndpointExperiment
// Dependencies: [1447, 2]
// Exports: getIsAppStoreConsentReinstateEndpointEnabled

// Module 20077 (AppStoreConsentReinstateEndpointExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-app-store-consent-reinstate-endpoint", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/safety_flows/experiments/AppStoreConsentReinstateEndpointExperiment.tsx");

export function getIsAppStoreConsentReinstateEndpointEnabled(openSafetyFlow) {
  const obj = { location: openSafetyFlow };
  return config.getConfig(obj).enabled;
}
