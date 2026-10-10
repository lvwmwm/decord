// Module ID: 18582
// Function ID: 18583
// Name: VideoStutterMitigationExperiment
// Dependencies: [1453, 2]

// Module 18582 (VideoStutterMitigationExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-video-stutter-mitigation", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoStutterMitigationExperiment.tsx");

export default apexExperiment;
