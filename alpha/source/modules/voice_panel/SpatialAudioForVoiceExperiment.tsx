// Module ID: 5244
// Function ID: 5245
// Name: SpatialAudioForVoiceExperiment
// Dependencies: [1452, 2]

// Module 5244 (SpatialAudioForVoiceExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-05-spatial-audio-for-voice", kind: "user", defaultConfig: { enabled: false, defaultOn: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true, defaultOn: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_panel/SpatialAudioForVoiceExperiment.tsx");

export default apexExperiment;
