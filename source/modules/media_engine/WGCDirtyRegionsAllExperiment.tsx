// Module ID: 12818
// Function ID: 99794
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12818 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-wgc-dirty-regions-all", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/WGCDirtyRegionsAllExperiment.tsx");

export const WGCDirtyRegionsAllExperiment = apexExperiment;
