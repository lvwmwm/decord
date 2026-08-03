// Module ID: 14228
// Function ID: 14229
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 14228 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enableFastAdRecheck: false }, 3: { enableFastAdRecheck: true }, 4: { enableFastAdRecheck: true }, 5: { enableFastAdRecheck: true } };
obj[5] = { enableFastAdRecheck: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-ad-recheck-interval-experiment", kind: "user", defaultConfig: { enableFastAdRecheck: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/quests/experiments/AdRecheckIntervalExperiment.tsx");

export default apexExperiment;
