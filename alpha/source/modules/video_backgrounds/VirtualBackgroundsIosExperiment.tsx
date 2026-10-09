// Module ID: 5268
// Function ID: 5269
// Name: VirtualBackgroundsIosExperiment
// Dependencies: [1453, 2]

// Module 5268 (VirtualBackgroundsIosExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-virtual-backgrounds-ios", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/video_backgrounds/VirtualBackgroundsIosExperiment.tsx");

export default apexExperiment;
