// Module ID: 16238
// Function ID: 16239
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 16238 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-soundboard-frequently-used", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/soundboard/SoundboardFrequentlyUsedExperiment.tsx");

export default apexExperiment;
