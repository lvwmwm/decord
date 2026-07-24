// Module ID: 12817
// Function ID: 99793
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12817 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-wgc-dirty-regions", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/WGCDirtyRegionsExperiment.tsx");

export const WGCDirtyRegionsExperiment = apexExperiment;
