// Module ID: 18346
// Function ID: 18347
// Name: VideoStutterMitigationExperiment
// Dependencies: [1452, 2]

// Module 18346 (VideoStutterMitigationExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-video-stutter-mitigation", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoStutterMitigationExperiment.tsx");

export default apexExperiment;
