// Module ID: 18019
// Function ID: 18020
// Name: NavigationTTIExperiment
// Dependencies: [1452, 2]

// Module 18019 (NavigationTTIExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-mobile-interaction-tti", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIExperiment.tsx");

export const NavigationTTIExperiment = apexExperiment;
