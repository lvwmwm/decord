// Module ID: 5267
// Function ID: 5268
// Name: VirtualBackgroundsIosExperiment
// Dependencies: [1452, 2]

// Module 5267 (VirtualBackgroundsIosExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-virtual-backgrounds-ios", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/video_backgrounds/VirtualBackgroundsIosExperiment.tsx");

export default apexExperiment;
