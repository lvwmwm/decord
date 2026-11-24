// Module ID: 16537
// Function ID: 16538
// Name: AdRefreshImmediateOnFocusExperiment
// Dependencies: [1450, 2]

// Module 16537 (AdRefreshImmediateOnFocusExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-ad-refresh-immediate-on-focus", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: false }, 2: { enabled: true }, 3: { enabled: true }, 4: { enabled: true }, 5: { enabled: true }, 6: { enabled: true }, 7: { enabled: true }, 8: { enabled: true }, 9: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/ads/AdRefreshImmediateOnFocusExperiment.tsx");

export const AdRefreshImmediateOnFocusExperiment = apexExperiment;
