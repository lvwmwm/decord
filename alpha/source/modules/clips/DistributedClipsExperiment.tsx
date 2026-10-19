// Module ID: 15079
// Function ID: 15080
// Name: DistributedClipsExperiment
// Dependencies: [1455, 2]

// Module 15079 (DistributedClipsExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-05-distributed-clips", defaultConfig: { enableDistributedClips: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enableDistributedClips: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/DistributedClipsExperiment.tsx");

export default apexExperiment;
