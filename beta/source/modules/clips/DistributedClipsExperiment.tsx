// Module ID: 14266
// Function ID: 14267
// Name: DistributedClipsExperiment
// Dependencies: [1438, 2]

// Module 14266 (DistributedClipsExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-05-distributed-clips", defaultConfig: { enableDistributedClips: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enableDistributedClips: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;
