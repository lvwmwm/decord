// Module ID: 12715
// Function ID: 97614
// Name: apexExperiment
// Dependencies: []

// Module 12715 (apexExperiment)
let obj = { probeAudioEffects: false };
const _module = require(dependencyMap[0]);
obj = { defaultConfig: obj };
obj = {};
const obj1 = {};
const merged = Object.assign(obj);
obj1["probeAudioEffects"] = true;
obj[1] = obj1;
obj.variations = obj;
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/AudioEffectsExperiment.tsx");

export default apexExperiment;
