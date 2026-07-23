// Module ID: 12829
// Function ID: 99770
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12829 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { probeAudioEffects: false };
obj = { name: "2026-03-audio-effects-probe", kind: "user" };
obj.defaultConfig = obj;
obj = {};
const obj1 = {};
const merged = Object.assign(obj);
obj1["probeAudioEffects"] = true;
obj[1] = obj1;
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/AudioEffectsExperiment.tsx");

export default apexExperiment;
