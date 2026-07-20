// Module ID: 10223
// Function ID: 79016
// Name: experiment
// Dependencies: []

// Module 10223 (experiment)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": null, "Bool(false)": null, config: { enabled: true } };
const items = [obj];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
