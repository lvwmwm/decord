// Module ID: 13373
// Function ID: 13374
// Name: SpatialAudioForVoiceExperiment
// Dependencies: [1441, 2]

// Module 13373 (SpatialAudioForVoiceExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-05-spatial-audio-for-voice", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_panel/SpatialAudioForVoiceExperiment.tsx");

export default apexExperiment;
