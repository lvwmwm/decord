// Module ID: 17334
// Function ID: 17335
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 17334 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-video-stutter-mitigation", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/media_engine/VideoStutterMitigationExperiment.tsx");

export default apexExperiment;
