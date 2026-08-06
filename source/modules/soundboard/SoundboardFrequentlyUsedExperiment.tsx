// Module ID: 16034
// Function ID: 16035
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 16034 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-soundboard-frequently-used", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/soundboard/SoundboardFrequentlyUsedExperiment.tsx");

export default apexExperiment;
