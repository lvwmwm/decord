// Module ID: 13170
// Function ID: 13171
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 13170 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-wgc-dirty-regions", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/WGCDirtyRegionsExperiment.tsx");

export const WGCDirtyRegionsExperiment = apexExperiment;
