// Module ID: 13032
// Function ID: 13033
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 13032 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-08-browser-hevc", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/BrowserHevcExperiment.tsx");

export default apexExperiment;
