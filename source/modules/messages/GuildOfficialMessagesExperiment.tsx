// Module ID: 5645
// Function ID: 48260
// Name: experiment
// Dependencies: []

// Module 5645 (experiment)
const _module = require(dependencyMap[0]);
const obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: true, 炖锅: true, config: { enabled: true } };
const items = [obj];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/messages/GuildOfficialMessagesExperiment.tsx");

export default experiment;
