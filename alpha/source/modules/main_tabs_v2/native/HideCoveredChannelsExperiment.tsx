// Module ID: 16968
// Function ID: 16969
// Name: HideCoveredChannelsExperiment
// Dependencies: [1453, 2]

// Module 16968 (HideCoveredChannelsExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-hide-covered-channels", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/HideCoveredChannelsExperiment.tsx");

export default apexExperiment;
