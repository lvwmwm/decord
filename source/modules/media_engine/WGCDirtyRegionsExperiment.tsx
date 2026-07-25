// Module ID: 12828
// Function ID: 99920
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12828 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-wgc-dirty-regions", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/WGCDirtyRegionsExperiment.tsx");

export const WGCDirtyRegionsExperiment = apexExperiment;
