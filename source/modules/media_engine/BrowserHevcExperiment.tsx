// Module ID: 12820
// Function ID: 99649
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12820 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-08-browser-hevc", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/BrowserHevcExperiment.tsx");

export default apexExperiment;
