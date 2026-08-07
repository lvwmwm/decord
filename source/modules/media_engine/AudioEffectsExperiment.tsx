// Module ID: 13097
// Function ID: 13098
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 13097 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { probeAudioEffects: false };
obj = { name: "2026-03-audio-effects-probe", kind: "user", defaultConfig: obj, variations: null };
obj = { 1: null };
const obj1 = {};
const merged = Object.assign(obj);
obj1.probeAudioEffects = true;
obj[1] = obj1;
obj[3] = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/AudioEffectsExperiment.tsx");

export default apexExperiment;
