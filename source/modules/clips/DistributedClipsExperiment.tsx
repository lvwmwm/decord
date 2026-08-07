// Module ID: 4368
// Function ID: 4369
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 4368 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enableDistributedClips: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-05-distributed-clips", defaultConfig: { enableDistributedClips: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;
