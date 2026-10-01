// Module ID: 16397
// Function ID: 16398
// Name: NavigationTTIExperiment
// Dependencies: [1435, 2]

// Module 16397 (NavigationTTIExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-mobile-interaction-tti", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIExperiment.tsx");

export const NavigationTTIExperiment = apexExperiment;
