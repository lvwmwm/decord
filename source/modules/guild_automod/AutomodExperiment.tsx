// Module ID: 10229
// Function ID: 79046
// Name: experiment
// Dependencies: []

// Module 10229 (experiment)
const _module = require(dependencyMap[0]);
const obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: null, 炖锅: null, config: { enabled: true } };
const items = [obj];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_automod/AutomodExperiment.tsx");

export const AutomodMentionRaidLimit = experiment;
