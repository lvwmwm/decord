// Module ID: 12572
// Function ID: 96726
// Name: apexExperiment
// Dependencies: []

// Module 12572 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { bottom: "WISHLIST_ITEM_CLICKED", name: "EPHEMERAL_SUCCESS", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/presence/ContentClassificationPresenceFilterExperiment.tsx");

export const ContentClassificationPresenceFilterExperiment = apexExperiment;
