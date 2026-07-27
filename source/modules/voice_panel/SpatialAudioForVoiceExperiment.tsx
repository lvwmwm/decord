// Module ID: 12819
// Function ID: 99899
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12819 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-spatial-audio-for-voice", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/voice_panel/SpatialAudioForVoiceExperiment.tsx");

export default apexExperiment;
