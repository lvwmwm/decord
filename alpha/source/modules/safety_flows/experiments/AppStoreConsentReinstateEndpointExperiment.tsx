// Module ID: 8037
// Function ID: 8038
// Name: AppStoreConsentReinstateEndpointExperiment
// Dependencies: [1450, 2]
// Exports: getIsAppStoreConsentReinstateEndpointEnabled

// Module 8037 (AppStoreConsentReinstateEndpointExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-app-store-consent-reinstate-endpoint", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/safety_flows/experiments/AppStoreConsentReinstateEndpointExperiment.tsx");

export function getIsAppStoreConsentReinstateEndpointEnabled(appStoreAgeSignalReport, arg1) {
  let autoTrackExposure = arg1;
  if (arg1 === undefined) {
    autoTrackExposure = true;
  }
  const obj = { location: appStoreAgeSignalReport };
  return config.getConfig(obj, { autoTrackExposure }).enabled;
}
