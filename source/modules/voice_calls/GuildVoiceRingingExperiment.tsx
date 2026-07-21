// Module ID: 8913
// Function ID: 70310
// Name: experiment
// Dependencies: []

// Module 8913 (experiment)
const _module = require(dependencyMap[1]);
const items = [{ config: { enabled: true } }];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, treatments: items });
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/voice_calls/GuildVoiceRingingExperiment.tsx");

export default experiment;
