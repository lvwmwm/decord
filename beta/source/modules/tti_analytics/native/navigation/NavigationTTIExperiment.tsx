// Module ID: 18961
// Function ID: 18962
// Name: NavigationTTIExperiment
// Dependencies: [1449, 2]

// Module 18961 (NavigationTTIExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-mobile-interaction-tti", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIExperiment.tsx");

export const NavigationTTIExperiment = apexExperiment;
