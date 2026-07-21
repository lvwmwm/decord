// Module ID: 15883
// Function ID: 121630
// Name: experiment
// Dependencies: []

// Module 15883 (experiment)
const _module = require(dependencyMap[1]);
let obj = { commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
obj = { -1174339580: false, -1169096700: false, config: { enabled: true } };
const items = [obj];
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
