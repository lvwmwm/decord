// Module ID: 13362
// Function ID: 13363
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 13362 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-08-browser-hevc", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/BrowserHevcExperiment.tsx");

export default apexExperiment;
