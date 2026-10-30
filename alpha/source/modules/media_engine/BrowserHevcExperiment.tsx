// Module ID: 15900
// Function ID: 15901
// Name: BrowserHevcExperiment
// Dependencies: [1448, 2]

// Module 15900 (BrowserHevcExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2025-08-browser-hevc", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/BrowserHevcExperiment.tsx");

export default apexExperiment;
