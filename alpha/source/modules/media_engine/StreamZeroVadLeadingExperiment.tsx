// Module ID: 16031
// Function ID: 16032
// Name: StreamZeroVadLeadingExperiment
// Dependencies: [1449, 2]

// Module 16031 (StreamZeroVadLeadingExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-stream-zero-vad-leading", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/StreamZeroVadLeadingExperiment.tsx");

export const StreamZeroVadLeadingExperiment = apexExperiment;
