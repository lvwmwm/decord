// Module ID: 13360
// Function ID: 13361
// Name: AV1BitrateTuningExperiment
// Dependencies: [1441, 2]

// Module 13360 (AV1BitrateTuningExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-05-av1-bitrate-tuning", kind: "user", defaultConfig: { bitrate: 3500000 }, variations: obj2 };
obj2 = { 1: null, 2: { bitrate: 3000000 } };
obj2[2] = { bitrate: 2500000 };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/AV1BitrateTuningExperiment.tsx");

export const AV1StreamBitrateReductionExperiment = apexExperiment;
