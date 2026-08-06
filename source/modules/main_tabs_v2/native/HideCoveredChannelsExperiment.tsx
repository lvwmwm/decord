// Module ID: 15538
// Function ID: 15539
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 15538 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-hide-covered-channels", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/HideCoveredChannelsExperiment.tsx");

export default apexExperiment;
