// Module ID: 16227
// Function ID: 16228
// Name: DistributedClipsExperiment
// Dependencies: [1449, 2]

// Module 16227 (DistributedClipsExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-05-distributed-clips", defaultConfig: { enableDistributedClips: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enableDistributedClips: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;
