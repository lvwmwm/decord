// Module ID: 12634
// Function ID: 97232
// Name: apexExperiment
// Dependencies: []

// Module 12634 (apexExperiment)
let obj = {};
const _module = require(dependencyMap[0]);
obj = { defaultConfig: obj };
obj = {};
const obj1 = {};
const merged = Object.assign(obj);
obj1["showPTTJoinTooltip"] = true;
obj1["showPTTNoKeybindWarning"] = true;
obj1["showPTTSpeakingIndicator"] = true;
obj[1] = obj1;
const obj2 = {};
const merged1 = Object.assign(obj);
obj2["showPTTIconIndicator"] = true;
obj[2] = obj2;
obj.variations = obj;
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/voice_calls/PTTEducationExperiment.tsx");

export default apexExperiment;
