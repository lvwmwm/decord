// Module ID: 12570
// Function ID: 96704
// Name: apexExperiment
// Dependencies: []

// Module 12570 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { margin: true, paddingHorizontal: true, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/presence/ContentClassificationPresenceFilterExperiment.tsx");

export const ContentClassificationPresenceFilterExperiment = apexExperiment;
