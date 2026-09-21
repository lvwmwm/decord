// Module ID: 14263
// Function ID: 14264
// Name: DistributedClipsExperiment
// Dependencies: [1434, 2]

// Module 14263 (DistributedClipsExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-05-distributed-clips", defaultConfig: { enableDistributedClips: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enableDistributedClips: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;
