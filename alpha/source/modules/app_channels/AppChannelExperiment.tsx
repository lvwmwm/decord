// Module ID: 8059
// Function ID: 8060
// Name: AppChannelExperiment
// Dependencies: [1449, 2]

// Module 8059 (AppChannelExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "guild", name: "2026-07-app-channels", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/app_channels/AppChannelExperiment.tsx");

export default apexExperiment;
