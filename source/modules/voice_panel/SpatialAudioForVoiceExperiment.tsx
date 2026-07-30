// Module ID: 12879
// Function ID: 12880
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 12879 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-spatial-audio-for-voice", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/voice_panel/SpatialAudioForVoiceExperiment.tsx");

export default apexExperiment;
