// Module ID: 12862
// Function ID: 100069
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12862 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-spatial-audio-for-voice", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/voice_panel/SpatialAudioForVoiceExperiment.tsx");

export default apexExperiment;
