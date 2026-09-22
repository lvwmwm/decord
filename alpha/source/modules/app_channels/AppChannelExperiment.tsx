// Module ID: 9825
// Function ID: 9826
// Name: AppChannelExperiment
// Dependencies: [1434, 2]

// Module 9825 (AppChannelExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", name: "2026-07-app-channels", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/app_channels/AppChannelExperiment.tsx");

export default apexExperiment;
