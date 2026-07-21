// Module ID: 16428
// Function ID: 126917
// Name: experiment
// Dependencies: []

// Module 16428 (experiment)
const _module = require(dependencyMap[0]);
let obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: 0, 炖锅: 51, config: { "Null": "Small", "Null": "sm", d: "Placeholder" } };
const items = [obj, , , ];
obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: null, 炖锅: null, config: { "Null": 500, "Null": 1000, d: 60000 } };
items[1] = obj;
items[2] = { config: { "Null": null, "Null": null, d: null } };
const obj1 = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: null, 炖锅: "9344f1089c1146b314e038ef9542fb46", config: { "Null": "hidden", "Null": "all", d: true } };
items[3] = obj1;
const experiment = _module.createExperiment({ defaultConfig: { "Null": "#ffa813", "Null": "absolute", d: null }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/native_intents/NativeIntentsExperiment.tsx");

export default experiment;
