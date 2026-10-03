// Module ID: 13873
// Function ID: 13874
// Name: BrowserHevcExperiment
// Dependencies: [1440, 2]

// Module 13873 (BrowserHevcExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2025-08-browser-hevc", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/BrowserHevcExperiment.tsx");

export default apexExperiment;
