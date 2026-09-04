// Module ID: 4552
// Function ID: 4553
// Name: apexExperiment
// Dependencies: [1468, 2]

// Module 4552 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enableDistributedClips: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-05-distributed-clips", defaultConfig: { enableDistributedClips: false }, variations: obj });
const result = set.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;
