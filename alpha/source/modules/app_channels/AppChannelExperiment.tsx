// Module ID: 8827
// Function ID: 8828
// Name: AppChannelExperiment
// Dependencies: [1455, 2]

// Module 8827 (AppChannelExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "guild", name: "2026-07-app-channels", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/app_channels/AppChannelExperiment.tsx");

export default apexExperiment;
