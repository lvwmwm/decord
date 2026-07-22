// Module ID: 10230
// Function ID: 79059
// Name: items
// Dependencies: []

// Module 10230 (items)
const _module = require(dependencyMap[0]);
let obj = { shapes: null, flex: null, sk: null, defaultConfig: { enabled: false } };
obj = { displayNameStylesEnabled: null, submitButtonEnabled: null, config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
