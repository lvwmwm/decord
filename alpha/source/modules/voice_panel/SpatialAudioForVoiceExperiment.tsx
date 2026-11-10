// Module ID: 6052
// Function ID: 6053
// Name: SpatialAudioForVoiceExperiment
// Dependencies: [1449, 2]

// Module 6052 (SpatialAudioForVoiceExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-05-spatial-audio-for-voice", kind: "user", defaultConfig: { enabled: false, defaultOn: false, positioningModel: "" }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, defaultOn: true, positioningModel: "" } };
obj2[2] = { enabled: true, defaultOn: true, positioningModel: "conversation" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_panel/SpatialAudioForVoiceExperiment.tsx");

export default apexExperiment;
