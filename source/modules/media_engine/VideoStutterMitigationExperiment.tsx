// Module ID: 16514
// Function ID: 128847
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 16514 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-video-stutter-mitigation", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/VideoStutterMitigationExperiment.tsx");

export default apexExperiment;
