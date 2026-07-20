// Module ID: 10518
// Function ID: 82177
// Name: apexExperiment
// Dependencies: []

// Module 10518 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { "Null": "GUILD_DISCOVERY_REQUIREMENTS", "Null": "YOU_BAR_AVATAR_LARGE_PX", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx");

export const ContentClassificationEmbeddedActivityFilterExperiment = apexExperiment;
