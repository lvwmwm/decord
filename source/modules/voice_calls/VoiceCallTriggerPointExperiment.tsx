// Module ID: 15887
// Function ID: 121674
// Name: items
// Dependencies: []

// Module 15887 (items)
const _module = require(dependencyMap[1]);
const obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false } };
const items = [{ config: { enabled: true } }];
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
