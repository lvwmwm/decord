// Module ID: 14316
// Function ID: 14317
// Name: WGCDirtyRegionsExperiment
// Dependencies: [1438, 2]

// Module 14316 (WGCDirtyRegionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-02-wgc-dirty-regions", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WGCDirtyRegionsExperiment.tsx");

export const WGCDirtyRegionsExperiment = apexExperiment;
