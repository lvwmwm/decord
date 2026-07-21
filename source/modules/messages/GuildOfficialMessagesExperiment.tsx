// Module ID: 5645
// Function ID: 48252
// Name: experiment
// Dependencies: []

// Module 5645 (experiment)
const _module = require(dependencyMap[0]);
const items = [{ config: { enabled: true } }];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
