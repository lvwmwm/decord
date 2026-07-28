// Module ID: 4232
// Function ID: 36197
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 4232 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-05-distributed-clips", defaultConfig: { enableDistributedClips: false }, variations: { [1]: { enableDistributedClips: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;
