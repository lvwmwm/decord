// Module ID: 14276
// Function ID: 14277
// Name: StreamZeroVadLeadingExperiment
// Dependencies: [1434, 2]

// Module 14276 (StreamZeroVadLeadingExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-stream-zero-vad-leading", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/StreamZeroVadLeadingExperiment.tsx");

export const StreamZeroVadLeadingExperiment = apexExperiment;
