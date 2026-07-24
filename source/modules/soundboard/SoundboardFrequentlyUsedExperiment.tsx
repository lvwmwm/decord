// Module ID: 15798
// Function ID: 121865
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 15798 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-06-soundboard-frequently-used", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/soundboard/SoundboardFrequentlyUsedExperiment.tsx");

export default apexExperiment;
