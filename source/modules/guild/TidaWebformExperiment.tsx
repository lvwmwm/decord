// Module ID: 5489
// Function ID: 46828
// Name: experiment
// Dependencies: []

// Module 5489 (experiment)
const _module = require(dependencyMap[0]);
const obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: null, 炖锅: null, config: { tidaWebformEnabled: true } };
const items = [obj];
const experiment = _module.createExperiment({ defaultConfig: { tidaWebformEnabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
