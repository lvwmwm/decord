// Module ID: 15304
// Function ID: 116752
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 15304 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-hide-covered-channels", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/HideCoveredChannelsExperiment.tsx");

export default apexExperiment;
