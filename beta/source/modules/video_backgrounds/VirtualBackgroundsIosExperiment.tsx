// Module ID: 5941
// Function ID: 5942
// Name: VirtualBackgroundsIosExperiment
// Dependencies: [1447, 2]

// Module 5941 (VirtualBackgroundsIosExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-virtual-backgrounds-ios", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/video_backgrounds/VirtualBackgroundsIosExperiment.tsx");

export default apexExperiment;
